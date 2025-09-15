// src/i18n/translations.ts
import es from "./languages/es.json";
import en from "./languages/en.json";

export const translations = {
  es,
  en,
} as const;

export type AvailableLanguages = keyof typeof translations;
export type TranslationData = (typeof translations)["es"];
