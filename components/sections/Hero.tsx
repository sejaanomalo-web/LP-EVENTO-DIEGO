"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { TicketCTA } from "@/components/shared/TicketCTA";
import { DiamondBackground } from "@/components/shared/DiamondBackground";
import { EVENT } from "@/lib/constants";

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-navy pt-16 md:pt-20"
    >
      <DiamondBackground opacity={0.05} />

      <div className="relative w-full border-y border-sand/15 bg-navy/40 backdrop-blur-sm">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10 py-2.5 text-center">
          <span className="label-caps text-sand/90">
            Inscrições por contato direto · ✱ vagas limitadas a {EVENT.seats} líderes
          </span>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-5 md:px-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center gap-8 lg:col-span-7"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>Diego Knebel apresenta</SectionLabel>
            <span className="label-caps text-white/60">
              / Imersão presencial · {EVENT.city}
            </span>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sand/30 bg-navy-light/40 px-4 py-1.5 label-caps text-sand">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              {EVENT.dateLong}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] text-balance">
            Líder
            <br />
            <span className="text-signal">Magnético</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-semibold leading-snug max-w-xl text-pretty">
            Comunique-se para atrair, engajar e melhorar{" "}
            <em className="font-semibold not-italic text-sand">resultados</em>.
          </p>

          <div className="flex flex-col gap-4 max-w-lg">
            <span className="signature-line" aria-hidden />
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Dois dias de imersão para líderes que sabem muito e querem se
              fazer ouvir como deveriam. Para quem entendeu que presença não se
              improvisa, se constrói.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <TicketCTA label="Falar com a equipe" size="lg" />
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-sand/30 bg-navy-light">
                <span className="absolute inset-0 flex items-center justify-center text-sand text-sm font-bold">
                  DK
                </span>
              </div>
              <p className="text-sm text-white/65 leading-snug">
                {EVENT.seats} vagas. A confirmação acontece por conversa direta.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-md border border-sand/15 bg-navy-light">
            <Image
              src="/assets/diego/portrait-hero.jpg"
              alt="Retrato de Diego Knebel"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/0 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="label-caps text-sand">Diego Knebel</span>
              <span className="signature-line" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
