"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export const LANGUAGES = ["FR", "NL", "EN"] as const;
export type Language = (typeof LANGUAGES)[number];

type LanguageValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageValue | null>(null);

/**
 * Holds the selected language. Copy is English-only for now; wire this into
 * next-intl (or similar) when the FR/NL translations land.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageValue {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return value;
}

export function LanguageSwitcher({ variant }: { variant: "light" | "dark" }) {
  const { language, setLanguage } = useLanguage();

  const active = variant === "light" ? "text-brand" : "text-white";
  const inactive = variant === "light" ? "text-faint" : "text-footer-dim";
  const divider = variant === "light" ? "text-[#d6d6de]" : "text-[#4b4b63]";

  return (
    <div className="flex items-center gap-0.5 text-[13px] font-semibold">
      {LANGUAGES.map((code, index) => (
        <span key={code} className="flex items-center gap-0.5">
          {index > 0 && <span className={divider}>|</span>}
          <button
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={language === code}
            className={`cursor-pointer px-1.5 py-1 ${
              language === code ? active : inactive
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
