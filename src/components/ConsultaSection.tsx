'use client';

interface ConsultaSectionProps {
  onClick: () => void;
}

export function ConsultaSection({ onClick }: ConsultaSectionProps) {
  return (
    <section className="consulta-section">
      <div className="wrap">
        <span className="eyebrow reveal">Próximo paso</span>
        <h2 className="reveal reveal-delay-1">¿Tiene una pregunta antes de seguir?</h2>
        <p className="consulta-section-body reveal reveal-delay-2">
          Una conversación privada con el asistente del proyecto.
          <br />
          Sin formularios, sin compromiso, sin esperas.
        </p>
        <button
          onClick={onClick}
          className="consulta-section-button reveal reveal-delay-3"
          aria-label="Iniciar consulta privada"
        >
          Iniciar Consulta Privada →
        </button>
      </div>

      <style jsx>{`
        .consulta-section {
          background: var(--sand);
          text-align: center;
          padding: clamp(120px, 20vh, 180px) 0;
          border-top: 1px solid var(--line-soft);
        }

        .consulta-section .wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 var(--gutter);
        }

        .consulta-section h2 {
          margin-top: 24px;
          max-width: 18ch;
          margin-left: auto;
          margin-right: auto;
        }

        .consulta-section-body {
          margin-top: 36px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          font-family: var(--sans);
          font-size: clamp(14px, 1vw, 16px);
          color: var(--ink-soft);
          line-height: 1.7;
        }

        .consulta-section-button {
          display: inline-block;
          margin-top: 48px;
          padding: clamp(16px, 2vw, 24px) clamp(32px, 4vw, 48px);
          font-family: var(--sans);
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--infrared);
          border: 1px solid var(--infrared);
          background: transparent;
          transition: background 0.35s, color 0.35s;
          cursor: pointer;
        }

        .consulta-section-button:hover {
          background: var(--infrared);
          color: #fff;
        }

        @media (max-width: 768px) {
          .consulta-section-button {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
