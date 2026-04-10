import { showcaseItems, showcaseSection } from "../data/site";
import SectionIntro from "./SectionIntro";

export default function Showcase() {
  return (
    <section id="work" className="showcase">
      <div className="showcase-content">
        <SectionIntro
          eyebrow={showcaseSection.eyebrow}
          title={showcaseSection.title}
          text={showcaseSection.text}
          eyebrowClassName="showcase-eyebrow"
          titleClassName="showcase-title"
          textClassName="showcase-text"
        />

        <div className="showcase-grid">
          {showcaseItems.map((item) => (
            <div key={item.title} className="showcase-item">
              <div className="showcase-image"></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}