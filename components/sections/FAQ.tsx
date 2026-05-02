import { SectionLabel } from "@/components/shared/SectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Reveal } from "@/components/shared/Reveal";

const QA = [
  {
    q: "Para quem é o Líder Magnético?",
    a: "Para líderes, gestores, especialistas e empreendedores entre 30 e 55 anos, com bagagem técnica e desejo de comunicar com mais clareza, presença e impacto. Se você lidera pessoas, vende com a própria voz ou entrega alto valor e ainda não virou referência pública, esta imersão foi pensada para você.",
  },
  {
    q: "O que está incluído na imersão?",
    a: "Acesso aos 2 dias completos do evento no Hotel Deville Cascavel, kit personalizado de boas-vindas, 2 coffees premium por dia, 2 almoços executivos, 1 coquetel de encerramento, captação audiovisual completa, certificado digital de participação e entrada no grupo exclusivo de participantes.",
  },
  {
    q: "Existe limite de vagas?",
    a: "Sim. A imersão tem 50 vagas e a confirmação de inscrição acontece por conversa direta com a equipe do Diego. O grupo pequeno garante atenção individualizada durante os 2 dias.",
  },
  {
    q: "Como funciona a inscrição?",
    a: "Você fala com a equipe pelo WhatsApp, entende as condições, esclarece dúvidas e decide com clareza. Não há checkout automático nem formulário robotizado. A relação começa antes do evento.",
  },
  {
    q: "Há hospedagem disponível no local?",
    a: "O Hotel Deville oferece hospedagem com tarifa preferencial para participantes. A equipe envia as condições no momento da inscrição.",
  },
  {
    q: "O conteúdo é gravado?",
    a: "Os 2 dias são presenciais e a captação audiovisual é feita pela equipe do Diego para registro do evento. Acesso a gravação parcial pode ser oferecido em condição específica, conversada caso a caso.",
  },
  {
    q: "Posso indicar alguém da minha equipe?",
    a: "Sim. A imersão recebe líderes individualmente ou em grupo da mesma empresa. Para inscrição corporativa, a equipe oferece condição diferenciada conforme o número de participantes.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Dúvidas frequentes"
      className="relative overflow-hidden py-24 md:py-32 bg-navy-light/20"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-10 flex flex-col gap-12">
        <Reveal>
          <div className="flex flex-col gap-5 text-center items-center">
            <SectionLabel>Dúvidas frequentes</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] text-balance">
              Antes de falar com a equipe, talvez ajude.
            </h2>
            <span className="signature-line" aria-hidden />
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {QA.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
