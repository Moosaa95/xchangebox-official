import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "XchangeBox - Transforming Financial Inclusion Through Trade Finance",
    template: "%s | XchangeBox"
  },
  description: "XchangeBox empowers underserved communities across Nigeria through innovative trade finance, community lending, and digital banking infrastructure. Join 1,000+ partners creating measurable impact in financial inclusion.",
  keywords: [
    "XchangeBox",
    "financial inclusion Nigeria",
    "trade finance",
    "microfinance Nigeria",
    "agricultural finance",
    "women empowerment",
    "community lending",
    "digital banking infrastructure",
    "fintech Nigeria",
    "invoice financing",
    "supply chain finance",
    "sustainable development goals"
  ],
  authors: [{ name: "XchangeBox" }],
  creator: "XchangeBox",
  publisher: "XchangeBox",
  metadataBase: new URL('https://xchangebox.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://xchangebox.ng",
    siteName: "XchangeBox",
    title: "XchangeBox - Transforming Financial Inclusion Through Trade Finance",
    description: "Empowering underserved communities across Nigeria through innovative trade finance, community lending, and digital banking infrastructure. Join 1,000+ partners creating impact.",
    images: [
      {
        url: "/images/farm4factory-partnership-model.png",
        width: 1200,
        height: 630,
        alt: "XchangeBox - Financial Inclusion Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XchangeBox - Transforming Financial Inclusion",
    description: "Empowering underserved communities through trade finance, community lending, and digital infrastructure. 5,000+ trades financed, 70% women participation.",
    images: ["/images/farm4factory-partnership-model.png"],
    creator: "@xchangebox",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "XchangeBox",
              "alternateName": "XchangeBox Nigeria",
              "url": "https://xchangebox.com",
              "logo": "https://xchangebox.com/logos/xchangebox-logo.png",
              "description": "XchangeBox empowers underserved communities across Nigeria through innovative trade finance, community lending, and digital banking infrastructure.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Abuja",
                "addressRegion": "FCT",
                "addressCountry": "NG"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Nigeria"
              },
              "serviceType": [
                "Trade Finance",
                "Microfinance",
                "Community Lending",
                "Digital Banking Infrastructure"
              ],
              "sameAs": [
                "https://twitter.com/xchangebox",
                "https://linkedin.com/company/xchangebox",
                "https://facebook.com/xchangebox"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Hausa", "Yoruba", "Igbo"]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
