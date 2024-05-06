import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import BgShapes from "@/components/ui/bg-shapes";
import { SiteHeader } from "@/components/site-header";

import { Providers } from "@/app/providers";
import VerticalLines from "@/components/ui/vertical-lines";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("h-[calc(100vh - 56px)] max-w-[2560px] mx-auto antialiased", ...fonts)}>
          <Toaster />

          <Providers>
            <div className="relative flex min-h-screen">
              <div className="flex min-h-screen w-full flex-col">
                <SiteHeader />

                <div className="flex-1">{children}</div>
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
