import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const siteName = "BlueMind";
const description = "Plataforma de monitoramento marinho. Permite o compartilhamento de observações sobre a vida marinha e o reporte de incidentes de poluição em tempo real.";

export const metadata: Metadata = {
  title: siteName,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <React.Fragment>
          {children}  
        </React.Fragment>
      </body>
    </html>
  );
}
