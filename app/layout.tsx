import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Светлана — консультант по стилю",
  description:
    "Персональные консультации по стилю: тип фигуры, цветотип, базовый гардероб. Онлайн и офлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cormorant.variable} antialiased`}>{children}</body>
    </html>
  );
}
