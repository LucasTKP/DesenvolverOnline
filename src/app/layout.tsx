import type { Metadata } from "next";
import { Fira_Code, Poppins, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--poppins',
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-fira',

})

export const metadata: Metadata = {
  title: "Desenvolver Online",
  description: "Sofisticação e Inteligência para empresas.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={poppins.className + ` ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
