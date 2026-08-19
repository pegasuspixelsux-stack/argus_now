export const WHATSAPP_NUMBER = "59899000000"; // TODO: replace with the real Argus WhatsApp number (digits only, country code first) before launch.

export const WHATSAPP_PREFILLED_MESSAGE =
  "Hola, equipo de Argus. Vi la web y quiero que me contacten para recibir opciones de inversión/propiedades en Punta del Este.";

export function buildWhatsAppLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILLED_MESSAGE)}`;
}

// TODO: replace with the real inbox that should receive lead notifications before launch.
export const LEAD_NOTIFICATION_EMAIL = "leads@argusnow.example";

// Resend's shared test sender — works without domain verification.
// TODO: replace with a verified sending domain before launch.
export const LEAD_NOTIFICATION_FROM = "Argus Now <onboarding@resend.dev>";
