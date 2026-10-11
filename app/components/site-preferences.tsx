"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const tr = {
  "nav.home": "Ana sayfa",
  "nav.about": "Hakkımızda",
  "nav.solutions": "Çözümler",
  "nav.contact": "İletişim",
  "nav.menu": "Menüyü aç veya kapat",
  "nav.homeLabel": "ASPARK INNOVATIONS ana sayfa",
  "nav.themeLight": "Açık temaya geç",
  "nav.themeDark": "Koyu temaya geç",
  "nav.language": "Switch language to English",
  "nav.backToTop": "Yukarı çık",
  "nav.backToTopLabel": "Sayfanın en üstüne çık",
  "brand.slogan": "İnovasyon Genimizde Var.",
  "home.eyebrow": "Teknolojiyle geleceği tasarlıyoruz",
  "home.head1": "İyi fikirleri",
  "home.head2": "güçlü çözümlere",
  "home.head3": "dönüştürüyoruz.",
  "home.description": "ASPARK INNOVATIONS olarak kurumların dönüşüm yolculuğuna eşlik ediyor, teknoloji ve yaratıcılığı bir araya getiriyoruz.",
  "home.aboutCta": "Bizi tanıyın",
  "home.contactCta": "Projenizi konuşalım",
  "home.noteIdea": "Fikirden",
  "home.noteImpact": "etkiye",
  "home.noteInnovation": "İnovasyon",
  "home.noteApproach": "odaklı yaklaşım",
  "home.tagline": "Fikir. Teknoloji. Etki.",
  "home.discover": "Keşfet",
  "home.aboutKicker": "ASPARK INNOVATIONS hakkında",
  "home.introTitle1": "Teknoloji sadece araç değil,",
  "home.introTitle2": "ilerlemenin başlangıcı.",
  "home.introCopy": "Değişen ihtiyaçları anlamakla başlıyor, sürdürülebilir ve uygulanabilir dijital çözümler üretmek için birlikte çalışıyoruz.",
  "home.story": "Hikâyemizi keşfedin",
  "home.principle1": "İhtiyacı anlarız",
  "home.principle1Copy": "Her yolculuk doğru sorularla başlar.",
  "home.principle2": "Birlikte tasarlarız",
  "home.principle2Copy": "İş birliğiyle fikirleri netleştiririz.",
  "home.principle3": "Değer üretiriz",
  "home.principle3Copy": "Teknolojiyi gerçek faydaya dönüştürürüz.",
  "home.areasKicker": "Odak alanlarımız",
  "home.areasTitle1": "Bugünün ihtiyaçları,",
  "home.areasTitle2": "yarının çözümleri.",
  "home.areasCopy": "Farklı disiplinleri bir araya getirerek daha yaşanabilir, verimli ve bağlantılı bir gelecek için çalışıyoruz.",
  "area.digital": "E-Dönüşüm",
  "area.digitalCopy": "İş süreçlerini sadeleştiren, veriyi değerli kılan dijital çözümler.",
  "area.green": "Yeşil Dönüşüm",
  "area.greenCopy": "Kaynakları daha verimli kullanmaya yardımcı olan teknoloji yaklaşımları.",
  "area.health": "Akıllı Sağlık",
  "area.healthCopy": "Sağlık hizmetlerinde erişimi ve deneyimi geliştiren dijital fikirler.",
  "area.blockchain": "Blockchain",
  "area.blockchainCopy": "Güven ve izlenebilirlik ihtiyacına yönelik yeni nesil uygulamalar.",
  "home.vision": "Vizyonumuz",
  "home.visionTitle1": "Yenilikçi çözümlerle",
  "home.visionTitle2": "teknolojiye",
  "home.visionTitle3": "yön vermek.",
  "home.visionCopy": "İnsan ve kurumların potansiyelini açığa çıkaran, güvenilir ve sürdürülebilir teknoloji çözümleriyle geleceğe katkı sunmayı hedefliyoruz.",
  "home.valueTrust": "Güven",
  "home.valueInnovation": "Yenilik",
  "home.valueSustainability": "Sürdürülebilirlik",
  "home.together": "Birlikte üretelim",
  "home.ctaTitle1": "Fikriniz varsa,",
  "home.ctaTitle2": "dinlemeye hazırız.",
  "home.contactButton": "İletişime geçin",
  "about.kicker": "Biz kimiz?",
  "about.title": "Hakkımızda",
  "about.lead": "Teknolojiyi anlamlı çözümlere dönüştürmek için çalışan, yenilik ve iş birliğine inanan bir ekibiz.",
  "about.approach": "ASPARK INNOVATIONS yaklaşımı",
  "about.titleLine1": "Her dönüşüm,",
  "about.titleLine2": "iyi bir soruyla başlar.",
  "about.copy1": "ASPARK INNOVATIONS, teknoloji ve inovasyon odağında çalışan bir ekiptir. Kurumların değişen ihtiyaçlarını anlamayı, doğru teknolojiyi seçmeyi ve fikirleri uygulanabilir çözümlere dönüştürmeyi önemsiyoruz. E-Dönüşüm, Yeşil Dönüşüm, Akıllı Sağlık ve Blockchain alanlarındaki çalışmalarımızla sürdürülebilir değer üretmeyi hedefliyoruz.",
  "about.copy2": "Yaklaşımımızın merkezinde açık iletişim, güven ve birlikte üretme kültürü yer alır. Her projeye kendi koşulları içinde bakar, teknolojiyi amaca hizmet eden bir araç olarak konumlandırırız.",
  "about.team": "Ekibimiz",
  "about.ceo": "CEO",
  "about.cto": "CTO",
  "about.leadRole": "Yazılım Takım Lideri",
  "about.vision": "Vizyonumuz",
  "about.visionCopy": "Yenilikçi çözümlerle teknolojiye yön vermek ve geleceğin ihtiyaçlarına bugünden hazırlanmak.",
  "about.mission": "Misyonumuz",
  "about.missionCopy": "İnsan ve kurumlara değer katan, güvenilir ve uygulanabilir teknoloji çözümleri geliştirmek.",
  "about.values": "Değerlerimiz",
  "about.valuesCopy": "Şeffaf iletişim, sorumluluk, iş birliği ve sürekli öğrenme kültürüyle hareket etmek.",
  "about.areas": "Çalışma alanlarımız",
  "about.solutions1": "Geleceğe odaklanan",
  "about.solutions2": "çözüm başlıkları.",
  "about.solutionsCopy": "Bu alanlarda fikirleri, ihtiyaçlara ve proje kapsamına göre birlikte şekillendiriyoruz.",
  "about.workTogether": "Birlikte çalışalım",
  "contact.kicker": "Birlikte başlayalım",
  "contact.title": "İletişim",
  "contact.lead": "Bir fikriniz, sorunuz ya da birlikte değerlendirmek istediğiniz bir projeniz mi var? Bize ulaşın.",
  "contact.phone": "Telefon",
  "contact.email": "E-posta",
  "contact.location": "Konum",
  "contact.city": "Ankara, Türkiye",
  "contact.project": "Projenizi konuşalım.",
  "contact.copy": "İhtiyacınızı ve hedeflerinizi paylaşın; size en uygun sonraki adımı birlikte değerlendirelim.",
  "contact.sendEmail": "E-posta gönderin",
  "footer.description": "ASPARK INNOVATIONS olarak teknoloji ve yaratıcılığı bir araya getirerek geleceğin çözümlerini birlikte tasarlıyoruz.",
  "footer.menu": "Alt menü",
  "footer.email": "E-posta",
  "footer.copyright": "Tüm hakları saklıdır.",
} as const;

type MessageKey = keyof typeof tr;

const en: Record<MessageKey, string> = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.solutions": "Solutions",
  "nav.contact": "Contact",
  "nav.menu": "Open or close menu",
  "nav.homeLabel": "ASPARK INNOVATIONS home",
  "nav.themeLight": "Switch to light theme",
  "nav.themeDark": "Switch to dark theme",
  "nav.language": "Türkçe diline geç",
  "nav.backToTop": "Back to top",
  "nav.backToTopLabel": "Scroll to the top of the page",
  "brand.slogan": "Innovation Is in Our DNA.",
  "home.eyebrow": "Designing the future with technology",
  "home.head1": "We turn great",
  "home.head2": "ideas into powerful",
  "home.head3": "solutions.",
  "home.description": "At ASPARK INNOVATIONS, we support organizations through transformation by bringing technology and creativity together.",
  "home.aboutCta": "Get to know us",
  "home.contactCta": "Let's discuss your project",
  "home.noteIdea": "From idea",
  "home.noteImpact": "to impact",
  "home.noteInnovation": "Innovation",
  "home.noteApproach": "driven approach",
  "home.tagline": "Ideas. Technology. Impact.",
  "home.discover": "Discover",
  "home.aboutKicker": "About ASPARK INNOVATIONS",
  "home.introTitle1": "Technology is more than a tool,",
  "home.introTitle2": "it is where progress begins.",
  "home.introCopy": "We start by understanding changing needs and work together to create sustainable, practical digital solutions.",
  "home.story": "Discover our story",
  "home.principle1": "We understand needs",
  "home.principle1Copy": "Every journey starts with the right questions.",
  "home.principle2": "We design together",
  "home.principle2Copy": "Collaboration turns ideas into clear plans.",
  "home.principle3": "We create value",
  "home.principle3Copy": "We turn technology into meaningful outcomes.",
  "home.areasKicker": "Our focus areas",
  "home.areasTitle1": "Today's needs,",
  "home.areasTitle2": "tomorrow's solutions.",
  "home.areasCopy": "We bring disciplines together to help create a more livable, efficient, and connected future.",
  "area.digital": "Digital Transformation",
  "area.digitalCopy": "Digital solutions that simplify operations and unlock the value of data.",
  "area.green": "Green Transformation",
  "area.greenCopy": "Technology approaches that help organizations use resources more efficiently.",
  "area.health": "Smart Healthcare",
  "area.healthCopy": "Digital ideas that improve access to and experiences of healthcare.",
  "area.blockchain": "Blockchain",
  "area.blockchainCopy": "Next-generation applications for trust and traceability.",
  "home.vision": "Our vision",
  "home.visionTitle1": "Innovative solutions",
  "home.visionTitle2": "shaping",
  "home.visionTitle3": "the future of technology.",
  "home.visionCopy": "We aim to contribute to the future with reliable, sustainable technology solutions that unlock the potential of people and organizations.",
  "home.valueTrust": "Trust",
  "home.valueInnovation": "Innovation",
  "home.valueSustainability": "Sustainability",
  "home.together": "Let's build together",
  "home.ctaTitle1": "Have an idea?",
  "home.ctaTitle2": "We are ready to listen.",
  "home.contactButton": "Get in touch",
  "about.kicker": "Who we are",
  "about.title": "About us",
  "about.lead": "We are a team that believes in innovation and collaboration, turning technology into meaningful solutions.",
  "about.approach": "The ASPARK INNOVATIONS approach",
  "about.titleLine1": "Every transformation",
  "about.titleLine2": "starts with a good question.",
  "about.copy1": "ASPARK INNOVATIONS is a team focused on technology and innovation. We care about understanding organizations' changing needs, choosing the right technology, and turning ideas into practical solutions. Through our work in Digital Transformation, Green Transformation, Smart Healthcare, and Blockchain, we aim to create sustainable value.",
  "about.copy2": "Open communication, trust, and a collaborative spirit are at the heart of our approach. We consider each project on its own merits and use technology as a means to serve its purpose.",
  "about.team": "Our team",
  "about.ceo": "CEO",
  "about.cto": "CTO",
  "about.leadRole": "Software Team Lead",
  "about.vision": "Our vision",
  "about.visionCopy": "To shape technology with innovative solutions and prepare today for the needs of tomorrow.",
  "about.mission": "Our mission",
  "about.missionCopy": "To develop reliable, practical technology solutions that create value for people and organizations.",
  "about.values": "Our values",
  "about.valuesCopy": "We act with transparent communication, accountability, collaboration, and a culture of continuous learning.",
  "about.areas": "What we do",
  "about.solutions1": "Solutions focused",
  "about.solutions2": "on the future.",
  "about.solutionsCopy": "We shape ideas in these areas together, based on needs and project scope.",
  "about.workTogether": "Let's work together",
  "contact.kicker": "Let's get started",
  "contact.title": "Contact",
  "contact.lead": "Have an idea, a question, or a project you'd like to discuss? Get in touch.",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.location": "Location",
  "contact.city": "Ankara, Türkiye",
  "contact.project": "Let's talk about your project.",
  "contact.copy": "Tell us about your needs and goals; together, we'll explore the next step that's right for you.",
  "contact.sendEmail": "Send us an email",
  "footer.description": "At ASPARK INNOVATIONS, we bring technology and creativity together to shape the solutions of tomorrow.",
  "footer.menu": "Footer navigation",
  "footer.email": "Email",
  "footer.copyright": "All rights reserved.",
};

type Language = "tr" | "en";
type Theme = "light" | "dark";
type PreferenceSnapshot = { language: Language; theme: Theme };

const preferencesEvent = "aspark-preferences-change";
const serverSnapshot = "tr:light";

function readPreferences(): PreferenceSnapshot {
  const storedLanguage = window.localStorage.getItem("aspark-language");
  const storedTheme = window.localStorage.getItem("aspark-theme");
  return {
    language: storedLanguage === "en" ? "en" : "tr",
    theme: storedTheme === "dark" ? "dark" : "light",
  };
}

function subscribeToPreferences(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(preferencesEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(preferencesEvent, onChange);
  };
}

function getPreferencesSnapshot() {
  const { language, theme } = readPreferences();
  return `${language}:${theme}`;
}

function updatePreferences(updates: Partial<PreferenceSnapshot>) {
  const preferences = { ...readPreferences(), ...updates };
  window.localStorage.setItem("aspark-language", preferences.language);
  window.localStorage.setItem("aspark-theme", preferences.theme);
  window.dispatchEvent(new Event(preferencesEvent));
}

type Preferences = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
  t: (key: MessageKey) => string;
};

const PreferencesContext = createContext<Preferences | null>(null);

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeToPreferences,
    getPreferencesSnapshot,
    () => serverSnapshot,
  );
  const [languageValue, themeValue] = snapshot.split(":");
  const language: Language = languageValue === "en" ? "en" : "tr";
  const theme: Theme = themeValue === "dark" ? "dark" : "light";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
  }, [language, theme]);

  const value = useMemo<Preferences>(() => ({
    language,
    theme,
    setLanguage: (nextLanguage) => updatePreferences({ language: nextLanguage }),
    toggleTheme: () => updatePreferences({ theme: readPreferences().theme === "light" ? "dark" : "light" }),
    t: (key) => language === "tr" ? tr[key] : en[key],
  }), [language, theme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function useSitePreferences() {
  const preferences = useContext(PreferencesContext);
  if (!preferences) throw new Error("useSitePreferences must be used within SitePreferencesProvider");
  return preferences;
}
