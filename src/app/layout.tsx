import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, NAME, EMAIL, PHONE_TEL, LINKEDIN, GITHUB } from "../lib/site";

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

const title = "James Nderitu | Software Engineer in Kenya | ERP and Mobile";
const description =
  "Software engineer in Kenya with about seven years of experience building ERP systems, payment integrations (M-Pesa, PayPal) and mobile apps.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: NAME, url: SITE_URL }],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: `${NAME} | Software Engineer`,
    locale: "en_KE",
    type: "website",
  },
  twitter: { card: "summary", title, description },
  // Paste the code from Google Search Console (the content="..." value of the HTML tag).
  // If you already added one in your current layout.tsx, keep that exact value here.
  verification: { google: "PASTE-YOUR-GOOGLE-CODE-HERE" },
};

// Structured data so search engines understand who this site is about.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: "Software Engineer",
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_TEL,
  address: { "@type": "PostalAddress", addressCountry: "KE" },
  worksFor: { "@type": "Organization", name: "Nusuria Technologies", url: "https://nusuria.com/" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Dedan Kimathi University of Technology" },
  knowsAbout: [
    "ERP systems",
    "Payment integrations",
    "M-Pesa API",
    "Flutter",
    "Laravel",
    "Node.js",
    "React",
    "Next.js",
    "Systems administration",
  ],
  sameAs: [LINKEDIN, ...(GITHUB ? [GITHUB] : [])],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexSans.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}