import { navItems, siteInfo } from "../data/site";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">
        {siteInfo.brandName}
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}