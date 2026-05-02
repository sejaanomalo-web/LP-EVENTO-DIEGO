import { Compass, MessageSquare, Mic, Users, Target } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
  {
    icon: Compass,
    title: "Mapear",
    text: "Mapear sua presença atual e identificar onde a comunicação trava o resultado.",
  },
  {
    icon: MessageSquare,
    title: "Construir",
    text: "Construir uma mensagem central que sustenta autoridade em qualquer canal.",
  },
  {
    icon: Mic,
    title: "Treinar",
    text: "Treinar voz, postura e ritmo para falar com firmeza no palco e na câmera.",
  },
  {
    icon: Users,
    title: "Conectar",
    text: "Conectar com líderes que estão no seu nível ou acima do seu.",
  },
  {
    icon: Target,
    title: "Sair com plano",
    text: "Sair com plano claro de comunicação para os próximos 90 dias.",
  },
];

export function WhatHappens() {
  return (
    <section
      id="what-happens"
      aria-label="O que vai acontecer"
      className="relative overflow-hidden py-24 md:py-32 bg-navy-light/20"
    >
      <div className="mx-auto max-w-screen-xl px-5 md:px-10 flex flex-col gap-14">
        <Reveal>
          <div className="flex flex-col gap-5 max-w-3xl">
            <SectionLabel>O que você vai viver nesses 2 dias de imersão</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] text-balance">
              Durante o Líder Magnético,{" "}
              <em className="not-italic text-sand">você vai</em>:
            </h2>
            <span className="signature-line" aria-hidden />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            // 5 cards on a 6-col grid: top row spans cols 1-6 (3 cards x 2 cols),
            // bottom row centers (cards starting at col 2 and col 4, spanning 2).
            const placement =
              i < 3
                ? "lg:col-span-2"
                : i === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2";
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className={placement}
              >
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-signal" aria-hidden strokeWidth={1.5} />
                    <CardTitle className="text-base md:text-lg tracking-[0.18em] mt-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">{item.text}</CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
