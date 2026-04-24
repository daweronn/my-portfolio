export type Locale = "pt" | "en";

export interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
}