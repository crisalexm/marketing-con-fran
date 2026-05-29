import PhoenixIcon from './PhoenixIcon';
import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const ref = useReveal();
  return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="container">
        <PhoenixIcon className="cta-phoenix" style={{ color: '#fff' }} aria-hidden="true" />
        <Reveal><p className="cta-eyebrow">Renacer desde el interior</p></Reveal>
        <Reveal><h2>¿Listo para renacer y vender todos los días? 🔥</h2></Reveal>
        <Reveal>
          <p className="cta-sub">
            Hoy puedes dejar atrás la frustración de no vender en redes. Agenda una llamada gratuita y te
            cuento exactamente cómo renacer tu negocio con este método — adaptado a tu situación específica.
          </p>
        </Reveal>
        <Reveal>
          <a
            className="btn btn-white btn-lg"
            href="https://wa.me/56974397629"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Hablar con Fran por WhatsApp →
          </a>
        </Reveal>
        <p className="cta-reassure">Sin compromisos. Solo una conversación para ver si puedo ayudarte.</p>
        <p className="cta-phone-fallback">
          Si el botón de WhatsApp no funciona, puedes escribir directamente al número:{' '}
          <strong>+56 9 7439 7629</strong>
        </p>
        <div className="cta-social">
          <span>📱 <b>@fran_marketingdigital</b> en TikTok</span>
          <span>📸 <b>@marketing_con_fran</b> en Instagram</span>
        </div>
      </div>
    </section>
  );
}
