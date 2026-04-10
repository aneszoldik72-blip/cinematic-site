type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
  eyebrowClassName: string;
  titleClassName: string;
  textClassName: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  text,
  eyebrowClassName,
  titleClassName,
  textClassName,
}: SectionIntroProps) {
  return (
    <>
      <p className={eyebrowClassName}>{eyebrow}</p>
      <h2 className={titleClassName}>{title}</h2>
      <p className={textClassName}>{text}</p>
    </>
  );
}