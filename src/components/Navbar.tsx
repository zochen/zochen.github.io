"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "gallery", href: "/gallery" },
  { label: "projects", href: "/#projects" },
  { label: "resume", href: "/#resume" },
  { label: "contact", href: "/#contact" },
];

function NavLinksWithSlider({ className, vertical = false }: { className?: string; vertical?: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState({ offset: 0, size: 0, crossSize: 0 });

  useEffect(() => {
    if (hovered !== null && linkRefs.current[hovered] && containerRef.current) {
      const link = linkRefs.current[hovered]!;
      const container = containerRef.current;
      const linkRect = link.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      if (vertical) {
        setSliderPos({
          offset: linkRect.top - containerRect.top,
          size: linkRect.height,
          crossSize: linkRect.width,
        });
      } else {
        setSliderPos({
          offset: linkRect.left - containerRect.left,
          size: linkRect.width,
          crossSize: linkRect.height,
        });
      }
    }
  }, [hovered, vertical]);

  return (
    <div
      ref={containerRef}
      className={`relative flex ${vertical ? "flex-col gap-4" : "items-center gap-6"} ${className || ""}`}
      onMouseLeave={() => setHovered(null)}
    >
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            className="absolute rounded-md bg-warm-200/70 dark:bg-warm-600/40"
            initial={{ opacity: 0 }}
            animate={
              vertical
                ? {
                    opacity: 1,
                    top: sliderPos.offset - 4,
                    height: sliderPos.size + 8,
                    width: sliderPos.crossSize + 16,
                    left: -8,
                  }
                : {
                    opacity: 1,
                    left: sliderPos.offset - 8,
                    width: sliderPos.size + 16,
                    height: sliderPos.crossSize + 8,
                    top: -4,
                  }
            }
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </AnimatePresence>

      {navLinks.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          ref={(el) => { linkRefs.current[i] = el; }}
          onMouseEnter={() => setHovered(i)}
          className={`relative z-10 text-sm font-[480] ${
            vertical
              ? "text-warm-400 hover:text-warm-700 dark:text-warm-500 dark:hover:text-warm-200"
              : "text-warm-500 hover:text-warm-700 dark:text-warm-400 dark:hover:text-warm-200"
          } transition-colors`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto px-6 pt-10 pb-6"
      >
        <div className="flex items-center">
          <NavLinksWithSlider />

          <div className="ml-auto">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 rounded-full bg-warm-200 hover:bg-warm-300 dark:bg-warm-600 dark:hover:bg-warm-500 text-warm-500 dark:text-warm-300 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Side navbar — appears on the left when scrolled past the top */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
          >
            <NavLinksWithSlider vertical />

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mt-2 p-2 rounded-full bg-warm-200 hover:bg-warm-300 dark:bg-warm-600 dark:hover:bg-warm-500 text-warm-500 dark:text-warm-300 transition-colors w-fit"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
