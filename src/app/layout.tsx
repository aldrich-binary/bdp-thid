import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Threads from "@/components/Threads";
import { ThemeProvider } from "@/components/shared/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BDP - Firma de Abogados | Especialistas en Derecho Público",
  description:
    "BDP es una firma de abogados especializada en litigio y consultoría multidisciplinaria en derecho público. Ofrecemos soluciones estratégicas en derecho constitucional, administrativo, regulatorio, fiscal, energético e inmobiliario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
          </div>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
