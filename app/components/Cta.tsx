import { ctaContent } from "../data/site";
import SectionIntro from "./SectionIntro";

export default function Cta() {
  return (
    <section id="contact" className="cta">
      <div className="cta-content">
        <SectionIntro
          eyebrow={ctaContent.eyebrow}
          title={ctaContent.title}
          text={ctaContent.text}
          eyebrowClassName="cta-eyebrow"
          titleClassName="cta-title"
          textClassName="cta-text"
        />

        <a href={ctaContent.buttonHref} className="cta-button">
          {ctaContent.buttonLabel}
        </a>
      </div>
    </section>
  );
}