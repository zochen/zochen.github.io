import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Zoey Chen",
  description:
    "Zoey Chen — coder, 3D artist, and student.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${zenKaku.variable} font-[family-name:var(--font-body)] bg-warm-100 text-warm-600 dark:bg-warm-700 dark:text-warm-300 antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="max-w-2xl mx-auto px-6">
            {children}
          </div>
          <Footer />
          <Mascot />
        </ThemeProvider>
      </body>
    </html>
  );
}
