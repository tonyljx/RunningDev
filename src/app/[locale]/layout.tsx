import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "RunningDev",
  description: "The NextJs Saas Template",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages();
  // console.log("layout " + JSON.stringify(messages));

  return (
    <html lang={locale}>
      <body>
        {/* <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-indigo-100 via-slate-100 to-teal-50"></div> */}
        <div className="absolute -right-20 -top-20 z-0 h-60 w-80 bg-blue-600 opacity-30 blur-[80px]"></div>
        <div className="absolute left-40 top-40 z-0 h-60 w-80 bg-blue-400 opacity-30 blur-[80px]"></div>
        <div className="absolute right-40 top-40 z-0 h-60 w-80 bg-purple-400 opacity-30 blur-[80px]"></div>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
