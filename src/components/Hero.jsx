import PhoenixIcon from './PhoenixIcon';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero" id="top">
      <div className="hero-bg-glow" />
      <div className="container">
        <div className="hero-inner reveal" ref={ref}>
          <PhoenixIcon
            className="hero-phoenix"
            style={{ color: 'var(--primary)' }}
            aria-hidden="true"
          />
          <p className="hero-eyebrow">Renacer desde el interior</p>
          <h1>
            Renace tu negocio y vende todos los días en{' '}
            <span className="accent">TikTok</span> e{' '}
            <span className="accent">Instagram</span> 🔥
          </h1>
          <p className="hero-sub">Sin pagar publicidad. Sin hacer en vivos. Solo con tu contenido.</p>
          <p className="hero-para">
            Ayudo a emprendedores y dueños de negocios físicos y online a{' '}
            <strong style={{ color: 'var(--text)' }}>renacer desde adentro</strong> — y a generar entre{' '}
            <strong style={{ color: 'var(--text)' }}>$10,000 y $20,000 USD al mes</strong> vendiendo todos
            los días con videos estratégicos en TikTok e Instagram.
          </p>
          <div className="hero-cta-wrap">
            <a
              className="btn btn-primary btn-lg"
              href="https://wa.me/56974397629"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Agenda tu llamada gratis por WhatsApp
            </a>
            <p className="fallback">
              Si el link no funciona, escribe al: <strong>+56 9 7439 7629</strong>
            </p>
          </div>
          <div className="trust-bar">
            <span>🚀 +65K seguidores en TikTok</span>
            <span>📦 Casos reales de $6K a $30K en ventas</span>
            <span>👥 +259 emprendedores en comunidad</span>
          </div>
        </div>
      </div>
      <div className="wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z" fill="var(--bg-alt)" />
        </svg>
      </div>
    </section>
  );
}
