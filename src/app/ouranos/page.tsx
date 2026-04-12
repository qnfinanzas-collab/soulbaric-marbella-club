'use client';

import { useEffect, useRef } from 'react';
import './ouranos.css';
import ConsultaButton from '@/components/ConsultaButton';
import ConsultaModal from '@/components/ConsultaModal';
import ConsultaSection from '@/components/ConsultaSection';

export default function OuranosPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = containerRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="ouranos-page">
      <section className="ouranos-hero">
        <div className="wrap">
          <span className="eyebrow ouranos-hero-eyebrow reveal">PROTOCOLO OURANOS</span>
          <h1 className="ouranos-hero-title reveal reveal-delay-1">
            Tres terapias.
            <br />
            Un protocolo.
            <br />
            Una nueva categoría
            <br />
            de bienestar.
          </h1>
          <p className="ouranos-hero-subtitle reveal reveal-delay-2">
            Hiperoxigenación, infrarrojo y crioterapia sincronizados
            <br />
            bajo un mismo ritual de regeneración.
          </p>
          <p className="ouranos-hero-signature reveal reveal-delay-3">
            SoulBaric · Ouranos
            <br />
            a SoulBaric protocol
          </p>
        </div>
      </section>

      <ConsultaSection />
      <ConsultaButton />
      <ConsultaModal />
    </div>
  );
}
