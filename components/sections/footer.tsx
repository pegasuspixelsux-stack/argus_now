import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-10 text-center sm:px-6">
      <p className="font-serif text-lg text-foreground">Argus</p>
      <p className="mt-2 text-xs text-foreground/50">
        Toda la información compartida es tratada con estricta confidencialidad.
        No publicamos tu búsqueda ni tus datos.
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} Argus. Todos los derechos reservados.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
