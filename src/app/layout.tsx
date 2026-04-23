import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { CursorProvider } from "@/components/ui/cursor";
import { Cursor } from "@/components/ui/cursor";
import "@/app/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "David Felicio",
    template: "%s · David Felicio",
  },
  description: "Fullstack Developer — React, TypeScript & Python",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${sora.variable} ${jetbrainsMono.variable} font-sans cursor-none`}>
        <ThemeProvider>
          <CursorProvider>
            <Cursor />
            {children}
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}