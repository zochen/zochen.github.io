// "use client" tells Next.js this component runs in the browser (not on the server).
// We need this because next-themes uses browser APIs like localStorage.
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // attribute="class" adds/removes the "dark" class on <html> for Tailwind dark mode
    // defaultTheme="system" respects the user's OS preference (light/dark)
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
