import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/lib/ModalContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "pgdegrees.online | Online Degree Programs from Top Universities",
  description:
    "Compare and enroll in online MBA, MCA, BBA, BCA programs from India's top universities. UGC entitled, NAAC accredited. Free counseling & placement support.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-slate-800 bg-white">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
