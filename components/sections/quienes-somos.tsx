import { WordsPullUp } from "@/components/ui/words-pull-up";

export function QuienesSomos() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-16">
        <div>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            <WordsPullUp text="Quiénes somos" />
          </h2>
          <p className="mt-5 text-foreground/70">
            Argus nació de la necesidad de ordenar un mercado saturado de
            información y bajo en discreción. Somos un equipo reducido de
            especialistas en el mercado de Punta del Este, dedicados a
            comprender el objetivo real de cada cliente — inversión, disfrute
            o ambos — antes de mostrar una sola propiedad.
          </p>
          <p className="mt-4 text-foreground/70">
            Trabajamos con compradores, inversores y propietarios que valoran
            la privacidad tanto como los resultados.
          </p>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-[linear-gradient(135deg,#1a1a1a,#0a0a0a)]" />
      </div>
    </section>
  );
}
