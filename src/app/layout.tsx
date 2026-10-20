import type { Metadata, Viewport } from "next";
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

const GA_ID = "G-ZX31NC64LC";

const title = "James Nderitu | Software Engineer in Kenya | ERP and Mobile";
const description =
  "Software engineer in Kenya with about seven years of experience building ERP systems, payment integrations (M-Pesa, PayPal) and mobile apps.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1118" },
  ],
};

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
    // Add a 1200x630 image at public/og.png for link previews.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${NAME}, software engineer` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  verification: { google: "j2UGwKsOQrQROnF8T9vlyhmycxHbr_KHjwSIvgETpBc" },
};

// Structured data so search engines understand who this site is about.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: "Software Engineer and CTO",
  image: `${SITE_URL}/james-nderitu.jpg`,
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
  sameAs: [
    LINKEDIN,
    ...(GITHUB ? [GITHUB] : []),
    "https://x.com/jamesnderitukar",
    "https://www.facebook.com/james.nderitu.613670",
    "https://www.instagram.com/jamderitu/",
    "https://www.tiktok.com/@user62736446",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexSans.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
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