const DEFAULT_MESSAGE =
  "Olá, tenho interesse no Líder Magnético. Quero entender as condições de inscrição.";

export function getWhatsAppLink(message?: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const text =
    message ?? process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? DEFAULT_MESSAGE;
  if (!number) return "#";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function trackLead() {
  if (typeof window === "undefined") return;
  const w = window as unknown as { fbq?: (...args: unknown[]) => void; gtag?: (...args: unknown[]) => void };
  if (typeof w.fbq === "function") {
    w.fbq("track", "Lead");
  }
  if (typeof w.gtag === "function") {
    w.gtag("event", "contact_whatsapp", { method: "whatsapp" });
  }
}
