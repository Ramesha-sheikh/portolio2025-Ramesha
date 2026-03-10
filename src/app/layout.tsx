/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next"; // Import Viewport type
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProvideSection } from "@/context/section";
import { ThemeProvider } from "next-themes";
import AIParticles from "@/components/AIParticles";
import FloatingShapes from "@/components/FloatingShapes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import SkipToMain from "@/components/SkipToMain";
import Loader from "@/components/Loader";
import AIChatBot from "@/components/AIChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1d2a35", // Moved from metadata
};

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js 15",
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
    shortcut: "/favicons/mstile-150x150.png",
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        {/* Extra font (Jost) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Microsoft Tile color */}
        <meta name="msapplication-TileColor" content="#5bbad5" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bglight dark:bg-bgdark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Loader>Ramesha.dev</Loader>
          <div className="bg-bglight dark:bg-bgdark overflow-hidden">
            <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
              <AIParticles />
              <FloatingShapes />
              <SkipToMain />
              <Header />
              <ProvideSection>
                <main id="main" className="relative">
                  {children}
                </main>
              </ProvideSection>
              <SocialLinks page="index" />
              <Footer />
              <AIChatBot />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
