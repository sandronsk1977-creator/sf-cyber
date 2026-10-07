export declare const ALGORITMO: "Ed25519";
export declare const CHAVE_ID: "sfc-ed25519-2026";
export declare const VERSAO_REGISTRO: 1;
export declare const CAMPOS_TEXTO_ENTRADA: string[];
export declare const PADRAO_CODIGO: RegExp;

export interface Responsavel {
  readonly nome: string;
  readonly formacao: string;
  readonly especialidade: string;
  readonly papel: string;
}

export declare const RESPONSAVEL: Responsavel;

export interface EntradaCertificado {
  codigo: string;
  nome: string;
  curso: string;
  cargaHoraria: number;
  dataConclusao: string;
  aproveitamento: number;
  responsavelNome: string;
  responsavelFormacao: string;
  responsavelEspecialidade: string;
  responsavelPapel: string;
  emitidoEm: string;
  assinatura: string;
}

export interface RegistroCertificados {
  versao: number;
  chaveId: string;
  emissor: string;
  atualizadoEm: string;
  entradas: EntradaCertificado[];
  assinatura: string;
}

export interface ChavePublica {
  chaveId: string;
  algoritmo: "Ed25519";
  publicaB64: string;
  criadoEm: string;
}

export declare function formatarAproveitamento(valor: number): string;
export declare function validarCampos(entrada: EntradaCertificado): void;
export declare function canonicalizarEntrada(entrada: EntradaCertificado): string;
export declare function canonicalizarRegistro(registro: RegistroCertificados): string;
export declare function ordenarEntradas(entradas: EntradaCertificado[]): EntradaCertificado[];
export declare function dataConclusion(date: Date | string | number): string;
export declare function agora(date?: Date | string | number): string;