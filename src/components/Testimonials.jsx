import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const ref = useReveal();
  return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const testimonials = [
  {
    initials: 'CM',
    handle: '@cliente_mayorista',
    badge: '$30,000 en ventas 🚀',
    quote: 'Llevaba más de un año intentando vender por redes sin éxito. Con el método de Fran, en 3 meses generé más de $30K en pedidos al por mayor — todo orgánico, sin gastar un peso en publicidad.',
  },
  {
    initials: 'NO',
    handle: '@negocio_online',
    badge: '$11,000 en ventas 🚀',
    quote: 'Pasé de no vender nada en TikTok a cerrar $11K en un mes. Lo más valioso fue aprender a estructurar guiones que realmente venden. Fran corrige cada video, no te suelta hasta que funciona.',
  },
  {
    initials: 'EM',
    handle: '@emprendedora_moda',
    badge: '$6,000 en ventas 🚀',
    quote: 'Nunca pensé que con mi celular podía construir un negocio que vende todos los días. En 60 días llegué a $6K en ventas — sin anuncios, sin en vivos, solo aplicando el método al pie de la letra.',
  },
  {
    initials: 'FL',
    handle: '@fabricante_local',
    badge: '$20,000 en ventas 🚀',
    quote: 'Mi fábrica tenía clientes locales nomás. Con la estrategia de contenido de Fran, ahora vendo a todo el país. $20K en ventas el primer trimestre. Mejor inversión que he hecho en mi negocio.',
  },
];

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="container">
        <Reveal><h2 className="section-title">Resultados Reales de Mis Clientes 🏆</h2></Reveal>
        <Reveal><p className="section-subtitle">Emprendedores que aplicaron el método y transformaron sus negocios</p></Reveal>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <Reveal key={t.handle} className="testi-card">
              <div className="testi-head">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="testi-handle">{t.handle}</div>
                  <div className="result-badge">{t.badge}</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <blockquote>"{t.quote}"</blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal><h3 className="gallery-title">📸 Capturas de Resultados Reales</h3></Reveal>
        <Reveal><p className="gallery-sub">(Reemplaza estas imágenes con screenshots reales de tus clientes)</p></Reveal>
        <div className="gallery-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} className="phone-thumb">
              <CameraIcon />
              <span>Imagen de resultado</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
