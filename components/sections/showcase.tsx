import { WordsPullUp } from "@/components/ui/words-pull-up";
import { Badge } from "@/components/ui/badge";

const listings = [
  { name: "Residencia de Autor", location: "La Barra", profile: "Lifestyle / Estacional" },
  {
    name: "Penthouse Frente al Mar",
    location: "Playa Mansa",
    profile: "Rentabilidad Turística",
  },
  { name: "Lote Premium", location: "José Ignacio", profile: "Plusvalía / Inversión" },
  { name: "Apartamento Boutique", location: "Península", profile: "Alta Demanda" },
  { name: "Activo Exclusivo", location: "Barrios Privados", profile: "Reserva Confidencial" },
] as const;

export function Showcase() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Vitrina de Autoridad
        </p>
        <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
          <WordsPullUp text="Una muestra de nuestra curaduría actual." />
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Protegemos la privacidad de nuestros propietarios y la exclusividad de
          nuestros clientes. Aquí solo ves una fracción de lo que gestionamos.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <div
              key={listing.name}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,#1a1a1a,#0a0a0a)]" />
              <div className="flex flex-col gap-2 p-5">
                <Badge variant="secondary" className="w-fit text-xs font-normal text-muted-foreground">
                  {listing.profile}
                </Badge>
                <h3 className="font-serif text-lg text-foreground">{listing.name}</h3>
                <p className="text-sm text-muted-foreground">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-foreground/70">
          ¿Buscas algo específico que no está en vitrina? No publicamos toda nuestra
          cartera por seguridad y discreción. Dinos qué necesitas y te enviamos el
          listado privado.
        </p>
      </div>
    </section>
  );
}
