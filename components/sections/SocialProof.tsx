import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

const TESTIMONIALS = [
  {
    name: "Nome do depoente",
    role: "Diretor comercial",
    company: "Cooperativa parceira",
    text:
      "Saí da imersão com clareza de mensagem que me fez mudar a forma como apresento qualquer projeto. O time percebeu na semana seguinte.",
    initials: "ND",
  },
  {
    name: "Nome do depoente",
    role: "Fundadora",
    company: "Empresa parceira",
    text:
      "O Diego conduz com firmeza e respeito. Em dois dias entendi onde minha comunicação travava o crescimento e como destravar.",
    initials: "ND",
  },
  {
    name: "Nome do depoente",
    role: "Gerente regional",
    company: "Cooperativa parceira",
    text:
      "Método de palco testado, fundamento técnico sólido, conexão real entre os participantes. A entrega vai muito além do que estava no programa.",
    initials: "ND",
  },
];

const STAGE_GALLERY = [
  "/assets/event/stage-1.jpg",
  "/assets/event/stage-2.jpg",
  "/assets/event/stage-3.jpg",
  "/assets/event/stage-4.jpg",
  "/assets/event/stage-5.jpg",
];

const LOGOS = [
  "Cooperativa A",
  "Cooperativa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Cooperativa F",
];

export function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-label="Prova social"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-screen-xl px-5 md:px-10 flex flex-col gap-16">
        <Reveal>
          <div className="flex flex-col gap-5 max-w-3xl">
            <SectionLabel>Quem já andou com o Diego</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] text-balance">
              Líderes que destravaram a comunicação e mudaram a entrega.
            </h2>
            <span className="signature-line" aria-hidden />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Card className="h-full flex flex-col gap-5">
                <Quote
                  className="h-7 w-7 text-signal"
                  aria-hidden
                  strokeWidth={1.5}
                />
                <p className="text-base md:text-lg text-white/85 leading-relaxed flex-1">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand/30 bg-navy-light text-sand text-xs font-bold">
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">
                      {t.name}
                    </span>
                    <span className="label-caps text-sand/80 text-[10px]">
                      {t.role} · {t.company}
                    </span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="relative -mx-5 md:-mx-10 px-5 md:px-10 overflow-x-auto scrollbar-hide"
            role="region"
            aria-label="Galeria de fotos de palco"
          >
            <ul className="flex gap-4 md:gap-6 snap-x snap-mandatory pb-2">
              {STAGE_GALLERY.map((src, i) => (
                <li
                  key={i}
                  className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-[28vw] lg:w-[24vw]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-white/10 bg-navy-light">
                    <Image
                      src={src}
                      alt={`Diego Knebel no palco ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 24vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6 pt-6 border-t border-white/10">
          <span className="label-caps text-sand text-center">
            Empresas e cooperativas atendidas
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-60">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-base md:text-lg font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-sand"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
