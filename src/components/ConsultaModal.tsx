'use client';

import { useEffect, useRef, useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ConsultaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultaModal({ isOpen, onClose }: ConsultaModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Mostrar mensaje de bienvenida si es primera vez
      if (messages.length === 0) {
        setMessages([
          {
            id: 'welcome',
            role: 'assistant',
            content:
              'Bienvenido. Esta es una conversación privada sobre la propuesta SoulBaric para Marbella Club. Puede preguntarme lo que necesite entender antes de una reunión con el equipo. ¿Por dónde le gustaría empezar?',
          },
        ]);
      }
      inputRef.current?.focus();
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/consulta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage.content },
          ],
          sessionId,
        }),
      });

      if (!response.ok) throw new Error('API error');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader');

      const decoder = new TextDecoder();
      let assistantMessage = '';
      const assistantId = (Date.now() + 1).toString();

      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          content: '',
        },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        assistantMessage += chunk;

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: assistantMessage } : m
          )
        );
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: 'error-' + Date.now(),
          role: 'assistant',
          content:
            'La conversación se ha interrumpido. Si lo desea, puede continuar en unos instantes o iniciar contacto directo con el equipo.',
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="consulta-overlay" onClick={onClose} />

      {/* Modal */}
      <div className="consulta-modal" role="dialog" aria-modal="true">
        {/* Header */}
        <div className="consulta-header">
          <div>
            <div className="consulta-eyebrow">Consulta privada</div>
            <div className="consulta-subtitle">SoulBaric × Marbella Club</div>
          </div>
          <button className="consulta-close" onClick={onClose} aria-label="Cerrar">
            Cerrar
          </button>
        </div>

        {/* Messages Area */}
        <div className="consulta-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`consulta-message consulta-message--${message.role}`}
            >
              {message.content}
            </div>
          ))}
          {isLoading && (
            <div className="consulta-message consulta-message--assistant">
              <span className="consulta-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="consulta-input-area">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escriba su consulta..."
            disabled={isLoading}
            className="consulta-input"
            rows={3}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="consulta-send"
            aria-label="Enviar"
          >
            Enviar →
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="consulta-privacy">
          Esta conversación se registra para mejorar el servicio. No solicitamos datos personales.
        </div>
      </div>

      <style jsx>{`
        .consulta-overlay {
          position: fixed;
          inset: 0;
          background: rgba(250, 247, 241, 0.95);
          backdrop-filter: blur(8px);
          z-index: 40;
        }

        .consulta-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw;
          max-width: 720px;
          height: 80vh;
          background: var(--sand);
          display: flex;
          flex-direction: column;
          z-index: 50;
          border-radius: 2px;
          overflow: hidden;
        }

        .consulta-header {
          padding: 32px;
          border-bottom: 1px solid var(--line-soft);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .consulta-eyebrow {
          font-family: var(--sans);
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 8px;
        }

        .consulta-subtitle {
          font-family: var(--serif);
          font-style: italic;
          font-size: 13px;
          color: var(--ink-soft);
        }

        .consulta-close {
          font-family: var(--serif);
          font-size: 14px;
          color: var(--infrared);
          border-bottom: 1px solid var(--infrared);
          padding: 4px 0;
          transition: gap 0.35s;
          cursor: pointer;
        }

        .consulta-close:hover {
          gap: 8px;
        }

        .consulta-messages {
          flex: 1;
          overflow-y: auto;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .consulta-message {
          display: flex;
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink);
          max-width: 80%;
        }

        .consulta-message--user {
          align-self: flex-end;
          font-family: var(--sans);
          color: var(--ink-soft);
          font-size: 14px;
          max-width: 75%;
        }

        .consulta-message--assistant {
          align-self: flex-start;
        }

        .consulta-dots span {
          animation: blink 1.4s infinite;
          margin: 0 2px;
        }

        .consulta-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .consulta-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%,
          60%,
          100% {
            opacity: 0.5;
          }
          30% {
            opacity: 1;
          }
        }

        .consulta-input-area {
          border-top: 1px solid var(--infrared);
          padding: 28px 32px;
          display: flex;
          gap: 16px;
          align-items: flex-end;
        }

        .consulta-input {
          flex: 1;
          font-family: var(--sans);
          font-size: 14px;
          border: none;
          background: transparent;
          color: var(--ink);
          resize: none;
          outline: none;
          padding: 8px 0;
          max-height: 100px;
        }

        .consulta-input::placeholder {
          color: var(--ink-muted);
        }

        .consulta-send {
          font-family: var(--serif);
          font-size: 12px;
          color: var(--infrared);
          border: none;
          background: none;
          cursor: pointer;
          padding: 4px 0;
          white-space: nowrap;
          transition: gap 0.35s;
        }

        .consulta-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .consulta-send:hover:not(:disabled) {
          gap: 4px;
        }

        .consulta-privacy {
          font-family: var(--sans);
          font-size: 10px;
          color: var(--ink-muted);
          text-align: center;
          padding: 12px 32px;
          border-top: 1px solid var(--line-soft);
        }

        @media (max-width: 768px) {
          .consulta-modal {
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            transform: none;
            border-radius: 0;
            max-width: 100vw;
          }

          .consulta-message {
            max-width: 90%;
          }

          .consulta-message--user {
            max-width: 85%;
          }
        }
      `}</style>
    </>
  );
}
