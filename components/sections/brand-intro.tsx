import { WordsPullUp } from "@/components/ui/words-pull-up";

export function BrandIntro() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          <WordsPullUp text="No somos una inmobiliaria más." />
        </h2>
        <p className="text-foreground/70 sm:pt-2">
          Argus es un estudio boutique de bienes raíces en Punta del Este.
          Trabajamos por relación, no por volumen: cada cliente recibe atención
          directa de nuestro equipo, sin intermediarios ni carteras genéricas.
        </p>
      </div>
    </section>
  );
}
