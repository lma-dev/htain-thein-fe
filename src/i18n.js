import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "mm", "jp"];

export default getRequestConfig(async ({ locale }) => {
  console.log("i18n : " + locale);
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
