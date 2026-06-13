import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const ref = useReveal();
  return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const items = [
  'Estructurar guiones virales que generan ventas',
  'Entender el algoritmo de TikTok e Instagram',
  'Crear contenido que atrae clientes de forma orgánica',
  'Vender por redes sociales sin pagar anuncios',
  'Construir embudos de ventas efectivos con videos',
  'Aplicar el idioma de las redes sociales en tu nicho',
  'Conceptos de marketing y neuromarketing aplicados',
  <>Cerrar clientes directo por WhatsApp sin hacer <em>en vivos</em></>,
];

export default function Learn() {
  return (
    <section className="learn">
      <div className="container">
        <Reveal><h2 className="section-title">Lo que vas a lograr con este sistema 💡</h2></Reveal>
        <Reveal><p className="section-subtitle">Habilidades reales que vas a desarrollar dentro del método</p></Reveal>
        <div className="learn-grid">
          {items.map((item, i) => (
            <Reveal key={i} className="learn-item">
              <span className="check-circle"><CheckIcon /></span>
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="learn-highlight">
          <p>
            🔥 En <strong>30 días</strong> haz tu negocio visible y viral.<br />
            En <strong>90 días</strong> construye un sistema que atrae clientes todos los días.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
