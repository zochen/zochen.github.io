"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((image, i) => (
          <motion.button
            key={i}
            onClick={() => setSelected(i)}
            className="relative aspect-square rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {image.caption && (
              <div className="absolute inset-0 bg-warm-700/0 group-hover:bg-warm-700/50 transition-colors duration-200 flex items-end">
                <span className="text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {image.caption}
                </span>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-warm-700/90 dark:bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              {galleryImages[selected].caption && (
                <p className="text-white/80 text-sm text-center mt-3">
                  {galleryImages[selected].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
