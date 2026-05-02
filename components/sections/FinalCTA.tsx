import { TicketCTA } from "@/components/shared/TicketCTA";
import { DiamondBackground } from "@/components/shared/DiamondBackground";
import { Reveal } from "@/components/shared/Reveal";
import { EVENT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-label="Faça parte"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-screen-xl px-5 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-md border border-signal/40 bg-navy-light px-6 md:px-16 py-16 md:py-24 flex flex-col items-center text-center gap-8">
            <DiamondBackground opacity={0.07} />

            <div className="relative flex flex-col items-center gap-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-signal/60 bg-navy/40 px-4 py-1.5 label-caps text-signal">
                <span aria-hidden>✱</span> Atenção
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1] text-balance max-w-3xl">
                Vagas <em className="not-italic text-sand">limitadas</em> a{" "}
                {EVENT.seats} líderes.
              </h2>

              <span className="signature-line" aria-hidden />

              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl text-pretty">
                A confirmação de inscrição acontece por conversa direta com a
                equipe do Diego. Sem checkout automático, sem formulário
                robotizado. Você fala com alguém, entende as condições, decide
                com clareza.
              </p>

              <TicketCTA
                label="Falar com a equipe no WhatsApp"
                size="lg"
                className="items-center"
              />

              <span className="label-caps text-sand/80">
                / {EVENT.seats} vagas · 2 dias · Cascavel/PR · {EVENT.dateShort}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
