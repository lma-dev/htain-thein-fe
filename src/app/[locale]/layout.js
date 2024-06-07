import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "../providers/TanStackProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      {/* TODO:remove suppressHydrationWarning={true} */}
      <NextIntlClientProvider messages={messages}>
        <body suppressHydrationWarning={true} className={inter.className}>
          <TanStackProvider>
            <div>{children}</div>
          </TanStackProvider>
          <Toaster position="top-right" reverseOrder={false} />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
