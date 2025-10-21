import localFont from "next/font/local";
import "./globals.css";
import { Footer, TopBar } from "@/components/Navigation";


export const metadata = {
  title: "AlvaCode",
  description: "Página personal enfocada a brindar información sobre el desarrollo de software y algunos tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={` antialiased font-plex-serif`}
      >
        <TopBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
