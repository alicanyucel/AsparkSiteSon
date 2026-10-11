"use client";

import Link from "next/link";
import { FaCheck, FaCompass, FaHandshake, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { useSitePreferences } from "../components/site-preferences";

const focusAreas = [
  ["area.digital", "E-Dönüşüm"],
  ["area.green", "Yeşil Dönüşüm"],
  ["area.health", "Akıllı Sağlık"],
  ["area.blockchain", "Blockchain"],
] as const;

export default function AboutPage() {
  const { t } = useSitePreferences();

  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <span className="section-kicker">{t("about.kicker")}</span>
          <h1>{t("about.title")}</h1>
          <p>{t("about.lead")}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-7">
              <span className="section-kicker">{t("about.approach")}</span>
              <h2 className="section-title mb-4">{t("about.titleLine1")}<br /><span>{t("about.titleLine2")}</span></h2>
              <p className="about-copy">{t("about.copy1")}</p>
              <p className="about-copy">{t("about.copy2")}</p>
            </div>
            <div className="col-lg-5">
              <div className="team-card">
                <h3>{t("about.team")}</h3>
                <div className="team-member"><strong>Serkan Karadeniz</strong><span>{t("about.ceo")}</span></div>
                <div className="team-member"><strong>Alican Yücel</strong><span>{t("about.cto")}</span></div>
                <div className="team-member"><strong>Mustafa Baz</strong><span>{t("about.leadRole")}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4">
              <article className="value-item">
                <FaCompass aria-hidden="true" />
                <h3>{t("about.vision")}</h3>
                <p>{t("about.visionCopy")}</p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="value-item">
                <FaHandshake aria-hidden="true" />
                <h3>{t("about.mission")}</h3>
                <p>{t("about.missionCopy")}</p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="value-item">
                <FaShieldAlt aria-hidden="true" />
                <h3>{t("about.values")}</h3>
                <p>{t("about.valuesCopy")}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-projects">
        <div className="container">
          <div className="row align-items-end gy-3 mb-4">
            <div className="col-lg-7">
              <span className="section-kicker">{t("about.areas")}</span>
              <h2 className="section-title">{t("about.solutions1")}<br /><span>{t("about.solutions2")}</span></h2>
            </div>
            <div className="col-lg-5">
              <p className="section-copy mb-0">{t("about.solutionsCopy")}</p>
            </div>
          </div>
          <div>
            {focusAreas.map(([key, area]) => <span className="project-chip" key={area}><FaCheck aria-hidden="true" />{t(key)}</span>)}
          </div>
          <div className="mt-5">
            <Link href="/contact" className="button-primary">{t("about.workTogether")} <FaLightbulb aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
