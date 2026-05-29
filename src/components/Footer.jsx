import PhoenixIcon from './PhoenixIcon';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <PhoenixIcon style={{ color: 'var(--primary)', width: 22, height: 22 }} aria-hidden="true" />
          <span>Fran | Marketing en Redes Sociales</span>
        </div>
        <div className="footer-links">
          <a href="https://www.tiktok.com/@fran_marketingdigital" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://www.instagram.com/marketing_con_fran" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/56974397629" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div className="footer-copy">© 2026 Fran | Marketing Digital. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
