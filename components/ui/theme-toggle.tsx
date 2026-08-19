"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes can resolve the theme synchronously on the client's first
  // render pass (no system-preference check needed since enableSystem is
  // false), which would otherwise mismatch the server's render before this
  // effect ever runs. Gating on a mounted flag — set once, after mount, on
  // purpose — is next-themes' own documented workaround for this exact
  // hydration mismatch, not a general-purpose derived-state effect.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) {
    return <span className="inline-block h-8 w-8" aria-hidden="true" />;
  }

  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:text-foreground"
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
