import { heroContent, heroStats } from "../data/site";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-shell">
        <div className="hero-content">
          <p className="hero-eyebrow">{heroContent.eyebrow}</p>

          <h1 className="hero-title">{heroContent.title}</h1>

          <p className="hero-text">{heroContent.text}</p>

          <a href={heroContent.buttonHref} className="hero-button">
            {heroContent.buttonLabel}
          </a>

          <div className="hero-stats">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-stat-card">
                <strong className="hero-stat-value">{item.value}</strong>
                <span className="hero-stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-float hero-float-left">Cinematic Motion</div>
          <div className="hero-float hero-float-right">Custom Coded</div>

          <div className="hero-device">
            <div className="hero-device-top"></div>

            <div className="hero-device-screen">
              <div className="hero-device-grid">
                <div className="hero-panel hero-panel-large"></div>
                <div className="hero-panel hero-panel-small"></div>
                <div className="hero-panel hero-panel-small"></div>
                <div className="hero-panel hero-panel-wide"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}