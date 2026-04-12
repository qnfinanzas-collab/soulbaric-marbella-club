'use client';

// Landing page - SoulBaric x Marbella Club
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ConsultaButton } from '@/components/ConsultaButton';
import { ConsultaModal } from '@/components/ConsultaModal';
import { ConsultaSection } from '@/components/ConsultaSection';

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const [isConsultaOpen, setIsConsultaOpen] = useState(false);

  useEffect(() => {
    // Nav scroll effect
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 40) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reveal on scroll (IntersectionObserver)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => io.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* CONSULTA PRIVADA */}
      <ConsultaButton onClick={() => setIsConsultaOpen(true)} />
      <ConsultaModal
        isOpen={isConsultaOpen}
        onClose={() => setIsConsultaOpen(false)}
      />

      {/* NAV */}
      <nav className="nav" id="nav" ref={navRef}>
        <div className="nav-brand">
          Soul<span>Baric</span>
        </div>
        <div className="nav-meta">Marbella Club · Propuesta Confidencial</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow reveal in">Deep Regeneration Experience</span>
          <h1>
            <span className="line">
              <span className="word" style={{ animationDelay: '.1s' }}>
                Marbella&nbsp;Club
              </span>{' '}
              <span className="word" style={{ animationDelay: '.18s' }}>
                puede
              </span>{' '}
              <span className="word" style={{ animationDelay: '.26s' }}>
                definir
              </span>
            </span>
            <span className="line">
              <span className="word" style={{ animationDelay: '.34s' }}>
                el
              </span>{' '}
              <span className="word" style={{ animationDelay: '.42s' }}>
                futuro
              </span>{' '}
              <span className="word" style={{ animationDelay: '.50s' }}>
                del
              </span>{' '}
              <span className="word" style={{ animationDelay: '.58s' }}>
                <em>wellness</em>
              </span>
            </span>
            <span className="line">
              <span className="word" style={{ animationDelay: '.66s' }}>
                en
              </span>{' '}
              <span className="word" style={{ animationDelay: '.74s' }}>
                el
              </span>{' '}
              <span className="word" style={{ animationDelay: '.82s' }}>
                Mediterráneo.
              </span>
            </span>
          </h1>
          <p className="subhead">
            Una nueva generación de experiencias de regeneración profunda,
            <br />
            integradas en su ecosistema wellness.
          </p>

          <div className="hero-signature">
            <div className="brand-block">
              <span className="brand-tag">Signature</span>
              <span className="brand-name">
                Soul<em>Baric</em>
              </span>
              <span className="brand-tag" style={{ marginTop: '4px' }}>
                Advanced Oxygen &amp; Regeneration Experiences
              </span>
            </div>
            <a className="cta" href="#experiencia">
              <span>Descubrir la propuesta</span>
              <span className="arrow"></span>
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="line-v"></span>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="tension">
        <div className="wrap">
          <span className="eyebrow reveal">Deep Regeneration Experience</span>
          <h2 className="reveal reveal-delay-1">
            En los circuitos<br />
            <em>internacionales</em>
          </h2>
          <p className="body reveal reveal-delay-2">
            El viajero internacional de alto nivel ya incorpora experiencias avanzadas de recuperación
            y optimización en sus destinos habituales.
          </p>

          <div className="cities reveal reveal-delay-2">
            <span>Londres</span>
            <span>Zúrich</span>
            <span>Dubái</span>
            <span>Bangkok</span>
          </div>

          <p className="cs-line reveal reveal-delay-3">
            En el Mediterráneo, todavía no encuentran respuesta.
          </p>
          <p className="closing reveal">
            Marbella Club tiene <em>la posición</em> para liderarlo.
          </p>
        </div>
      </section>

      {/* ESTÁNDAR GLOBAL */}
      <section className="estandar-global" id="estandar-global">
        <div className="wrap">
          <div className="eg-header">
            <div className="eg-left">
              <span className="eyebrow eg-eyebrow reveal">El estándar global</span>
              <h2 className="reveal reveal-delay-1">
                Los resorts más exclusivos<br />
                del mundo ya están<br />
                <em>redefiniendo el wellness.</em>
              </h2>
              <div className="eg-divider reveal reveal-delay-2"></div>
            </div>
            <div className="eg-right">
              <p className="eg-intro reveal reveal-delay-2">
                El nuevo lujo ya no se limita al descanso. Integra recuperación avanzada, regeneración
                y longevidad como parte de una experiencia más sofisticada, más aspiracional y más
                valiosa para el huésped.
              </p>
              <p className="eg-intro-2 reveal reveal-delay-3">
                En esta evolución destacan dos referencias internacionales clave.
              </p>
            </div>
          </div>

          <div className="eg-cases">
            <article className="eg-case reveal" data-img="sixsenses">
              <div className="eg-case-image"></div>
              <div className="eg-case-overlay"></div>
              <div className="eg-case-content">
                <span className="eg-case-name">Six Senses Ibiza</span>
                <span className="eg-case-sub">RoseBar Longevity</span>
                <p className="eg-case-body">
                  Una de las expresiones más refinadas del lujo orientado a longevidad en el
                  Mediterráneo. RoseBar integra diagnóstico clínico, regeneración avanzada y bienestar
                  funcional dentro del propio ecosistema del resort, como una capa natural de su
                  identidad.
                </p>
                <span className="eg-case-cta">Ver referencia →</span>
              </div>
            </article>

            <article className="eg-case reveal reveal-delay-1" data-img="palazzo">
              <div className="eg-case-image"></div>
              <div className="eg-case-overlay"></div>
              <div className="eg-case-content">
                <span className="eg-case-name">Palazzo Fiuggi</span>
                <span className="eg-case-sub">Medical Wellness &amp; Longevity</span>
                <p className="eg-case-body">
                  Un palacio histórico italiano reposicionado como referencia europea en medical
                  wellness. Programas de longevidad supervisados por equipo médico, gastronomía de
                  tres estrellas Michelin y legado arquitectónico integrados en un mismo relato de
                  bienestar contemporáneo.
                </p>
                <span className="eg-case-cta">Ver referencia →</span>
              </div>
            </article>
          </div>

          <div className="eg-refs">
            <div className="eg-ref reveal" data-ref="1">
              <div className="eg-ref-image"></div>
              <span className="eg-ref-label">Montreux · Suiza</span>
              <span className="eg-ref-name">Clinique La Prairie</span>
            </div>
            <div className="eg-ref reveal reveal-delay-1" data-ref="2">
              <div className="eg-ref-image"></div>
              <span className="eg-ref-label">Sylt · Alemania</span>
              <span className="eg-ref-name">Lanserhof Sylt</span>
            </div>
            <div className="eg-ref reveal reveal-delay-2" data-ref="3">
              <div className="eg-ref-image"></div>
              <span className="eg-ref-label">Altea · España</span>
              <span className="eg-ref-name">SHA Wellness Clinic</span>
            </div>
            <div className="eg-ref reveal reveal-delay-3" data-ref="4">
              <div className="eg-ref-image"></div>
              <span className="eg-ref-label">Himalaya · India</span>
              <span className="eg-ref-name">Ananda in the Himalayas</span>
            </div>
            <div className="eg-ref reveal reveal-delay-4" data-ref="5">
              <div className="eg-ref-image"></div>
              <span className="eg-ref-label">Hua Hin · Tailandia</span>
              <span className="eg-ref-name">Chiva-Som</span>
            </div>
          </div>

          <div className="eg-closing-band reveal">
            <p className="eg-closing-text">
              Estas referencias reflejan la evolución del sector hacia un modelo donde hospitalidad,
              regeneración y bienestar avanzado convergen en una nueva categoría del lujo
              internacional.
            </p>
            <span className="eg-closing-link">Esto ya está pasando →</span>
          </div>
        </div>
      </section>

      {/* LA EXPERIENCIA */}
      <section className="experience" id="experiencia">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow reveal">La Experiencia</span>
            <h2 className="reveal reveal-delay-1">
              Deep <em>Regeneration</em> Experience
            </h2>
            <p className="subline reveal reveal-delay-2">
              Una experiencia íntima, silenciosa y profundamente restauradora.
            </p>
          </div>

          <div className="exp-cards">
            <article className="exp-card reveal">
              <span className="index">01</span>
              <h3>
                Oxygen<br />
                <em>Activation</em>
              </h3>
              <div className="glyph"></div>
              <p>Sensación de claridad, recuperación profunda y activación natural del cuerpo.</p>
            </article>
            <article className="exp-card reveal reveal-delay-1">
              <span className="index">02</span>
              <h3>
                Infrared<br />
                <em>Depth</em>
              </h3>
              <div className="glyph"></div>
              <p>Calor envolvente, relajación muscular y bienestar interno.</p>
            </article>
            <article className="exp-card reveal reveal-delay-2">
              <span className="index">03</span>
              <h3>
                Sensory<br />
                <em>Silence</em>
              </h3>
              <div className="glyph"></div>
              <p>Privacidad, calma absoluta y desconexión total.</p>
            </article>
          </div>

          <p className="exp-closing reveal">
            <em>60 minutos</em> que redefinen la percepción de bienestar.
          </p>
        </div>
      </section>

      {/* LA CABINA */}
      <section className="la-cabina">
        <div className="wrap">
          <div className="la-cabina-grid">
            <div className="la-cabina-left">
              <span className="eyebrow la-cabina-eyebrow reveal">La Cabina</span>
              <h2 className="reveal reveal-delay-1">
                No es una cámara hiperbárica.
                <br />
                Es un espacio de bienestar
                <br />
                diseñado desde cero.
              </h2>
              <div className="la-cabina-divider reveal reveal-delay-2"></div>

              <p className="la-cabina-body reveal reveal-delay-2">
                Las cámaras hiperbáricas tradicionales son aparatos clínicos concebidos para
                protocolos médicos supervisados. SoulBaric parte de la misma base fisiológica
                y la lleva a un territorio distinto: una nueva generación de cabinas de
                hiperoxigenación diseñadas como espacios sensoriales de bienestar.
              </p>

              <p className="la-cabina-body reveal reveal-delay-2">
                Materiales cálidos, silencio acústico, luz controlada. Sin estética clínica.
                Sin supervisión médica. Sin prescripción. Forma parte del ritual de la
                estancia, no de un tratamiento.
              </p>

              <div className="la-cabina-benefits reveal reveal-delay-3">
                <span className="la-cabina-subtitle">Lo que activa en el cuerpo</span>
                <p className="la-cabina-body-small">
                  La exposición controlada a mayor concentración de oxígeno favorece
                  procesos naturales del organismo ampliamente documentados por la
                  literatura científica:
                </p>

                <div className="la-cabina-list">
                  <div className="la-cabina-item">Oxigenación celular y tisular profunda</div>
                  <div className="la-cabina-item">Recuperación muscular tras esfuerzo físico</div>
                  <div className="la-cabina-item">Regulación de los ciclos de sueño</div>
                  <div className="la-cabina-item">Claridad mental y reducción de fatiga</div>
                  <div className="la-cabina-item">Equilibrio de los procesos inflamatorios naturales</div>
                </div>
              </div>

              <p className="la-cabina-closing reveal reveal-delay-4">
                Misma ciencia. Otra experiencia.
              </p>
            </div>

            <div className="la-cabina-right">
              <div className="la-cabina-image reveal reveal-delay-2">
                <Image
                  src="/images/cabina.jpg"
                  alt="Cabina SoulBaric - Deep Regeneration Experience"
                  width={600}
                  height={750}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '2px',
                    objectFit: 'cover'
                  }}
                  priority={false}
                />
              </div>
              <p className="la-cabina-caption">Cabina SoulBaric. Diseño propietario.</p>
            </div>
          </div>
        </div>
      </section>


      {/* INTEGRACIÓN */}
      <section className="integracion">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow reveal">Integración</span>
            <h2 className="reveal reveal-delay-1">
              Diseñado para <em>su huésped</em>
            </h2>
          </div>

          <div className="int-grid">
            <div className="int-cell reveal">
              <span className="code">01 · Travel</span>
              <h3>
                Jet Lag <em>Reset</em>
              </h3>
              <p className="desc">Recuperación inmediata tras vuelos largos. Claridad y descanso.</p>
            </div>
            <div className="int-cell reveal reveal-delay-1">
              <span className="code">02 · Sport</span>
              <h3>
                Post-Golf <em>Recovery</em>
              </h3>
              <p className="desc">Regeneración muscular y renovación física tras la jornada.</p>
            </div>
            <div className="int-cell reveal reveal-delay-2">
              <span className="code">03 · Rest</span>
              <h3>
                Sleep <em>Experience</em>
              </h3>
              <p className="desc">Descanso profundo y regulación natural del sueño.</p>
            </div>
            <div className="int-cell reveal reveal-delay-3">
              <span className="code">04 · Performance</span>
              <h3>
                Executive <em>Reset</em>
              </h3>
              <p className="desc">Alta energía, claridad mental y rendimiento sostenido.</p>
            </div>
          </div>

          <p className="micro reveal">
            Se integra de forma natural en la estancia, sin fricción,
            <br />
            como parte del estilo de vida Marbella Club.
          </p>
        </div>
      </section>

      {/* POSICIONAMIENTO */}
      <section className="posicionamiento">
        <div className="wrap">
          <p className="one-liner reveal">
            Es <em>lujo silencioso</em> aplicado al bienestar.
          </p>
        </div>
      </section>

      {/* OPORTUNIDAD */}
      <section className="oportunidad">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow reveal">Oportunidad</span>
              <h2 className="reveal reveal-delay-1" style={{ marginTop: '24px' }}>
                No es añadir un servicio.<br />
                <em>Es elevar el estándar.</em>
              </h2>
            </div>
            <ul className="bullets reveal reveal-delay-2">
              <li>
                <span className="num">01</span>Una categoría que hoy no existe en el spa
              </li>
              <li>
                <span className="num">02</span>Un motivo de elección que los demás resorts no pueden
                ofrecer
              </li>
              <li>
                <span className="num">03</span>Estancias que se extienden por decisión del huésped
              </li>
              <li>
                <span className="num">04</span>Un huésped que deja de comparar Marbella Club con la
                costa
              </li>
              <li>
                <span className="num">05</span>Una conversación distinta sobre qué es wellness en el
                Mediterráneo
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MODELO SOULBARIC */}
      <section className="modelo">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow reveal">Modelo SoulBaric</span>
            <h2 className="reveal reveal-delay-1">
              Un <em>socio estratégico</em>, no un proveedor
            </h2>
          </div>

          <div className="modelo-grid">
            <div className="modelo-cell reveal">
              <div className="dot"></div>
              <p>Integración completa en el ecosistema wellness del resort</p>
            </div>
            <div className="modelo-cell reveal reveal-delay-1">
              <div className="dot"></div>
              <p>Diseño de experiencias y protocolos a medida del huésped</p>
            </div>
            <div className="modelo-cell reveal reveal-delay-2">
              <div className="dot"></div>
              <p>Formación silenciosa del equipo interno</p>
            </div>
            <div className="modelo-cell reveal">
              <div className="dot"></div>
              <p>Acompañamiento operativo continuo</p>
            </div>
            <div className="modelo-cell reveal reveal-delay-1">
              <div className="dot"></div>
              <p>Activación de la propuesta dentro del relato de Marbella Club</p>
            </div>
            <div className="modelo-cell reveal reveal-delay-2">
              <div className="dot"></div>
              <p>Presencia discreta en el posicionamiento internacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="cierre">
        <div className="wrap">
          <span className="eyebrow reveal">Siguiente capítulo</span>
          <h2 className="reveal reveal-delay-1">
            Los destinos que<br />
            lideran <em>hoy</em>,<br />
            definen el estándar <em>mañana</em>
          </h2>
          <p className="body reveal reveal-delay-2">
            Marbella Club ya tiene el entorno, el cliente y la credibilidad. Esta es la siguiente
            evolución natural.
          </p>

          <p className="final reveal reveal-delay-3">
            El futuro del wellness en el Mediterráneo se escribe ahora.
          </p>

          <div className="signature-block reveal reveal-delay-4">
            <div className="sb">
              Soul<em>Baric</em>
            </div>
            <div className="tag">Advanced Oxygen & Regeneration Experiences</div>
          </div>
        </div>
      </section>

      {/* CONSULTA SECTION */}
      <ConsultaSection onClick={() => setIsConsultaOpen(true)} />

      {/* FOOTER */}
      <footer>
        <div className="fbrand">
          Soul<em>Baric</em>
        </div>
        <div className="fmeta">© 2024 SoulBaric · Propuesta Confidencial · Marbella Club</div>
      </footer>
    </>
  );
}
