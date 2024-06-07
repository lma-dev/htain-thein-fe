import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import enMessages from "../messages/en.json";
import mmMessages from "../messages/mm.json";
import jpMessages from "../messages/jp.json";

const messages = {
  en: enMessages,
  mm: mmMessages,
  jp: jpMessages,
};

export default getRequestConfig(async ({ locale }) => {
  if (!(locale in messages)) notFound();

  return {
    messages: messages[locale],
  };
});
