import Image from "next/image";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Reveal } from "@/components/shared/Reveal";

const STATS = [
  { value: "+500", label: "Palestras realizadas" },
  { value: "+200", label: "Mentorados" },
  { value: "+80", label: "Cooperativas e empresas atendidas" },
];

export function About() {
  return (
    <section
      id="about"
      aria-label="Sobre Diego Knebel"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-white/10 bg-navy-light">
            <Image
              src="/assets/diego/portrait-about.jpg"
              alt="Retrato editorial de Diego Knebel"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-7">
            <SectionLabel>Sobre</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] text-balance">
              O mentor que conduz líderes a transformarem o que sabem em
              palavra que <span className="text-signal">move</span>.
            </h2>
            <span className="signature-line" aria-hidden />

            <div className="flex flex-col gap-5 text-base md:text-lg text-white/75 leading-relaxed">
              <p>
                Diego Knebel é especialista em comunicação, liderança e
                desenvolvimento humano. Há mais de uma década conduz líderes,
                especialistas e empreendedores a destravarem a comunicação e
                ocuparem o lugar de autoridade que já constroem na prática.
              </p>
              <p>
                Sua abordagem une fundamento técnico (neurociência aplicada,
                sistema nervoso, comunicação não verbal) com método de palco
                testado em centenas de palestras corporativas. Não é fórmula de
                coach. É processo de quem caminha ao lado.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-signal/30">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5 pt-4">
                  <span className="text-2xl md:text-3xl font-black text-signal">
                    {s.value}
                  </span>
                  <span className="label-caps text-white/60 text-[10px] leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
