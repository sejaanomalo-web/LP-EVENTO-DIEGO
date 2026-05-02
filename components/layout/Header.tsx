"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { cn } from "@/lib/utils";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-navy/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-screen-xl items-center justify-between px-5 md:px-10">
        <a
          href="#hero"
          aria-label="Diego Knebel"
          className="flex items-center gap-3"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 text-sand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M16 3 L29 16 L16 29 L3 16 Z" />
            <path d="M16 9 L23 16 L16 23 L9 16 Z" />
          </svg>
          <span className="label-caps text-white tracking-[0.22em] hidden sm:inline">
            Diego Knebel
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#about"
            className="label-caps text-white/70 hover:text-sand transition-colors"
          >
            Sobre
          </a>
          <a
            href="#what-happens"
            className="label-caps text-white/70 hover:text-sand transition-colors"
          >
            Imersão
          </a>
          <a
            href="#venue"
            className="label-caps text-white/70 hover:text-sand transition-colors"
          >
            Local
          </a>
          <a
            href="#faq"
            className="label-caps text-white/70 hover:text-sand transition-colors"
          >
            Dúvidas
          </a>
        </nav>
        <WhatsAppButton variant="ghost" size="sm">
          Falar com a equipe
        </WhatsAppButton>
      </div>
    </motion.header>
  );
}
