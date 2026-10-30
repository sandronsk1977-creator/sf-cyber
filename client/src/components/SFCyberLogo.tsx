
import React from "react";

export function SFCyberLogo() {
  return (
    <div className="group flex flex-col items-center justify-center
      shrink-0 leading-none w-[112px] h-[64px]">

      {/* ESCUDO SF CYBER */}
      <div className="w-[34px] h-[38px] shrink-0
        drop-shadow-[0_0_7px_rgba(0,210,255,0.8)]
        group-hover:drop-shadow-[0_0_12px_rgba(0,210,255,1)]
        transition-all duration-300">

        <svg
          viewBox="0 0 100 110"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sfShieldGradient"
              x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>

            <linearGradient id="sfCyanGradient"
              x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00eaff" />
              <stop offset="100%" stopColor="#0077ff" />
            </linearGradient>
          </defs>

          {/* Estrutura do escudo */}
          <path
            d="M50 4 L94 19 L89 65 L75 85
            L50 103 L25 85 L11 65 L6 19 Z"
            fill="#020817"
            stroke="url(#sfCyanGradient)"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Símbolo geométrico SF */}
          <path
            d="M25 34 L50 23 L75 34 L75 44
            L50 34 L35 40 L35 48 L65 48
            L65 68 L50 80 L35 68 L35 59
            L50 69 L56 65 L56 58 L25 58 Z"
            fill="none"
            stroke="url(#sfShieldGradient)"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          {/* Detalhe ciano */}
          <path
            d="M50 23 L75 34 L75 44
            L56 39 L56 65 L50 80"
            fill="none"
            stroke="#00eaff"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* NOME DA MARCA */}
      <div className="flex flex-col items-center mt-[2px]">

        <div className="text-[14px] font-black
          tracking-[-0.06em] whitespace-nowrap
          drop-shadow-[0_0_6px_rgba(0,200,255,0.4)]">

          <span className="text-white">SF </span>

          <span className="text-cyan-400">
            CYBER
          </span>
        </div>

      </div>
    </div>
  );
}

export default SFCyberLogo;
