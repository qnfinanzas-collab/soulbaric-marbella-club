'use client';

export default function OuranosPage() {
  return (
    <div className="ouranos-page" style={{ padding: '40px', textAlign: 'center', background: '#f5f1ec' }}>
      {/* HERO */}
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

      {/* LA TESIS */}
      <section className="ouranos-tesis">
        <div className="wrap">
          <span className="eyebrow ouranos-tesis-eyebrow reveal">LA TESIS</span>
          <h2 className="ouranos-tesis-title reveal reveal-delay-1">
            No son tres servicios.
            <br />
            Es una secuencia fisiológica.
          </h2>
          <p className="ouranos-tesis-body reveal reveal-delay-2">
            Los resorts más avanzados del mundo ofrecen hoy hiperoxigenación,
            infrarrojo y crioterapia como tratamientos separados. Ouranos introduce
            algo distinto: una secuencia diseñada para que cada elemento amplifique
            al siguiente. El resultado no es la suma de tres terapias. Es una
            cascada fisiológica que ninguna de ellas puede activar por separado.
          </p>
          <div className="ouranos-tesis-closing reveal reveal-delay-3">
            <div className="ouranos-closing-divider"></div>
            <p className="ouranos-closing-text">
              La secuencia correcta convierte tres buenos tratamientos
              <br />
              en un protocolo extraordinario.
            </p>
            <div className="ouranos-closing-divider"></div>
          </div>
        </div>
      </section>

      {/* LOS TRES PILARES - CABECERA */}
      <section className="ouranos-pilares-header">
        <div className="wrap">
          <span className="eyebrow ouranos-pilares-eyebrow reveal">EL PROTOCOLO</span>
          <h2 className="ouranos-pilares-title reveal reveal-delay-1">
            Dos momentos.
            <br />
            Tres terapias.
          </h2>
          <p className="ouranos-pilares-intro reveal reveal-delay-2">
            Una sesión de 60 minutos dentro de la cabina Ouranos, donde infrarrojo
            e hiperoxigenación actúan simultáneamente. Seguida de 15 minutos de
            inmersión en frío que sella la transformación.
          </p>
        </div>
      </section>

      {/* PILAR 1: HIPEROXIGENACIÓN */}
      <section className="ouranos-pilar ouranos-pilar-1">
        <div className="wrap">
          <div className="ouranos-pilar-grid">
            <div className="ouranos-pilar-left">
              <div className="ouranos-pilar-number reveal">01</div>
              <span className="eyebrow ouranos-pilar-eyebrow reveal reveal-delay-1">HIPEROXIGENACIÓN</span>
              <h3 className="ouranos-pilar-h3 reveal reveal-delay-1">
                El oxígeno como vehículo de regeneración.
              </h3>
              <p className="ouranos-pilar-body reveal reveal-delay-2">
                A presión atmosférica normal, el oxígeno viaja unido a los glóbulos rojos
                y no alcanza tejidos con flujo sanguíneo comprometido. A 1.5–1.9 ATA,
                el oxígeno se disuelve directamente en el plasma, en el líquido
                intersticial y en el líquido cerebroespinal. Llega a zonas que la sangre
                convencional no puede irrigar.
              </p>
              <p className="ouranos-pilar-body reveal reveal-delay-2">
                La literatura científica documenta oxigenación celular hasta diez veces
                superior a la habitual, formación de nuevos capilares en tejido dañado,
                y descenso medible de marcadores inflamatorios sistémicos tras protocolos
                sostenidos.
              </p>
              <p className="ouranos-pilar-citation reveal reveal-delay-3">
                Estudios publicados en Aging (2020) documentan alargamiento de telómeros
                y reducción de células senescentes tras protocolos hiperbáricos.
              </p>
            </div>
            <div className="ouranos-pilar-right">
              <div className="ouranos-pilar-image reveal reveal-delay-2">
                <div className="ouranos-placeholder">
                  [Imagen: Cabina Ouranos - Hiperoxigenación]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILAR 2: INFRARROJO */}
      <section className="ouranos-pilar ouranos-pilar-2">
        <div className="wrap">
          <div className="ouranos-pilar-grid ouranos-pilar-grid-reversed">
            <div className="ouranos-pilar-left">
              <div className="ouranos-pilar-image reveal reveal-delay-2">
                <div className="ouranos-placeholder">
                  [Imagen: Panel Infrarrojo - Detalle]
                </div>
              </div>
            </div>
            <div className="ouranos-pilar-right">
              <div className="ouranos-pilar-number reveal">02</div>
              <span className="eyebrow ouranos-pilar-eyebrow reveal reveal-delay-1">INFRARROJO LEJANO</span>
              <h3 className="ouranos-pilar-h3 reveal reveal-delay-1">
                Calor que no calienta el aire.
                <br />
                Calienta el tejido.
              </h3>
              <p className="ouranos-pilar-body reveal reveal-delay-2">
                Los infrarrojos lejanos (8–14 μm) penetran 4 a 5 centímetros bajo la dermis.
                No calientan el aire que rodea al cuerpo — elevan la temperatura del tejido
                desde dentro, activando una vasodilatación capilar intensa y sostenida.
              </p>
              <p className="ouranos-pilar-body reveal reveal-delay-2">
                En Ouranos, el infrarrojo opera dentro de la misma cabina y al mismo tiempo
                que la hiperoxigenación. Los capilares están abiertos al máximo precisamente
                cuando el oxígeno busca entrar en los tejidos. Esta simultaneidad es lo
                que diferencia el protocolo de cualquier aplicación por separado.
              </p>
              <p className="ouranos-pilar-citation reveal reveal-delay-3">
                Journal of Thermal Biology (Kihara et al., 2022) documenta incremento
                significativo de absorción tisular de oxígeno con vasodilatación infrarroja
                simultánea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILAR 3: CRIOTERAPIA */}
      <section className="ouranos-pilar ouranos-pilar-3">
        <div className="wrap">
          <div className="ouranos-pilar-grid">
            <div className="ouranos-pilar-left">
              <div className="ouranos-pilar-number reveal">03</div>
              <span className="eyebrow ouranos-pilar-eyebrow reveal reveal-delay-1">CRIOTERAPIA DE INMERSIÓN</span>
              <h3 className="ouranos-pilar-h3 reveal reveal-delay-1">
                El frío que sella la transformación.
              </h3>
              <p className="ouranos-pilar-body reveal reveal-delay-2">
                Tras la fase de calor y oxígeno, la inmersión en agua a 10°C durante
                15 minutos cumple una función precisa. La vasoconstricción retiene
                en los tejidos el oxígeno absorbido. El contraste térmico activa la
                biogénesis mitocondrial y dispara un pico de noradrenalina que sostiene
                el estado de claridad cognitiva durante las seis u ocho horas siguientes.
              </p>
              <p className="ouranos-pilar-body reveal reveal-delay-2">
                Sin esta fase final, el ciclo regenerativo queda incompleto. No es
                un contrario de la cabina — es su complemento necesario.
              </p>
              <p className="ouranos-pilar-citation reveal reveal-delay-3">
                Cell Metabolism (Mouchiroud et al., 2023) documenta activación del gen
                PGC-1α y biogénesis mitocondrial sostenida tras exposición al frío.
              </p>
            </div>
            <div className="ouranos-pilar-right">
              <div className="ouranos-pilar-image reveal reveal-delay-2">
                <div className="ouranos-placeholder">
                  [Imagen: Bañera Crioterapia IceFlow]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA SINERGIA */}
      <section className="ouranos-sinergia">
        <div className="wrap">
          <span className="eyebrow ouranos-sinergia-eyebrow reveal">LA SINERGIA</span>
          <h2 className="ouranos-sinergia-title reveal reveal-delay-1">
            Juntas no se suman.
            <br />
            Se multiplican.
          </h2>
          <p className="ouranos-sinergia-body reveal reveal-delay-2">
            Infrarrojo e hiperoxigenación trabajando al mismo tiempo, en la misma
            cabina — los capilares abiertos por el calor reciben el oxígeno en
            condiciones de absorción máxima. A continuación, el frío retiene
            fisiológicamente lo que acaba de absorberse.
          </p>
          <p className="ouranos-sinergia-body reveal reveal-delay-2">
            El organismo permanece en estado de regeneración activa durante las
            48 a 72 horas siguientes. Con práctica regular, esa capacidad pasa a
            formar parte estable de la biología del huésped.
          </p>
          <div className="ouranos-sinergia-closing reveal reveal-delay-3">
            <div className="ouranos-closing-divider"></div>
            <p className="ouranos-closing-text">
              El orden no es estético. Es fisiológico.
            </p>
            <div className="ouranos-closing-divider"></div>
          </div>
        </div>
      </section>

      {/* RE-HEALTH ALIANZA CLÍNICA */}
      <section className="ouranos-rehealth">
        <div className="wrap">
          <span className="eyebrow ouranos-rehealth-eyebrow reveal">ALIANZA CLÍNICA</span>
          <h2 className="ouranos-rehealth-title reveal reveal-delay-1">
            Ouranos se complementa
            <br />
            con el respaldo clínico
            <br />
            de Re | Health Marbella.
          </h2>
          <p className="ouranos-rehealth-body reveal reveal-delay-2">
            La experiencia Ouranos vive dentro del ecosistema wellness del resort.
            El huésped que desee dar un paso más hacia la medicina regenerativa
            accede, a través de SoulBaric, a la consulta del Dr. Guillermo Recatero
            en Re | Health Marbella — clínica pionera en medicina regenerativa
            e integrativa situada en la misma ciudad.
          </p>

          <div className="ouranos-rehealth-grid reveal reveal-delay-3">
            <div className="ouranos-rehealth-left">
              <h3 className="ouranos-rehealth-doctor-name">Dr. Guillermo Recatero Rude</h3>
              <p className="ouranos-rehealth-doctor-specialty">MEDICINA REGENERATIVA E INTEGRATIVA</p>
              <p className="ouranos-rehealth-doctor-bio">
                Especialista en medicina del aparato musculoesquelético con enfoque
                holístico e integrativo. Ha sido médico del Real Madrid Club de Fútbol,
                del Sevilla Fútbol Club y de la clínica privada del médico del FC Barcelona.
                Presta actualmente sus servicios en Marbella.
              </p>
              <p className="ouranos-rehealth-doctor-award">
                Galardonado con los Doctoralia Awards 2020.
              </p>
            </div>
            <div className="ouranos-rehealth-right">
              <div className="ouranos-rehealth-clinics">
                <div className="ouranos-rehealth-clinic">
                  <h4>Regenerate</h4>
                  <p>Medicina regenerativa enfocada en la autosanación natural de los tejidos.</p>
                </div>
                <div className="ouranos-rehealth-clinic">
                  <h4>Recover</h4>
                  <p>Protocolos de recuperación avanzada para lesión, esfuerzo o desgaste crónico.</p>
                </div>
                <div className="ouranos-rehealth-clinic">
                  <h4>Reconnect</h4>
                  <p>Enfoque integrativo cuerpo-mente orientado a longevidad sostenida.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ouranos-rehealth-closing reveal reveal-delay-4">
            <div className="ouranos-closing-divider"></div>
            <p className="ouranos-closing-text">
              Dos tríadas complementarias.
              <br />
              Una wellness. Una clínica.
              <br />
              El mismo paradigma regenerativo.
            </p>
            <div className="ouranos-closing-divider"></div>
          </div>
        </div>
      </section>

      {/* PARA MARBELLA CLUB */}
      <section className="ouranos-marbella">
        <div className="wrap">
          <span className="eyebrow ouranos-marbella-eyebrow reveal">IMPLEMENTACIÓN</span>
          <h2 className="ouranos-marbella-title reveal reveal-delay-1">
            Lo que Ouranos
            <br />
            aporta al resort.
          </h2>
          <div className="ouranos-marbella-grid reveal reveal-delay-2">
            <div className="ouranos-marbella-item">
              <span className="ouranos-marbella-number">01</span>
              <h4>Una categoría que hoy no existe en la Costa del Sol</h4>
              <p>
                El protocolo completo (infrarrojo + hiperbárica + frío)
                no está implementado en ningún resort del Mediterráneo español.
              </p>
            </div>
            <div className="ouranos-marbella-item">
              <span className="ouranos-marbella-number">02</span>
              <h4>Integración arquitectónica en el ecosistema wellness existente</h4>
              <p>
                La cabina Ouranos y la zona de crioterapia se integran
                en el spa actual sin reformas estructurales.
              </p>
            </div>
            <div className="ouranos-marbella-item">
              <span className="ouranos-marbella-number">03</span>
              <h4>Respaldo clínico disponible</h4>
              <p>
                Alianza operativa con Re | Health Marbella para el huésped
                que desee profundizar en medicina regenerativa.
              </p>
            </div>
            <div className="ouranos-marbella-item">
              <span className="ouranos-marbella-number">04</span>
              <h4>Exclusividad territorial garantizada</h4>
              <p>
                Marbella Club sería el único resort del Mediterráneo
                con el protocolo Ouranos en los próximos años.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="ouranos-cierre">
        <div className="wrap">
          <span className="eyebrow ouranos-cierre-eyebrow reveal">SIGUIENTE PASO</span>
          <h2 className="ouranos-cierre-title reveal reveal-delay-1">
            Marbella Club ya tiene
            <br />
            el entorno, el huésped
            <br />
            y la credibilidad.
            <br />
            <br />
            Ouranos añade
            <br />
            el protocolo.
          </h2>
          <p className="ouranos-cierre-signature reveal reveal-delay-2">
            SoulBaric · Ouranos
            <br />
            En alianza con Re | Health Marbella
          </p>
        </div>
      </section>

      <h1>✓ PROTOCOLO OURANOS</h1>
      <p>Página en construcción - Test de compilación</p>
    </div>
  );
}
