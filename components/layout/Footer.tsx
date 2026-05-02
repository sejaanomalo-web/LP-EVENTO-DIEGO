import { EVENT } from "@/lib/constants";
import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-signal/40 bg-navy">
      <div className="mx-auto max-w-screen-xl px-5 md:px-10 py-12 md:py-16 grid gap-10 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 32 32"
              className="h-8 w-8 text-sand"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M16 3 L29 16 L16 29 L3 16 Z" />
              <path d="M16 9 L23 16 L16 23 L9 16 Z" />
            </svg>
            <span className="text-lg font-bold tracking-wider uppercase text-white">
              Diego Knebel
            </span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Comunicação, liderança e desenvolvimento humano. Mentoria e
            palestras para líderes que querem se fazer ouvir como deveriam.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="label-caps text-sand">Onde acontece</span>
          <p className="text-sm text-white/80">
            {EVENT.venue}
            <br />
            {EVENT.city}
          </p>
          <p className="text-sm text-white/80">{EVENT.dateLong}</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="https://instagram.com/diegoknebel_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-sand transition-colors"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {EVENT.instagram}
          </a>
          <span className="label-caps text-white/40">Cascavel/PR</span>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/40">
          <span>
            © {year} Diego Knebel. Todos os direitos reservados.
          </span>
          <span>CNPJ: 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}
