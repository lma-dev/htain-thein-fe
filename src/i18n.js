import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import enMessages from "../messages/en.json";
import mmMessages from "../messages/mm.json";
import jpMessages from "../messages/jp.json";
import { locales } from "./app/config/config";

const messages = {
  en: enMessages,
  mm: mmMessages,
  jp: jpMessages,
};

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: messages[locale],
  };
});
