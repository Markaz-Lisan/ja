import { Translation, CalloutTranslation } from "./locales/definition"
import en from "./locales/en"
import ja from "./locales/ja"
import ar from "./locales/ar"

export const TRANSLATIONS = {
  "en-US": en,
  en: en,
  ja: ja,
  ar: ar,
} as const

export const defaultTranslation = "ar"
export const i18n = (locale: ValidLocale): Translation => TRANSLATIONS[locale ?? defaultTranslation]
export type ValidLocale = keyof typeof TRANSLATIONS
export type ValidCallout = keyof CalloutTranslation
