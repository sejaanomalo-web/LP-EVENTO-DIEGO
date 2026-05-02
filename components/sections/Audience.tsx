import { UserCog, Users, Briefcase, Award } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

const PROFILES = [
  {
    icon: UserCog,
    title: "Diretores e C-level",
    text: "Que precisam comunicar visão para o board e para o time.",
  },
  {
    icon: Users,
    title: "Gerentes",
    text: "Que querem destravar a fala em reuniões importantes e apresentações.",
  },
  {
    icon: Briefcase,
    title: "Empreendedores",
    text: "Que vendem com a própria voz e querem escalar a presença.",
  },
  {
    icon: Award,
    title: "Especialistas",
    text: "Que entregam alto valor e ainda não viraram referência pública.",
  },
];

export function Audience() {
  return (
    <section
      id="audience"
      aria-label="Pra quem é"
      className="relative overflow-hidden py-24 md:py-32 bg-navy-light/20"
    >
      <div className="mx-auto max-w-screen-xl px-5 md:px-10 flex flex-col gap-14">
        <Reveal>
          <div className="flex flex-col gap-5 max-w-3xl">
            <SectionLabel>Pra quem é</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] text-balance">
              Para líderes que carregam{" "}
              <em className="not-italic text-sand">profundidade</em> e ainda não
              traduziram em presença.
            </h2>
            <span className="signature-line" aria-hidden />
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              Esta imersão foi desenhada para quem ocupa cargo de liderança,
              gerencia equipes ou conduz negócio próprio, e percebeu que o
              próximo nível depende menos de mais conhecimento e mais de saber
              comunicar o que já sabe.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PROFILES.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <Icon
                      className="h-8 w-8 text-signal"
                      aria-hidden
                      strokeWidth={1.5}
                    />
                    <CardTitle className="text-base md:text-lg tracking-[0.18em] mt-2">
                      {p.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">{p.text}</CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
