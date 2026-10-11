"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaBolt,
  FaCode,
  FaLeaf,
  FaHeartbeat,
  FaCubes,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";
import PointerGlow from "./components/pointer-glow";
import { useSitePreferences } from "./components/site-preferences";

const focusAreas = [
  {
    number: "01",
    title: "area.digital",
    description: "area.digitalCopy",
    icon: FaCode,
  },
  {
    number: "02",
    title: "area.green",
    description: "area.greenCopy",
    icon: FaLeaf,
  },
  {
    number: "03",
    title: "area.health",
    description: "area.healthCopy",
    icon: FaHeartbeat,
  },
  {
    number: "04",
    title: "area.blockchain",
    description: "area.blockchainCopy",
    icon: FaCubes,
  },
] as const;

export default function Home() {
  const { t } = useSitePreferences();

  return (
    <>
      <PointerGlow className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7">
              <span className="eyebrow"><span /> {t("home.eyebrow")}</span>
              <h1>{t("home.head1")}<br /><span>{t("home.head2")}</span><br />{t("home.head3")}</h1>
              <p className="hero-description">
                {t("home.description")}
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link href="/about" className="button-primary">
                  {t("home.aboutCta")} <FaArrowRight aria-hidden="true" />
                </Link>
                <Link href="/contact" className="button-outline">
                  {t("home.contactCta")}
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-art" aria-label="ASPARK INNOVATIONS teknoloji ve inovasyon görseli" role="img">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="hero-orb"><FaBolt aria-hidden="true" /></div>
                <div className="floating-note note-top"><span className="note-icon"><FaLightbulb /></span><span>{t("home.noteIdea")}<br /><strong>{t("home.noteImpact")}</strong></span></div>
                <div className="floating-note note-bottom"><span className="pulse-dot" /><span>{t("home.noteInnovation")}<br /><strong>{t("home.noteApproach")}</strong></span></div>
                <span className="art-caption">AS / 01</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>{t("home.tagline")}</span>
            <a href="#cozumler">{t("home.discover")} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </PointerGlow>

      <section className="intro-section section-space">
        <div className="container">
          <div className="row align-items-end gy-4">
            <div className="col-lg-7">
              <span className="section-kicker">{t("home.aboutKicker")}</span>
              <h2 className="section-title">{t("home.introTitle1")}<br /><span>{t("home.introTitle2")}</span></h2>
            </div>
            <div className="col-lg-5">
              <p className="section-copy">
                {t("home.introCopy")}
              </p>
              <Link className="text-link" href="/about">{t("home.story")} <FaArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="principles-row">
            <div><span>01</span><strong>{t("home.principle1")}</strong><p>{t("home.principle1Copy")}</p></div>
            <div><span>02</span><strong>{t("home.principle2")}</strong><p>{t("home.principle2Copy")}</p></div>
            <div><span>03</span><strong>{t("home.principle3")}</strong><p>{t("home.principle3Copy")}</p></div>
          </div>
        </div>
      </section>

      <section className="solutions-section section-space" id="cozumler">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">{t("home.areasKicker")}</span>
              <h2 className="section-title">{t("home.areasTitle1")}<br /><span>{t("home.areasTitle2")}</span></h2>
            </div>
            <p className="section-copy">{t("home.areasCopy")}</p>
          </div>
          <div className="row g-3">
            {focusAreas.map(({ number, title, description, icon: Icon }) => (
              <div className="col-md-6 col-xl-3" key={number}>
                <article className="solution-card">
                  <div className="solution-card-top"><span>{number}</span><Icon aria-hidden="true" /></div>
                  <h3>{t(title)}</h3>
                  <p>{t(description)}</p>
                  <span className="card-arrow" aria-hidden="true"><FaArrowRight /></span>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section section-space">
        <div className="container">
          <div className="vision-panel">
            <div className="vision-mark"><FaLightbulb aria-hidden="true" /></div>
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <span className="section-kicker">{t("home.vision")}</span>
                <h2>{t("home.visionTitle1")}<br />{t("home.visionTitle2")} <span>{t("home.visionTitle3")}</span></h2>
              </div>
              <div className="col-lg-5">
                <p>{t("home.visionCopy")}</p>
                <div className="vision-values"><span><FaShieldAlt /> {t("home.valueTrust")}</span><span><FaLightbulb /> {t("home.valueInnovation")}</span><span><FaLeaf /> {t("home.valueSustainability")}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta">
            <div>
              <span className="section-kicker">{t("home.together")}</span>
              <h2>{t("home.ctaTitle1")}<br /><span>{t("home.ctaTitle2")}</span></h2>
            </div>
            <Link href="/contact" className="button-primary">{t("home.contactButton")} <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
