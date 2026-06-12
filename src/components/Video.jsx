import { useReveal } from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const ref = useReveal();
  return (
    <div className={`reveal ${className}`} ref={ref}>
      {children}
    </div>
  );
}

export default function Video() {
  return (
    <section style={{ background: 'var(--bg)', padding: '60px 0' }}>
      <div className="container">
        <Reveal className="video-embed">
          <div className="video-frame">
            <div className="play-btn" role="button" aria-label="Reproducir video" />
            <div className="video-label">▶ Mira mi video de presentación</div>
          </div>
          <p className="video-note">(Reemplaza este bloque con tu video de YouTube o Vimeo)</p>
        </Reveal>
      </div>
    </section>
  );
}