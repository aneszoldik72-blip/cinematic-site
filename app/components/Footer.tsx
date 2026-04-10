import { siteInfo } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <p>{siteInfo.footerText}</p>
    </footer>
  );
}