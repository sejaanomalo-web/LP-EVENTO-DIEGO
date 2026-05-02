import Image from "next/image";
import { MapPin, Car, Users, Clock } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Reveal } from "@/components/shared/Reveal";
import { EVENT } from "@/lib/constants";

const FACTS = [
  { icon: Car, label: "Estacionamento incluso" },
  { icon: Users, label: `${EVENT.seats} vagas` },
  { icon: Clock, label: "2 dias completos" },
];

export function Venue() {
  return (
    <section
      id="venue"
      aria-label="Onde acontece"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16 items-center">
        <Reveal>
          <div className="flex flex-col gap-7">
            <SectionLabel>Onde acontece</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] text-balance">
              Hotel Deville
              <br />
              <span className="text-signal">·</span> Cascavel/PR
            </h2>
            <span className="signature-line" aria-hidden />

            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-xl">
              Estrutura completa com estacionamento exclusivo incluso, sala
              configurada para imersão de pequeno grupo, ambientes para
              networking e refeições, e localização estratégica no centro da
              cidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {FACTS.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-navy-light/40 px-4 py-3"
                  >
                    <Icon className="h-4 w-4 text-signal shrink-0" aria-hidden />
                    <span className="label-caps text-white/80 text-[10px] leading-tight">
                      {f.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <span className="label-caps text-sand inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden /> Datas
              </span>
              <span className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                {EVENT.dateLong}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-white/10 bg-navy-light">
            <Image
              src="/assets/venue/hotel.jpg"
              alt="Hotel Deville Cascavel"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="label-caps text-sand">{EVENT.venue}</span>
              <span className="signature-line" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
