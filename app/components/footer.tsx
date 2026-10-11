"use client";

import Link from "next/link";
import Image from "next/image";
import { useSitePreferences } from "./site-preferences";
import logo from "../../assets/lg.png";

export default function Footer() {
  const { t } = useSitePreferences();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand-mark" href="/">
              <Image src={logo} alt="ASPARK INNOVATIONS" className="brand-logo footer-brand-logo" />
            </Link>
            <p>{t("footer.description")}</p>
          </div>
          <nav className="footer-links" aria-label={t("footer.menu")}>
            <Link href="/">{t("nav.home")}</Link>
            <Link href="/about">{t("nav.about")}</Link>
            <Link href="/contact">{t("nav.contact")}</Link>
            <a href="mailto:yucelalicandan@hotmail.com">{t("footer.email")}</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ASPARK INNOVATIONS. {t("footer.copyright")}</span>
          <span>{t("home.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
