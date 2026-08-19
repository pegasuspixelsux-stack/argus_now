export function Nav() {
  return (
    <nav className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-b-2xl border-x border-b border-border bg-background/90 px-5 py-2.5 backdrop-blur sm:gap-8 md:rounded-b-3xl md:px-8">
        <span className="font-serif text-lg tracking-tight text-foreground sm:text-xl">
          Argus
        </span>
        <a
          href="#contacto"
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105 sm:text-sm"
        >
          Obtener Selección
        </a>
      </div>
    </nav>
  );
}
