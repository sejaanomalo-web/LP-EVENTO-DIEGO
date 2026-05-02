"use client";

import * as React from "react";
import Image from "next/image";
import { Building, Coffee, Gift } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Reveal } from "@/components/shared/Reveal";

const GALLERY = [
  { src: "/assets/event/stage.jpg", caption: "Bastidor de palco" },
  { src: "/assets/event/kit.jpg", caption: "Kit de boas-vindas" },
  { src: "/assets/event/coffee.jpg", caption: "Coffee break premium" },
  { src: "/assets/event/room.jpg", caption: "Salão do evento" },
  { src: "/assets/event/cocktail.jpg", caption: "Coquetel de encerramento" },
  { src: "/assets/event/diego.jpg", caption: "Conversa com Diego" },
  { src: "/assets/event/signature.jpg", caption: "Assinatura da experiência" },
];

const INCLUDED = [
  {
    icon: Building,
    label: "Estrutura",
    text:
      "Hotel Deville Cascavel. Sala equipada com som profissional, telão LED, iluminação cênica e captação audiovisual completa.",
  },
  {
    icon: Coffee,
    label: "Alimentação",
    text:
      "2 coffees premium por dia, 2 almoços executivos e 1 coquetel de encerramento.",
  },
  {
    icon: Gift,
    label: "Material",
    text:
      "Kit personalizado com caderno, caneta touch, material de apoio do método, caneca e brindes sensoriais.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="A experiência"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-screen-xl px-5 md:px-10 flex flex-col gap-14">
        <Reveal>
          <div className="flex flex-col gap-5 max-w-3xl">
            <SectionLabel>A experiência</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] text-balance">
              Cada detalhe pensado para sustentar o que será vivido.
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              Dois dias inteiros em ambiente premium, com infraestrutura,
              refeições e materiais alinhados ao nível do que se vai viver
              dentro da sala.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="relative -mx-5 md:-mx-10 px-5 md:px-10 overflow-x-auto scrollbar-hide"
            role="region"
            aria-label="Galeria de fotos da imersão"
          >
            <ul className="flex gap-4 md:gap-6 snap-x snap-mandatory pb-2">
              {GALLERY.map((item) => (
                <li
                  key={item.caption}
                  className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-[28vw] lg:w-[22vw]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-white/10 bg-navy-light">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 22vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent"
                    />
                    <span className="absolute bottom-4 left-4 right-4 label-caps text-sand">
                      {item.caption}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-10 border-t border-white/10">
          {INCLUDED.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex flex-col gap-3">
                  <Icon
                    className="h-8 w-8 text-signal"
                    aria-hidden
                    strokeWidth={1.5}
                  />
                  <span className="label-caps text-sand">{item.label}</span>
                  <p className="text-base text-white/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
