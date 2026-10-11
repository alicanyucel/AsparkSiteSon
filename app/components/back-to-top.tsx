"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useSitePreferences } from "./site-preferences";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useSitePreferences();

  useEffect(() => {
    const updateVisibility = () => {
      if (typeof window === "undefined") return;
      setVisible(window.scrollY > 240);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      aria-label={t("nav.backToTopLabel")}
      aria-hidden={!visible}
      title={t("nav.backToTopLabel")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      tabIndex={visible ? 0 : -1}
    >
      <FaArrowUp aria-hidden="true" />
      <span>{t("nav.backToTop")}</span>
    </button>
  );
}
