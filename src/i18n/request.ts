import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import enMessages from "../../messages/en.json";
import mmMessages from "../../messages/mm.json";
import jpMessages from "../../messages/jp.json";

type Locale = 'en' | 'mm' | 'jp';

const messages: Record<Locale, any> = {
  en: enMessages,
  mm: mmMessages,
  jp: jpMessages,
};

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();
 
    // Cast locale to the Locale type
    const typedLocale = locale as Locale;

  return {
    messages: messages[typedLocale],
  };
});