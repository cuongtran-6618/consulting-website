import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'fi', 'vi'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async (params) => {
  // requestLocale is provided as a promise; avoid destructuring typed params to keep compatibility
  const { requestLocale, setRequestLocale } = params as any;

  // get the locale using the new async API (await the promise directly)
  const locale = await requestLocale;

  if (!locales.includes(locale as Locale)) notFound();

  // opt into static rendering by setting the request locale when available
  if (typeof setRequestLocale === 'function') setRequestLocale(locale as Locale);

  return {
    messages: (await import(`./i18n/locales/${locale}.json`)).default,
  };
});
