import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Muskurahat Foundation - Every Child Deserves Education & Food",
  description: "Help underprivileged children get education and food. Your small donation can give them a classroom and a meal. Children educated: 1,200+, Meals served: 3,500+, Lives impacted: 5,000+",
  keywords: "NGO, charity, education, food, children, donation, India, Muskurahat Foundation",
  authors: [{ name: "Muskurahat Foundation" }],
  creator: "Muskurahat Foundation",
  publisher: "Muskurahat Foundation",
  robots: "index, follow",
  openGraph: {
    title: "Muskurahat Foundation - Every Child Deserves Education & Food",
    description: "Help underprivileged children get education and food. Your donation makes a difference.",
    type: "website",
    locale: "en_IN",
    siteName: "Muskurahat Foundation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muskurahat Foundation - Helping children with education and food"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muskurahat Foundation - Every Child Deserves Education & Food",
    description: "Help underprivileged children get education and food. Your donation makes a difference.",
    images: ["/og-image.jpg"]
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#B91C1C"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}