import { SectionLabel } from "@/components/shared/SectionLabel";
import { DiamondBackground } from "@/components/shared/DiamondBackground";
import { Reveal } from "@/components/shared/Reveal";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-label="Manifesto"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <DiamondBackground opacity={0.04} />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 px-5 md:px-10 text-center">
        <Reveal>
          <SectionLabel>Manifesto</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.1] text-balance text-white">
            Você não precisa falar mais alto. Precisa falar com mais{" "}
            <span className="text-signal">método</span>.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <span className="signature-line" aria-hidden />
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-lg md:text-xl font-light italic text-sand/90 leading-relaxed text-pretty max-w-xl">
            Profundidade que se ouve, presença que se sente, autoridade que se
            sustenta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
