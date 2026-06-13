export const LOCALES = {
  es: {
    iso: "es-MX",
    name: "Español",
  },
  en: {
    iso: "en-US",
    name: "English",
  },
  de: {
    iso: "de-DE",
    name: "Deutsch",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "es";
