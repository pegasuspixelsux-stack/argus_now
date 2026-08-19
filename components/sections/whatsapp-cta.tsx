import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

export function WhatsappCta() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border bg-card p-10 text-center sm:p-14">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          ¿Preferís hablar ahora con un asesor?
        </h2>
        <p className="max-w-xl text-foreground/70">
          Salteá el formulario y escribinos directamente por WhatsApp. Nuestro
          equipo te responde al instante para entender tu búsqueda.
        </p>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          Abrir chat de WhatsApp
        </a>
      </div>
    </section>
  );
}
