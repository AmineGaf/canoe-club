import type { Metadata } from "next";
import { Inter, Merriweather, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";

// Font configurations
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-merriweather',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({ 
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Canoe Club | Lake Lotawana's Premier Waterfront Restaurant",
  description: "Jackson County's favorite gathering place since 2007. Famous Phish Tacos, Live Music, Prime Rib Weekends, and stunning lake views at Lake Lotawana, Missouri.",
  keywords: "Canoe Club, Lake Lotawana restaurant, Kansas City dining, Phish Tacos, waterfront restaurant, live music venue, prime rib, Missouri restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${merriweather.variable} ${bebasNeue.variable}`}
    >
      <body className="font-sans antialiased bg-cream text-dark-charcoal">
        <LenisProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
