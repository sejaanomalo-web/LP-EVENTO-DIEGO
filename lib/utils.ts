import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappHref() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Olá, tenho interesse no Líder Magnético. Quero entender as condições de inscrição.";
  if (!number) return "#";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
