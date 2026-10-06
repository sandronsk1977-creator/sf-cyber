/* ============================================================
   SF Cyber · LabKit
   Motor compartilhado dos laboratorios (Redes e Ciberseguranca).

   Uso:  SFKit.init({ id, titulo, subtitulo, ... })

   O laboratorio so declara conteudo (niveis, teoria, quiz, comandos,
   cena do canvas). Este arquivo cuida de estado, terminal, SF Bot,
   pontuacao, prova final, certificado e persistencia.
   ============================================================ */
(function (global) {
  'use strict';

  var GA_ID = 'G-YFJCPYJWQV';
  var NAME_BLOCK_WORDS = ['teste', 'test', 'fulano', 'fulana', 'aluno', 'aluna', 'anonimo', 'anonima',
    'exemplo', 'sample', 'nome', 'aqui', 'blabla', 'asdf', 'asdasd', 'qwe', 'qwerty', 'xxx', 'aaa', 'zzz'];

  var cfg = null;
  var el = {};
  var state = null;
  var quizIndex = 0, quizScore = 0, quizAnswered = false;
  var robotStepKey = '', robotTimer = null;

  // ---------------- utilidades ----------------
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s); }
  function norm(s) { return esc(s).trim().toLowerCase().replace(/["']/g, '').replace(/\s+/g, ' '); }

  // ---------------- validacao de nome ----------------
  function validateStudentName(raw) {
    var value = esc(raw).replace(/\s+/g, ' ').trim();
    if (!value) return { ok: false, msg: 'Informe seu nome para acessar o laboratório e emitir o certificado.' };
    if (!/^[\p{L}\p{M}]+(?:[ '\-][\p{L}\p{M}]+)*$/u.test(value)) {
      return { ok: false, msg: 'Use apenas letras no nome. Não use números, e-mails ou links.' };
    }
    var words = value.split(' ');
    if (words.length < 2) return { ok: false, msg: 'Digite nome e sobrenome para emitir o certificado.' };
    if (words.some(function (w) { return w.replace(/[ '\-]/g, '').length < 2; })) {
      return { ok: false, msg: 'Cada parte do nome precisa ter pelo menos 2 letras.' };
    }
    if (value.length < 6) return { ok: false, msg: 'O nome completo precisa ter pelo menos 6 caracteres.' };
    var flat = words.map(function (w) {
      return w.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[ '\-]/g, '');
    });
    if (flat.some(function (w) { return /^([a-z])\1+$/.test(w) || NAME_BLOCK_WORDS.indexOf(w) !== -1; })) {
      return { ok: false, msg: 'Informe um nome válido para o certificado.' };
    }
    return { ok: true, value: value };
  }

  function showNameError(msg) {
    if (el.nameError) { if (msg) el.nameError.textContent = msg; el.nameError.hidden = false; }
    if (el.nameInput) { el.nameInput.style.borderColor = '#c50f1f'; el.nameInput.focus(); }
  }

  function clearNameError() {
    if (el.nameError) el.nameError.hidden = true;
    if (el.nameInput) el.nameInput.style.borderColor = 'rgba(0,120,212,0.45)';
  }

  function requireStudentName() {
    var res = validateStudentName((el.nameInput && el.nameInput.value) || state.studentName || '');
    if (!res.ok) { showNameError(res.msg); return ''; }
    state.studentName = res.value;
    if (el.nameInput && el.nameInput.value !== res.value) el.nameInput.value = res.value;
    clearNameError();
    return res.value;
  }

  // ---------------- DOM do laboratorio ----------------
  function shieldSvg(id) {
    return '<svg class="shield sf-shield" viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#ff2d55"/><stop offset="0.5" stop-color="#7b2ff7"/><stop offset="1" stop-color="#00d4ff"/>' +
      '</linearGradient></defs>' +
      '<path d="M32 4 L56 12 V30 C56 46 45 57 32 62 C19 57 8 46 8 30 V12 Z" fill="url(#' + id + ')" stroke="#ffffff" stroke-width="3"/>' +
      '<text x="32" y="41" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">SF</text>' +
      '</svg>';
  }

  function robotSvg() {
    return '<svg class="robot-figure" viewBox="0 0 130 130" aria-hidden="true">' +
      '<line x1="60" y1="34" x2="46" y2="10" stroke="#00d4ff" stroke-width="4" stroke-linecap="round"/>' +
      '<circle class="antena-led" cx="46" cy="10" r="5" fill="#ffd700"/>' +
      '<rect x="8" y="48" width="14" height="26" rx="6" fill="#1c2638" stroke="#00d4ff" stroke-width="2"/>' +
      '<rect x="98" y="48" width="14" height="26" rx="6" fill="#1c2638" stroke="#00d4ff" stroke-width="2"/>' +
      '<rect x="20" y="32" width="80" height="58" rx="18" fill="#232a33" stroke="#00d4ff" stroke-width="3"/>' +
      '<circle class="eye" cx="47" cy="58" r="7" fill="#00d4ff"/><circle class="eye" cx="73" cy="58" r="7" fill="#00d4ff"/>' +
      '<path d="M48 74 Q60 82 72 74" stroke="#00d4ff" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<rect x="36" y="94" width="48" height="24" rx="9" fill="#232a33" stroke="#00d4ff" stroke-width="2"/>' +
      '<circle cx="60" cy="106" r="5" fill="#ff2d55"/>' +
      '<g class="robot-arm"><rect x="76" y="96" width="28" height="10" rx="5" fill="#00d4ff"/>' +
      '<path d="M102 92 L122 80 L124 122 L104 108 Z" fill="#ffd700" stroke="#7b2ff7" stroke-width="1.5"/></g></svg>';
  }

  function buildDom() {
    var lvlCount = cfg.levels.length;

    document.body.innerHTML =
      '<div class="header">' +
        '<h1>' + shieldSvg('sfGradH') + 'SF Academia Cibersegurança e Redes</h1>' +
        '<p>' + cfg.subtitulo + '</p>' +
        '<div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>' +
        '<div class="stats">' +
          '<div>Nível: <span id="levelDisplay">1</span>/' + lvlCount + '</div>' +
          '<div>Pontos: <span id="scoreDisplay">0</span></div>' +
          '<div>Comandos digitados: <span id="attemptsDisplay">0</span></div>' +
        '</div>' +
      '</div>' +

      '<div class="main-container">' +
        '<div class="topology-panel">' +
          '<h2>' + cfg.painelTitulo + '</h2>' +
          '<canvas class="topology-canvas" id="topologyCanvas"></canvas>' +
          '<div class="legend">' +
            '<div class="legend-item"><span class="legend-color" style="background:#ff5f56"></span> Exposto/vulnerável</div>' +
            '<div class="legend-item"><span class="legend-color" style="background:#ffbd2e"></span> Sem teste</div>' +
            '<div class="legend-item"><span class="legend-color" style="background:#27c93f"></span> Corrigido/ok</div>' +
          '</div>' +
          '<table class="svc-table" style="margin-top:15px;">' +
            '<thead><tr><th>' + (cfg.colunaStatus || 'Item') + '</th><th>Status</th></tr></thead>' +
            '<tbody id="svcTableBody"></tbody>' +
          '</table>' +
          (cfg.botoesLaterais || '') +
        '</div>' +

        '<div class="terminal-panel">' +
          '<div class="task-panel">' +
            '<div class="level-title" id="levelTitle"></div>' +
            '<div class="task-desc" id="taskDesc"></div>' +
            '<div class="hint" id="hintBox" style="display:none"></div>' +
          '</div>' +
          '<div class="terminal">' +
            '<div class="terminal-header">' +
              '<div class="terminal-dot red"></div><div class="terminal-dot yellow"></div><div class="terminal-dot green"></div>' +
              '<span class="terminal-title">' + esc(cfg.terminalTitulo) + '</span>' +
            '</div>' +
            '<div class="terminal-body" id="terminalBody" aria-live="polite">' +
              '<div class="output system">Laboratório SF Cyber inicializado.</div>' +
              '<div class="output info">' + esc(cfg.bannerTerminal) + '</div>' +
              '<div class="output system">Digite "ajuda" para ver os comandos disponíveis.</div>' +
              '<div class="input-line">' +
                '<span class="prompt" id="promptText">' + esc(cfg.prompt) + '</span>' +
                '<input type="text" class="terminal-input" id="terminalInput" autocomplete="off" spellcheck="false" aria-label="Linha de comando">' +
              '</div>' +
            '</div>' +
            '<div class="autocomplete" id="autocomplete"></div>' +
          '</div>' +
          '<div class="buttons-row">' +
            '<button class="btn btn-primary" onclick="showHint()">💡 Dica</button>' +
            '<button class="btn btn-ghost" onclick="openTheory()">📚 Revisão</button>' +
            (cfg.guide ? '<button class="btn btn-ghost" onclick="openGuide()">🧭 Guia</button>' : '') +
            '<button class="btn btn-ghost" onclick="openLevelMap()">🗺️ Níveis</button>' +
            '<button class="btn btn-warning" onclick="resetLevel()">🔄 Resetar Nível</button>' +
            '<button class="btn btn-success" onclick="nextLevel()">⏭ Próximo Nível</button>' +
            '<button class="btn btn-danger" onclick="confirmAction()">🏠 Reiniciar Jogo</button>' +
            '<button class="btn btn-warning" id="btnProvaFinal" style="display:none;" onclick="openQuiz()">📝 Prova Final</button>' +
          '</div>' +
          '<div class="reference-panel">' +
            '<h3>📖 Referência de Comandos</h3>' +
            '<div class="cmd-list">' + (cfg.referencia || '') + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="robot" id="robot">' +
        '<div class="robot-bubble" id="robotBubble">' +
          '<button class="rb-close" onclick="closeRobot()" aria-label="Fechar SF Bot">✕</button>' +
          '<span class="rb-title" id="robotTitle">SF Bot 🤖</span>' +
          '<span class="rb-text" id="robotText"></span>' +
          '<button class="rb-next" id="robotContinueBtn" style="display:none;" onclick="robotContinue()">▶ Iniciar Etapa</button>' +
        '</div>' + robotSvg() +
      '</div>' +
      '<button class="robot-reopen" id="robotReopenBtn" onclick="openRobot()" title="Reabrir SF Bot" aria-label="Reabrir SF Bot">🤖</button>' +

      modalTheory() +
      modalLevelMap() +
      (cfg.guide ? modalGuide() : '') +
      modalCuration() +
      modalQuiz() +
      modalConfirm() +
      modalWelcome() +
      modalSuccess() +
      modalComplete() +
      modalCertificate();

    el.term = $('terminalBody');
    el.input = $('terminalInput');
    el.nameInput = $('studentNameInput');
    el.nameError = $('nameError');
    el.canvas = $('topologyCanvas');
    el.ctx = el.canvas.getContext('2d');
    el.ctx.roundRect = function (x, y, w, h, r) {
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
    };
  }

  function modalShell(id, title, body, footer, wide) {
    return '<div class="modal-overlay" id="' + id + '" role="dialog" aria-modal="true" aria-labelledby="' + id + '-title">' +
      '<div class="modal"' + (wide ? ' style="max-width:780px; text-align:left;"' : '') + '>' +
        '<button class="rb-close" onclick="closeModal(\'' + id + '\')" aria-label="Fechar">✕</button>' +
        '<h2 id="' + id + '-title">' + title + '</h2>' + body +
        (footer || '<div class="modal-footer center"><button class="btn btn-primary" onclick="closeModal(\'' + id + '\')">Fechar</button></div>') +
      '</div></div>';
  }

  function modalTheory() {
    return modalShell('theoryModal', '📚 Revisão de Conceitos',
      '<p>Resumo rápido dos conceitos que você acabou de praticar.</p><div class="concepts-list" id="theoryContent"></div>',
      '<div class="modal-footer center"><button class="btn btn-primary" onclick="closeModal(\'theoryModal\')">Entendi! ✅</button></div>');
  }

  function modalLevelMap() {
    return modalShell('levelMapModal', '🗺️ Mapa dos Níveis', '<div class="level-map-grid" id="levelMapGrid"></div>');
  }

  function modalGuide() {
    var tabs = cfg.guide.abas.map(function (a) {
      return '<button class="guide-tab" data-tab="' + a.id + '" onclick="openGuide(\'' + a.id + '\')">' + a.label + '</button>';
    }).join('');
    var bodies = cfg.guide.abas.map(function (a) {
      return '<div class="guide" id="guide-' + a.id + '"' + (a.id === cfg.guide.abas[0].id ? '' : ' style="display:none;"') + '>' + a.html + '</div>';
    }).join('');
    return modalShell('guideModal', '🧭 ' + esc(cfg.guide.titulo),
      '<div class="guide-tabs">' + tabs + '</div>' + bodies, null, true);
  }

  function modalCuration() {
    return modalShell('curationModal', '⚖️ Curadoria e escopo do laboratório',
      '<div class="curation-list">' + cfg.curadoria + '</div>',
      '<div class="modal-footer center"><button class="btn btn-primary" onclick="closeModal(\'curationModal\')">Entendi, vou fazer direito ✅</button></div>',
      true);
  }

  function modalQuiz() {
    return '<div class="modal-overlay" id="quizModal" role="dialog" aria-modal="true" aria-labelledby="quiz-title">' +
      '<div class="modal" style="position:relative;">' +
        '<button class="rb-close" onclick="closeModal(\'quizModal\')" aria-label="Fechar prova final">✕</button>' +
        '<h2 id="quiz-title">📝 Prova Final</h2>' +
        '<p id="quizQuestion"></p><div id="quizOptions"></div>' +
        '<div class="quiz-feedback" id="quizFeedback"></div>' +
        '<div class="modal-footer" id="quizFooter">' +
          '<button class="btn btn-primary" id="quizNextBtn" onclick="quizNext()">Próxima Pergunta</button>' +
        '</div>' +
      '</div></div>';
  }

  function modalConfirm() {
    return modalShell('confirmModal', 'Tem certeza?', '<p id="confirmText"></p>',
      '<div class="modal-footer">' +
        '<button class="btn btn-ghost" onclick="closeModal(\'confirmModal\')">Cancelar</button>' +
        '<button class="btn btn-danger" id="confirmOkBtn">Sim, continuar</button>' +
      '</div>');
  }

  function modalWelcome() {
    var feats = cfg.features.map(function (f, i) {
      return '<div class="feature-item"><div class="icon">' + (i + 1) + '</div><span>' + f + '</span></div>';
    }).join('');
    return '<div class="modal-overlay active" id="welcomeModal">' +
      '<div class="modal welcome-modal">' +
        '<h2>' + shieldSvg('sfGradM').replace('sf-shield', 'shield-m') +
          '<span class="welcome-white">Bem-Vindo à SF Cyber</span><br>' +
          '<span class="welcome-grad">Academia CiberSegurança e Redes</span></h2>' +
        '<p>' + cfg.boasVindas + '</p>' +
        '<div class="scope-box">⚖️ <b>Antes de começar:</b> ' + esc(cfg.avisoEscopo) + '</div>' +
        '<div class="name-field" style="margin:14px auto 6px; max-width:340px;">' +
          '<label for="studentNameInput">👤 Nome do aluno (obrigatório, para o certificado):</label>' +
          '<input type="text" id="studentNameInput" placeholder="Digite seu nome..." maxlength="42" autocomplete="off" oninput="clearNameError()">' +
          '<div id="nameError" class="name-error" hidden>Informe seu nome para acessar o laboratório e emitir o certificado.</div>' +
        '</div>' +
        '<div class="features">' + feats + '</div>' +
        '<div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">' +
          '<button class="btn btn-primary" id="welcomeBtn" style="font-size:1.1em; padding:15px 40px;">🧩 Começar!</button>' +
          '<button class="btn btn-ghost" id="resumeBtn" style="display:none; font-size:1.1em; padding:15px 30px;">⏩ Continuar</button>' +
        '</div>' +
        '<div class="sf-credit"><a href="https://projetosdisruptivos.com.br/" target="_blank" rel="noopener">👨‍💻 Developed by <b>SF</b> · Projetos Disruptivos</a></div>' +
      '</div></div>';
  }

  function modalSuccess() {
    return '<div class="modal-overlay" id="successModal">' +
      '<div class="modal"><h2>🎉 Nível Completo!</h2><p id="successMsg"></p>' +
      '<div class="score" id="successScore">+50 pontos</div>' +
      '<button class="btn btn-success" id="btnSuccessPrimary" onclick="nextLevel()" style="font-size:1.1em; padding:15px 40px;">Próximo Nível →</button>' +
      '</div></div>';
  }

  function modalComplete() {
    return '<div class="modal-overlay" id="gameCompleteModal">' +
      '<div class="modal">' +
        '<h2>🏆 Missão Cumprida!</h2><p>' + cfg.missaoCumprida + '</p>' +
        '<div class="score" id="finalScore">Pontuação Final: 0</div>' +
        '<p style="color:#888;">Você agora sabe:</p>' +
        '<div style="text-align:left; color:#4a4a4a; margin:15px 0;">' + (cfg.saberes || '') + '</div>' +
        '<div class="scope-box">⚖️ <b>Lembrete de postura:</b> ' + esc(cfg.posRemember) + '</div>' +
        '<div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">' +
          '<button class="btn btn-ghost" onclick="openCuration()">⚖️ Curadoria</button>' +
          '<button class="btn btn-success" id="btnGameCert" onclick="showCertificate()" style="font-size:1.05em; padding:15px 30px;">🎓 Ver Certificado</button>' +
          '<button class="btn btn-warning" onclick="openQuiz()" style="font-size:1.05em; padding:15px 30px;">📝 Refazer Prova</button>' +
          '<button class="btn btn-primary" onclick="resetGame()" style="font-size:1.1em; padding:15px 40px;">🔄 Jogar Novamente</button>' +
        '</div>' +
      '</div></div>';
  }

  function modalCertificate() {
    return '<div class="modal-overlay" id="certificateModal">' +
      '<div class="modal" style="max-width:720px; text-align:center;">' +
        '<div id="certificatePrint"><div class="cert-shell">' +
          shieldSvg('sfGradCert').replace('width="42" height="42"', 'width="86" height="86"').replace('sf-shield', '') +
          '<div class="cert-kicker">SF Cyber Academy</div>' +
          '<div class="cert-sub">CiberSegurança e Redes</div>' +
          '<div class="cert-rule"></div>' +
          '<div class="cert-title">CERTIFICADO DE CONCLUSÃO</div>' +
          '<p class="cert-lead">Este certificado é concedido a</p>' +
          '<div class="cert-name" id="certStudentName">Aluno(a)</div>' +
          '<p class="cert-lead">por concluir com êxito o laboratório prático</p>' +
          '<div class="cert-lab">' + esc(cfg.certTitulo) + '</div>' +
          '<p class="cert-note">' + esc(cfg.certNota) + '</p>' +
          '<div class="cert-cols">' +
            '<div class="cert-col"><div class="cert-col-v" id="certScore" style="font-size:1.3em; font-weight:bold;"></div><div class="cert-col-line"></div><div class="cert-col-k">PONTUAÇÃO FINAL</div></div>' +
            '<div class="cert-col"><div class="cert-col-v" id="certDate" style="font-size:1.1em;"></div><div class="cert-col-line"></div><div class="cert-col-k">DATA</div></div>' +
            '<div class="cert-col"><div class="cert-col-v" style="font-family:Georgia,serif; font-style:italic;">SF Cyber</div><div class="cert-col-line"></div><div class="cert-col-k">APROVAÇÃO</div></div>' +
          '</div>' +
        '</div></div>' +
        '<div class="modal-footer center">' +
          '<button class="btn btn-primary" onclick="downloadCertificate()">⬇️ Baixar Certificado</button>' +
          '<button class="btn btn-ghost" onclick="closeModal(\'certificateModal\')">Fechar</button>' +
        '</div>' +
      '</div></div>';
  }

  // ---------------- terminal ----------------
  function addOutput(text, cls) {
    var div = document.createElement('div');
    div.className = 'output console-line ' + (cls || '');
    div.textContent = esc(text);
    el.term.insertBefore(div, el.input.parentNode);
    el.term.scrollTop = el.term.scrollHeight;
  }

  function submitCmd() {
    var raw = el.input.value.trim();
    if (raw) {
      addOutput(cfg.prompt + ' ' + raw, 'user');
      state.attempts++;
      updateStats();
      state.commandHistory.push(raw);
      state.historyIndex = state.commandHistory.length;
      try {
        cfg.comandos(raw, api);
      } catch (e) {
        addOutput('Erro interno ao processar o comando: ' + e.message, 'error');
      }
      checkLevel(raw);
    } else {
      addOutput('');
    }
    scheduleUpdateRobot();
    el.input.value = '';
    hideAutocomplete();
    save();
  }

  function navHistory(dir) {
    var h = state.commandHistory;
    if (!h.length) return;
    state.historyIndex += dir;
    if (state.historyIndex < 0) state.historyIndex = 0;
    if (state.historyIndex > h.length) state.historyIndex = h.length;
    el.input.value = state.historyIndex === h.length ? '' : h[state.historyIndex];
  }

  function showAutocomplete() {
    var val = el.input.value.toLowerCase();
    if (!val) { hideAutocomplete(); return; }
    var matches = cfg.sugestoes.filter(function (s) { return s.toLowerCase().indexOf(val) === 0; }).slice(0, 6);
    var box = $('autocomplete');
    if (!matches.length) { hideAutocomplete(); return; }
    box.innerHTML = '';
    matches.forEach(function (m) {
      var d = document.createElement('div');
      d.className = 'ac-item';
      d.textContent = m;
      d.onclick = function () { el.input.value = m; el.input.focus(); hideAutocomplete(); };
      box.appendChild(d);
    });
    box.style.display = 'block';
  }

  function hideAutocomplete() { $('autocomplete').style.display = 'none'; }

  function complete() {
    var val = el.input.value.toLowerCase();
    var m = cfg.sugestoes.filter(function (s) { return s.toLowerCase().indexOf(val) === 0; })[0];
    if (m) { el.input.value = m; showAutocomplete(); }
  }

  // ---------------- SF Bot ----------------
  function setRobot(title, text) {
    $('robotTitle').textContent = title;
    $('robotText').innerHTML = text;
    $('robotBubble').classList.add('visible');
    $('robotBubble').style.animation = 'none';
    void $('robotBubble').offsetWidth;
    $('robotBubble').style.animation = '';
  }

  function getRobotStep(idx) {
    var r = cfg.bot(idx, state);
    if (r) return r;
    return ['SF Bot 🤖', 'Boa sorte nesta etapa!'];
  }

  function updateRobot() {
    var lvl = state.currentLevel;
    var complete = cfg.levels[lvl].check();
    var title, text;
    if (complete) {
      if (lvl >= cfg.levels.length - 1) {
        title = '🏆 SF Bot';
        text = 'Missão cumprida! Toque em <b>Próximo Nível</b> para a prova final.';
      } else {
        title = '🎉 SF Bot · Nível ' + (lvl + 1) + ' completo!';
        text = 'Próxima etapa: toque em <b>Próximo Nível</b> →';
      }
    } else {
      var g = getRobotStep(lvl);
      title = g[0];
      text = g[1];
    }
    var key = lvl + '|' + complete + '|' + title + text;
    if (key !== robotStepKey) { robotStepKey = key; setRobot(title, text); }
  }

  function scheduleUpdateRobot() { clearTimeout(robotTimer); robotTimer = setTimeout(updateRobot, 80); }
  function closeRobot() { $('robot').classList.add('hidden'); $('robotReopenBtn').classList.add('show'); }
  function openRobot() { $('robot').classList.remove('hidden'); $('robotReopenBtn').classList.remove('show'); setTimeout(updateRobot, 50); }
  function robotContinue() { $('robotContinueBtn').style.display = 'none'; el.input.focus(); }

  function robotIntro(greeting) {
    robotStepKey = '';
    setRobot('SF Bot ' + (greeting ? greeting : '🤖 Olá!'),
      greeting === 'De volta!'
        ? 'Seu progresso foi salvo. Bora continuar.'
        : 'Vou te guiar etapa por etapa.<br><br>Antes de tudo: tudo aqui é <b>simulação</b>, nenhum dado é real e nenhum equipamento é atacável. Toque em <b>Iniciar Etapa</b>.');
    $('robotContinueBtn').style.display = 'inline-block';
    $('robotContinueBtn').textContent = '▶ Iniciar Etapa';
  }

  // ---------------- fluxo de niveis ----------------
  function checkLevel(raw) {
    var lvl = cfg.levels[state.currentLevel];
    if (!lvl) return;
    if (state.levelDone[lvl.id]) {
      if (lvl.check() && commandWasTrigger(raw, state.currentLevel)) {
        addOutput('✔ Este nível já foi concluído! Use o botão "Próximo Nível" →', 'warning');
      }
      return;
    }
    if (lvl.check()) {
      state.levelDone[lvl.id] = true;
      var firstTime = !state.scorePaid.has(lvl.id);
      if (firstTime) { state.score += 50; state.scorePaid.add(lvl.id); }
      updateStats();
      drawScene();
      renderStatus();
      $('successMsg').textContent = lvl.successMsg;
      $('successScore').textContent = firstTime ? '+50 pontos' : 'Nível concluído (pontos já contados)';
      $('btnSuccessPrimary').textContent =
        state.currentLevel < cfg.levels.length - 1 ? 'Próximo Nível →' : '🏆 Concluir Missão';
      openModal('successModal');
      updateRobot();
      save();
    }
  }

  function commandWasTrigger(raw, idx) {
    var n = norm(raw || '');
    if (!n) return false;
    var list = cfg.triggers || cfg.triggerList || [];
    return (list[idx] || []).some(function (t) { return norm(t) === n; });
  }

  function nextLevel() {
    closeModal('successModal');
    var lvl = cfg.levels[state.currentLevel];
    if (lvl && !state.levelDone[lvl.id]) {
      addOutput('Você ainda não completou este nível. Use as dicas!', 'warning');
      return;
    }
    if (state.currentLevel < cfg.levels.length - 1) {
      state.currentLevel++;
      renderLevel();
      addOutput('--- Nível ' + (state.currentLevel + 1) + ' · ' +
        cfg.levels[state.currentLevel].title.replace(/^Nível \d+: /, '') + ' ---', 'system');
    } else {
      openGameComplete();
    }
  }

  function showHint() {
    var box = $('hintBox');
    box.innerHTML = cfg.levels[state.currentLevel].hint;
    box.style.display = 'block';
  }

  function resetLevel() {
    var lvl = cfg.levels[state.currentLevel];
    (cfg.resetFlags[state.currentLevel] || []).forEach(function (f) { state.flags[f] = false; });
    state.levelDone[lvl.id] = false;
    closeModal('successModal');
    $('hintBox').style.display = 'none';
    addOutput('Nível reiniciado. Execute os comandos novamente.', 'system');
    renderLevel();
    updateStats();
    save();
  }

  function renderLevel() {
    var lvl = cfg.levels[state.currentLevel];
    $('levelTitle').textContent = lvl.title;
    $('taskDesc').innerHTML = lvl.desc;
    $('hintBox').innerHTML = '';
    $('hintBox').style.display = 'none';
    $('btnProvaFinal').style.display = (state.currentLevel === cfg.levels.length - 1) ? 'inline-block' : 'none';
    $('levelDisplay').textContent = lvl.id;
    $('progressFill').style.width = ((state.currentLevel + 1) / cfg.levels.length) * 100 + '%';
    drawScene();
    renderStatus();
    updateRobot();
    save();
  }

  function updateStats() {
    $('levelDisplay').textContent = cfg.levels[state.currentLevel].id;
    $('scoreDisplay').textContent = state.score;
    $('attemptsDisplay').textContent = state.attempts;
    $('progressFill').style.width = ((state.currentLevel + 1) / cfg.levels.length) * 100 + '%';
  }

  // ---------------- canvas ----------------
  function drawScene() {
    var W = el.canvas.width, H = el.canvas.height;
    el.ctx.clearRect(0, 0, W, H);
    drawGrid(W, H);
    cfg.cena(el.ctx, W, H, state, helpers());
  }

  function drawGrid(W, H) {
    var c = el.ctx;
    c.strokeStyle = 'rgba(255,255,255,0.04)';
    c.lineWidth = 1;
    for (var x = 0; x < W; x += 40) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); }
    for (var y = 0; y < H; y += 40) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
  }

  function helpers() {
    var c = el.ctx;
    return {
      box: function (x, y, w, h, stroke, label, sub, labelColor) {
        c.fillStyle = '#101828';
        c.strokeStyle = stroke;
        c.lineWidth = 3;
        c.roundRect(x, y, w, h, 12);
        c.fill(); c.stroke();
        c.fillStyle = labelColor || stroke;
        c.font = 'bold ' + (h * 0.19) + 'px monospace';
        c.textAlign = 'center';
        c.fillText(label, x + w / 2, y + h * 0.46);
        if (sub) {
          c.fillStyle = '#8ab4d8';
          c.font = (h * 0.13) + 'px monospace';
          c.fillText(sub, x + w / 2, y + h * 0.75);
        }
      },
      arrow: function (x1, y1, x2, y2, color, dashed) {
        c.strokeStyle = color;
        c.lineWidth = 3;
        if (dashed) c.setLineDash([6, 6]); else c.setLineDash([]);
        c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
        c.setLineDash([]);
        var ang = Math.atan2(y2 - y1, x2 - x1);
        c.fillStyle = color;
        c.beginPath();
        c.moveTo(x2, y2);
        c.lineTo(x2 - 10 * Math.cos(ang - 0.4), y2 - 10 * Math.sin(ang - 0.4));
        c.lineTo(x2 - 10 * Math.cos(ang + 0.4), y2 - 10 * Math.sin(ang + 0.4));
        c.closePath();
        c.fill();
      },
      texto: function (x, y, txt, color, size, align) {
        c.fillStyle = color;
        c.font = (size || H0()) + 'px monospace';
        c.textAlign = align || 'left';
        c.fillText(txt, x, y);
      },
      pill: function (x, y, w, h, color, txt) {
        c.fillStyle = '#0b1220';
        c.strokeStyle = color;
        c.lineWidth = 2;
        c.roundRect(x, y, w, h, 6);
        c.fill(); c.stroke();
        c.fillStyle = color;
        c.font = '13px monospace';
        c.textAlign = 'left';
        c.fillText(txt, x + 8, y + h * 0.7);
      },
      cor: { ok: '#27c93f', warn: '#ffbd2e', bad: '#ff5f56', info: '#00d4ff', dim: '#777' }
    };
    function H0() { return 13; }
  }

  // ---------------- tabela de status ----------------
  function renderStatus() {
    var rows = cfg.status(state);
    var tbody = $('svcTableBody');
    tbody.innerHTML = '';
    rows.forEach(function (r) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + r.item + '</td><td class="' + (r.cls || 'mid') + '">' + r.status + '</td>';
      tbody.appendChild(tr);
    });
  }

  // ---------------- modais / acoes ----------------
  function openModal(id) { $(id).classList.add('active'); }
  function closeModal(id) { $(id).classList.remove('active'); }

  function openTheory() {
    var box = $('theoryContent');
    box.innerHTML = '';
    (cfg.teoria[cfg.levels[state.currentLevel].id] || []).forEach(function (t) {
      var div = document.createElement('div');
      div.className = 'concept-item';
      div.innerHTML = '<div class="concept-icon">' + t.icon + '</div><div><b>' + t.title + '</b><br>' + t.desc + '</div>';
      box.appendChild(div);
    });
    openModal('theoryModal');
  }

  function openLevelMap() {
    var grid = $('levelMapGrid');
    grid.innerHTML = '';
    cfg.levels.forEach(function (lvl) {
      var done = !!state.levelDone[lvl.id];
      var current = state.currentLevel === lvl.id - 1;
      var div = document.createElement('div');
      div.className = 'level-card' + (done ? ' done' : current ? ' current' : '');
      div.innerHTML = '<div class="lv-num">' + lvl.id + '</div>' +
        '<div style="font-size:0.85em; color:#4a4a4a;">' + lvl.title.replace(/^Nível \d+: /, '') + '</div>' +
        '<div class="lv-status">' + (done ? '✔ Concluído' : current ? '► Atual' : '') + '</div>';
      if (done || current) div.onclick = function () { state.currentLevel = lvl.id - 1; closeModal('levelMapModal'); renderLevel(); };
      grid.appendChild(div);
    });
    openModal('levelMapModal');
  }

  function openGuide(tab) {
    if (!cfg.guide) return;
    var first = cfg.guide.abas[0].id;
    var target = tab || first;
    cfg.guide.abas.forEach(function (a) {
      $('guide-' + a.id).style.display = (a.id === target) ? 'block' : 'none';
    });
    Array.prototype.forEach.call(document.querySelectorAll('.guide-tab'), function (b) {
      b.classList.toggle('active', b.dataset.tab === target);
    });
    openModal('guideModal');
  }

  function openCuration() { openModal('curationModal'); }

  // ---------------- prova final ----------------
  function openQuiz() {
    quizIndex = 0; quizScore = 0; quizAnswered = false;
    showQuizQuestion();
    openModal('quizModal');
  }

  function showQuizQuestion() {
    if (quizIndex >= cfg.quiz.length) return finishQuiz();
    var q = cfg.quiz[quizIndex];
    $('quizQuestion').textContent = '(' + (quizIndex + 1) + '/' + cfg.quiz.length + ') ' + q.q;
    var opts = $('quizOptions');
    opts.innerHTML = '';
    quizAnswered = false;
    q.options.forEach(function (opt, i) {
      var btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.onclick = function () { answerQuiz(i); };
      opts.appendChild(btn);
    });
    $('quizFeedback').textContent = '';
    $('quizNextBtn').style.display = 'none';
  }

  function answerQuiz(i) {
    if (quizAnswered) return;
    quizAnswered = true;
    var q = cfg.quiz[quizIndex];
    Array.prototype.forEach.call(document.querySelectorAll('#quizOptions .quiz-option'), function (b, idx) {
      b.disabled = true;
      if (idx === q.correct) b.classList.add('correct');
      else if (idx === i) b.classList.add('wrong');
    });
    if (i === q.correct) { quizScore += 100; $('quizFeedback').textContent = '✅ ' + q.explain; }
    else $('quizFeedback').textContent = '❌ ' + q.explain;
    $('quizNextBtn').style.display = 'inline-block';
    $('quizNextBtn').textContent = quizIndex + 1 < cfg.quiz.length ? 'Próxima ▶' : 'Ver Resultado';
  }

  function quizNext() {
    if (!quizAnswered) return;
    quizIndex++;
    if (quizIndex >= cfg.quiz.length) return finishQuiz();
    showQuizQuestion();
  }

  function finishQuiz() {
    if (!state.quizDone) { state.score += quizScore; state.quizDone = true; }
    updateStats();
    $('quizQuestion').textContent = '🏁 Resultado da Prova Final';
    $('quizFeedback').textContent = '';
    var container = $('quizOptions');
    container.innerHTML = '';
    var box = document.createElement('div');
    box.className = 'score';
    box.textContent = 'Você acertou ' + (quizScore / 100) + ' de ' + cfg.quiz.length + ' perguntas';
    box.style.fontSize = '1.3em';
    container.appendChild(box);
    var approved = quizScore >= cfg.quiz.length * 50;
    state.quizApproved = approved;
    var p = document.createElement('p');
    if (approved) { p.style.color = '#27c93f'; p.style.fontWeight = 'bold'; p.textContent = '🎓 Aprovado! Procure seu certificado na tela final.'; }
    else { p.style.color = '#ff8c00'; p.textContent = '💪 Você pode refazer a prova quando quiser!'; }
    container.appendChild(p);
    $('quizNextBtn').style.display = 'none';
    var gameCert = $('btnGameCert');
    if (gameCert) gameCert.style.display = approved ? '' : 'none';
    var footer = $('quizFooter');
    footer.innerHTML = '';
    if (approved) {
      var b1 = document.createElement('button');
      b1.className = 'btn btn-success';
      b1.textContent = '🎓 Ver Certificado';
      b1.onclick = function () { closeModal('quizModal'); showCertificate(); };
      footer.appendChild(b1);
    }
    var b2 = document.createElement('button');
    b2.className = 'btn btn-ghost';
    b2.textContent = '🔁 Refazer Prova';
    b2.onclick = openQuiz;
    footer.appendChild(b2);
    var b3 = document.createElement('button');
    b3.className = 'btn btn-primary';
    b3.textContent = 'Fechar';
    b3.onclick = function () { closeModal('quizModal'); };
    footer.appendChild(b3);
    save();
  }

  // ---------------- fluxo do jogo ----------------
  function confirmAction() {
    $('confirmText').textContent = 'Todo o progresso e a pontuação serão reiniciados. Continuar?';
    $('confirmOkBtn').onclick = function () { closeModal('confirmModal'); resetGame(); };
    openModal('confirmModal');
  }

  function resetGame() {
    state.currentLevel = 0;
    state.score = 0;
    state.attempts = 0;
    state.quizDone = false;
    state.quizApproved = false;
    state.levelDone = {};
    state.scorePaid = new Set();
    Object.keys(state.flags).forEach(function (k) { state.flags[k] = false; });
    el.term.querySelectorAll('.output').forEach(function (o) { o.remove(); });
    addOutput('Jogo reiniciado. Boa sorte!', 'system');
    renderLevel();
    updateStats();
    updateRobot();
    save();
  }

  function openGameComplete() {
    $('finalScore').textContent = 'Pontuação Final: ' + state.score;
    $('btnProvaFinal').style.display = 'none';
    var gameCert = $('btnGameCert');
    if (gameCert) gameCert.style.display = (state.quizDone && state.quizApproved) ? '' : 'none';
    openModal('gameCompleteModal');
  }

  function showCertificate() {
    if (!requireStudentName()) { openModal('welcomeModal'); return; }
    if (!state.quizDone || !state.quizApproved) { openQuiz(); return; }
    $('certStudentName').textContent = state.studentName;
    $('certScore').textContent = state.score + ' pts';
    $('certDate').textContent = new Date().toLocaleDateString('pt-BR');
    closeModal('gameCompleteModal');
    closeModal('successModal');
    openModal('certificateModal');
  }

  function downloadCertificate() {
    var node = $('certificatePrint');
    if (window.htmlToImage) {
      window.htmlToImage.toPng(node, { pixelRatio: 2, backgroundColor: '#f3f7fa' })
        .then(function (dataUrl) {
          var a = document.createElement('a');
          a.download = 'certificado-sfcyber-' + cfg.id + '-' + state.studentName.toLowerCase().replace(/\s+/g, '-') + '.png';
          a.href = dataUrl;
          a.click();
        })
        .catch(function () { global.print(); });
    } else {
      global.print();
    }
  }

  function closeWelcome() {
    if (!requireStudentName()) return;
    closeModal('welcomeModal');
    el.input.focus();
    renderLevel();
    updateStats();
    robotIntro();
    save();
  }

  function resumeGame() {
    if (!requireStudentName()) return;
    closeModal('welcomeModal');
    el.input.focus();
    renderLevel();
    updateStats();
    robotIntro('De volta!');
  }

  // ---------------- persistencia ----------------
  function save() {
    try {
      localStorage.setItem(cfg.storageKey, JSON.stringify({
        currentLevel: state.currentLevel,
        score: state.score,
        attempts: state.attempts,
        studentName: state.studentName,
        flags: state.flags,
        levelDone: state.levelDone,
        quizDone: state.quizDone,
        quizApproved: state.quizApproved
      }));
    } catch (e) { /* storage bloqueado */ }
  }

  function load() {
    try {
      var raw = localStorage.getItem(cfg.storageKey);
      if (!raw) return false;
      var d = JSON.parse(raw);
      state.currentLevel = d.currentLevel || 0;
      state.score = d.score || 0;
      state.attempts = d.attempts || 0;
      state.studentName = d.studentName || '';
      state.quizDone = !!d.quizDone;
      state.quizApproved = !!d.quizApproved;
      state.flags = Object.assign(state.flags, d.flags || {});
      state.levelDone = d.levelDone || {};
      state.scorePaid = new Set(Object.keys(state.levelDone).map(Number));
      return true;
    } catch (e) { return false; }
  }

  // ---------------- API para os labs ----------------
  var api = {
    out: addOutput,
    warn: function (t) { addOutput(t, 'warning'); },
    ok: function (t) { addOutput(t, 'success'); },
    err: function (t) { addOutput(t, 'error'); },
    info: function (t) { addOutput(t, 'info'); },
    sys: function (t) { addOutput(t, 'system'); },
    flag: function (k) { return !!state.flags[k]; },
    setFlag: function (k, v) { state.flags[k] = (v === undefined ? true : v); },
    state: function () { return state; },
    closeModal: closeModal,
    openModal: openModal,
    refresh: function () { drawScene(); renderStatus(); updateStats(); scheduleUpdateRobot(); },
    level: function () { return state.currentLevel + 1; }
  };

  // ---------------- init ----------------
  function init(options) {
    cfg = options;
    cfg.storageKey = cfg.storageKey || ('sfcyber-' + cfg.id + '-v1');
    cfg.triggerList = cfg.triggerList || [];

    state = {
      currentLevel: 0,
      score: 0,
      attempts: 0,
      studentName: '',
      quizDone: false,
      quizApproved: false,
      scorePaid: new Set(),
      flags: {},
      levelDone: {},
      commandHistory: [],
      historyIndex: -1
    };
    (cfg.flagsIniciais || []).forEach(function (f) { state.flags[f] = false; });

    buildDom();

    // funcoes globais usadas pelos botoes inline
    global.showHint = showHint;
    global.openTheory = openTheory;
    global.openLevelMap = openLevelMap;
    global.openGuide = openGuide;
    global.openCuration = openCuration;
    global.resetLevel = resetLevel;
    global.nextLevel = nextLevel;
    global.confirmAction = confirmAction;
    global.openQuiz = openQuiz;
    global.openGameComplete = openGameComplete;
    global.answerQuiz = answerQuiz;
    global.quizNext = quizNext;
    global.answerQuiz = answerQuiz;
    global.resetGame = resetGame;
    global.showCertificate = showCertificate;
    global.downloadCertificate = downloadCertificate;
    global.closeModal = closeModal;
    global.openModal = openModal;
    global.closeWelcome = closeWelcome;
    global.resumeGame = resumeGame;
    global.submitCmd = submitCmd;
    global.saveState = save;
    global.clearNameError = clearNameError;
    global.validateStudentName = validateStudentName;
    global.requireStudentName = requireStudentName;
    global.closeRobot = closeRobot;
    global.openRobot = openRobot;
    global.robotContinue = robotContinue;
    // Globais de diagnostico: o config e as funcoes dos labs sao const/let de topo,
    // que nao viram propriedades de window. Expostos aqui para inspecao e testes.
    global.SFKit = { api: api, state: state, cfg: cfg };
    global.labCfg = cfg;
    global.labState = state;
    global.labLevels = cfg.levels;
    global.labInput = el.input;
    global.labQuiz = function () { return { index: quizIndex, score: quizScore }; };

    el.input.addEventListener('input', showAutocomplete);
    el.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); submitCmd(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); navHistory(-1); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); navHistory(1); }
      else if (e.key === 'Tab') { e.preventDefault(); complete(); }
      else if (e.key === 'Escape') { hideAutocomplete(); }
    });

    function resizeCanvas() {
      var cssH = 400;
      el.canvas.width = Math.max(el.canvas.clientWidth, 50) * 2;
      el.canvas.height = cssH * 2;
      drawScene();
    }
    global.addEventListener('resize', resizeCanvas);

    var had = load();
    if (el.nameInput) el.nameInput.value = state.studentName || '';
    if (had && state.studentName) $('resumeBtn').style.display = 'inline-block';
    resizeCanvas();
    if (!had || !state.studentName) {
      openModal('welcomeModal');
      if (el.nameInput) el.nameInput.focus();
    } else {
      closeModal('welcomeModal');
      robotIntro('De volta!');
    }
    renderLevel();
    updateStats();
    renderStatus();
    el.input.focus();
  }

  function track() {
    if (global.gtag) global.gtag('event', 'lab_open', { lab_id: cfg && cfg.id });
  }

  global.SFKit = { init: init, api: api, track: track, validateStudentName: validateStudentName, GA_ID: GA_ID };
}(window));