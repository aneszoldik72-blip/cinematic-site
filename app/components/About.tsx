import { aboutItems, aboutSection } from "../data/site";
import SectionIntro from "./SectionIntro";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <SectionIntro
          eyebrow={aboutSection.eyebrow}
          title={aboutSection.title}
          text={aboutSection.text}
          eyebrowClassName="about-eyebrow"
          titleClassName="about-title"
          textClassName="about-text"
        />

        <div className="about-grid">
          {aboutItems.map((item) => (
            <div key={item.title} className="about-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}