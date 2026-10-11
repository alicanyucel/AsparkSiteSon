"use client";

import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useSitePreferences } from "../components/site-preferences";

export default function ContactPage() {
  const { t } = useSitePreferences();

  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <span className="section-kicker">{t("contact.kicker")}</span>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.lead")}</p>
        </div>
      </section>

      <main className="contact-page">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4">
              <section className="contact-card">
                <span className="contact-card-icon"><FaPhone aria-hidden="true" /></span>
                <h2>{t("contact.phone")}</h2>
                <p><a href="tel:+905416923675">+90 541 692 3675</a></p>
              </section>
            </div>
            <div className="col-md-4">
              <section className="contact-card">
                <span className="contact-card-icon"><FaEnvelope aria-hidden="true" /></span>
                <h2>{t("contact.email")}</h2>
                <p><a href="mailto:yucelalicandan@hotmail.com">yucelalicandan@hotmail.com</a></p>
              </section>
            </div>
            <div className="col-md-4">
              <section className="contact-card">
                <span className="contact-card-icon"><FaMapMarkerAlt aria-hidden="true" /></span>
                <h2>{t("contact.location")}</h2>
                <p>{t("contact.city")}</p>
              </section>
            </div>
          </div>
          <div className="contact-note">
            <strong>{t("contact.project")}</strong><br />
            {t("contact.copy")}
            <div className="mt-3">
              <Link className="text-link" href="mailto:yucelalicandan@hotmail.com">{t("contact.sendEmail")} <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
