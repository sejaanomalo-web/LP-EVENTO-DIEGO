"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, trackLead } from "@/lib/whatsapp";

export function FloatingSymbol() {
  const href = getWhatsAppLink();
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead()}
      aria-label="Falar com a equipe no WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-sand/40 bg-navy-light/80 text-sand shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md md:bottom-10 md:right-10 md:h-16 md:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 md:h-7 md:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M16 3 L29 16 L16 29 L3 16 Z" />
        <path d="M16 9 L23 16 L16 23 L9 16 Z" />
      </svg>
      <span className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-signal animate-pulse-soft" />
    </motion.a>
  );
}
