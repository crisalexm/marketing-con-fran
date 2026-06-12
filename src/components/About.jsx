import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const ref = useReveal();
  return (
    <div className={`reveal ${className}`} ref={ref}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-left">
            <div className="about-photo">
              <img src="/profile/profile-fran.jpeg" alt="Fran" />
            </div>
            <div className="about-badge">🔥 Especialista en Ventas por Redes Sociales</div>
          </Reveal>

          <Reveal className="about-right">
            <h2 className="section-title">¿Quién es Fran? 👋</h2>
            <p>
              Soy <strong>Fran</strong>, especialista en ventas por redes sociales. Ayudo a negocios físicos
              y online a vender todos los días usando TikTok e Instagram — sin depender de anuncios pagados
              ni de hacer transmisiones en vivo.
            </p>
            <p>
              Mi método se basa en crear <strong>contenido estratégico</strong> que atrae clientes de forma
              orgánica y constante. He ayudado a cientos de emprendedores a pasar de no vender nada en redes,
              a generar entre <strong>$10K y $20K USD al mes</strong>.
            </p>
            <p>
              Con <strong>+65K seguidores en TikTok</strong> y <strong>+22K en Instagram</strong>, he
              comprobado que cualquier negocio puede vender todos los días — sin pagar un solo dólar en
              publicidad.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
