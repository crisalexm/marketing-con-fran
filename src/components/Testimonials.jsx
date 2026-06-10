import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const ref = useReveal();
  return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

const testimonials = [
  {
    nombre: 'Elías Hernández',
    initials: 'EH',
    badge: '$61.000 en 5 meses 🚀',
    quote: 'Chicos quiero comentarles que a medida que pasa cada mes me sorprendo más de los resultados. Es increíble pasar de estar literalmente cerrando y no tener mercancía, a vender más de $10 mil al mes. Desde diciembre hasta Abril vendí más de $60 mil. Gracias a las asesorías de Fran, aún continúo con las asesorías.',
    resultado: '/testimonios/elias-hernandez-resultado.jpeg',
  },
  {
    nombre: 'Alexander Antunez',
    initials: 'AA',
    badge: '$10.000 en 2 semanas 🚀',
    quote: 'Gracias a la estrategia de Fran y al tomar la acción correspondiente logramos pasar la meta de facturación solo con TikTok de $10 mil dólares en 2 semanas. Me habían bajado la cuenta de Instagram y eso me provocó enfocarme más en TikTok — BOOOMM!!! 💥 $10k, vamos por más que es solo el comienzo.',
    resultado: '/testimonios/alexander-antunez-resultado.jpeg',
  },
  {
    nombre: 'Ivon Garzón',
    initials: 'IG',
    badge: '$20.000 vendidos 🚀',
    quote: 'He vendido $20k dólares desde que empecé con Fran. Ha sido una gran bendición y la mejor decisión. Cumplí mi meta de facturar solo por TikTok como otra tienda física, pero aquí no pago arriendo, ni empleados, ni los costos de un local. Vale muchísimo la pena, fue una decisión muy acertada. ✨',
    resultado: '/testimonios/ivon-garzon-resultado.jpeg',
  },
  {
    nombre: 'Ariadna Peña',
    initials: 'AP',
    badge: '$4.014 en Mayo 🚀',
    quote: 'Cerrando Mayo en $4.000 con TikTok 🏆',
    resultado: '/testimonios/ariadna-peña-resultado.jpeg',
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
            <Reveal key={t.nombre} className="testi-card">
              <div className="testi-head">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="testi-handle">{t.nombre}</div>
                  <div className="result-badge">{t.badge}</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <blockquote>"{t.quote}"</blockquote>
              <div className="testi-resultado">
                <img
                  src={t.resultado}
                  alt={`Resultado TikTok de ${t.nombre}`}
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
