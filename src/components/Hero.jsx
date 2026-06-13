import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero" id="top">
      <div className="hero-bg-glow" />
      <div className="container">
        <div className="hero-inner reveal" ref={ref}>
          <div className="hero-promise">
            <img
              className="hero-phoenix"
              src="/icon/logo-fenix-azul.png"
              alt=""
              aria-hidden="true"
            />
            <p className="hero-eyebrow">Renacer desde el interior</p>
            <h1>
              Te enseñaré mi {' '}
              <span className="accent">sistema</span> para vender de{' '}
              <span className="accent">$5.000</span> a{' '}
              <span className="accent">$15.000</span> con{' '}
              <span className="accent">TikTok</span> haciendo videos
            </h1>
            <p className="hero-sub">🚫Sin depender de <em>en vivos</em> - ni publicidad🚫</p>
          </div>

          <div className="hero-video-wrap">
            <iframe
              src="https://player.vimeo.com/video/1199949505?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              title="Marketing con Fran — Video de presentación"
            />
          </div>

          <div className="hero-cta-wrap">
            <a
              className="btn btn-primary btn-lg"
              href="https://wa.me/56974397629"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Contacta a Fran Aquí
            </a>
            <p className="fallback">
              Si el link no funciona, escribe al: <strong>+56 9 7439 7629</strong>
            </p>
          </div>
        </div>

        <div className="trust-bar">
          <span>🚀 +65K seguidores en TikTok</span>
          <span>📦 Casos reales de $6K a $30K en ventas</span>
          <span>👥 +259 emprendedores en comunidad</span>
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
