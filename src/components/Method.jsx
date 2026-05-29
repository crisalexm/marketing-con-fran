import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const ref = useReveal();
  return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

const steps = [
  {
    num: '01',
    icon: '🎯',
    title: 'Diagnóstico Gratuito',
    desc: 'Analizamos tu negocio, tu situación actual y definimos la estrategia de contenido ideal para tu nicho específico.',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Sistema de Contenido',
    desc: 'Te diseño un plan de videos estratégicos que atraen clientes orgánicamente — sin anuncios, sin en vivos, solo con tu celular.',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Resultados en 90 Días',
    desc: 'Implementas el sistema, yo corrijo tus videos, y en 90 días tienes un negocio que vende todos los días de forma predecible.',
  },
];

export default function Method() {
  return (
    <section className="method">
      <div className="container">
        <Reveal><h2 className="section-title">¿Cómo funciona el método? ✅</h2></Reveal>
        <Reveal><p className="section-subtitle">Un sistema simple en 3 pasos para vender todos los días</p></Reveal>
        <div className="method-grid">
          {steps.map((s) => (
            <Reveal key={s.num} className="step-card">
              <div className="step-num">{s.num}</div>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
