import localFont from "next/font/local";
import "./globals.css";
import { Footer, TopBar } from "@/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AlvaCode",
  description: "Página personal enfocada a brindar información sobre el desarrollo de software y algunos tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
