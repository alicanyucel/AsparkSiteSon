"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSitePreferences } from "./site-preferences";
import logo from "../../assets/lg.png";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useSitePreferences();
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-navbar">
      <div className="container">
        <Link className="navbar-brand brand-mark" href="/" onClick={closeMenu} aria-label={t("nav.homeLabel")}>
          <Image src={logo} alt="ASPARK INNOVATIONS" className="brand-logo" priority />
        </Link>
        <div className="site-header-right">
          <div className={`site-navigation ${menuOpen ? "is-open" : ""}`} id="siteNavigation">
            <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/" onClick={closeMenu}>{t("nav.home")}</Link>
            <Link className={`nav-link ${pathname === "/about" ? "active" : ""}`} href="/about" onClick={closeMenu}>{t("nav.about")}</Link>
            <Link className="nav-link" href="/#cozumler" onClick={closeMenu}>{t("nav.solutions")}</Link>
            <Link className="nav-contact" href="/contact" onClick={closeMenu}>{t("nav.contact")} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="header-controls">
            <button className="header-icon-button" type="button" onClick={toggleTheme} aria-label={theme === "light" ? t("nav.themeDark") : t("nav.themeLight")} title={theme === "light" ? t("nav.themeDark") : t("nav.themeLight")}>
              {theme === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
            </button>
            <button className="language-toggle" type="button" onClick={() => setLanguage(language === "tr" ? "en" : "tr")} aria-label={t("nav.language")} title={t("nav.language")}>
              {language === "tr" ? "EN" : "TR"}
            </button>
            <button
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-controls="siteNavigation"
              aria-expanded={menuOpen}
              aria-label={t("nav.menu")}
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
