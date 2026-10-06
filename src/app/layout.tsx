import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const description =
  "Software engineer with about seven years of experience building ERPs, payment integrations (M-Pesa, PayPal, cards) and mobile apps. Open to new roles.";

export const metadata: Metadata = {
  title: "James Nderitu | Software Engineer",
  description,
  openGraph: {
    title: "James Nderitu | Software Engineer",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}