import { WordsPullUp } from "@/components/ui/words-pull-up";

const points = [
  {
    title: "Cero caos de precios",
    body: "Evitamos la desinformación de los portales abiertos. Trabajamos con datos reales, directos y actualizados.",
  },
  {
    title: "Discreción absoluta",
    body: "Ni compradores curiosos ni la competencia sabrán qué estás buscando o evaluando.",
  },
  {
    title: "Gestión, no catálogos",
    body: "No te pedimos que busques solo. Entendemos tu objetivo de inversión o disfrute y hacemos el filtro por vos.",
  },
] as const;

export function ValueProps() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          <WordsPullUp text="El mercado de Punta del Este ordenado para vos." />
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-t border-border pt-6">
              <h3 className="font-serif text-lg text-foreground">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
