'use client';

import { useEffect, useState } from 'react';

interface ConsultaButtonProps {
  onClick: () => void;
}

export function ConsultaButton({ onClick }: ConsultaButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botón después del hero (más de 100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="consulta-button"
      aria-label="Abrir consulta privada"
    >
      Consulta privada
    </button>
  );
}
