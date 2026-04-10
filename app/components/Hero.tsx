import { heroContent, heroStats } from "../data/site";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

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
    </section>
  );
}