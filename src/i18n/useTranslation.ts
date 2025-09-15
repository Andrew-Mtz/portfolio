import { useLanguage } from "../contexts/useLanguage";
import { translations, type TranslationData } from "./translations";

export function useTranslation() {
  const { language } = useLanguage();
  const langData = translations[language] as TranslationData;

  const getValue = (key: string): unknown => {
    const keys = key.split(".");
    let value: unknown = langData;

    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // fallback
      }
    }

    return value;
  };

  const t = (key: string): string => {
    const value = getValue(key);
    return typeof value === "string" ? value : key;
  };

  const tArray = (key: string): string[] => {
    const value = getValue(key);
    return Array.isArray(value) ? value : [];
  };

  const tObject = <T>(key: string): T => {
    const value = getValue(key);
    return (value ?? {}) as T;
  };

  return { t, tArray, tObject };
}
