import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "./providers/TanStackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Htain Thein",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>
          <div>{children}</div>
        </TanStackProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
