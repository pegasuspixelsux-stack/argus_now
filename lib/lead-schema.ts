import { z } from "zod";

export const operacionOptions = ["Comprar", "Invertir", "Alquilar temporada"] as const;

export const tipoActivoOptions = [
  "Casa en barrio cerrado",
  "Apartamento frente al mar",
  "Terreno",
  "Inmueble comercial",
] as const;

export const presupuestoOptions = [
  "Menos de $500k",
  "$500k - $1M",
  "Más de $1M (USD)",
] as const;

export const leadSchema = z.object({
  operacion: z.enum(operacionOptions),
  tipoActivo: z.enum(tipoActivoOptions),
  presupuesto: z.enum(presupuestoOptions),
  nombre: z.string().trim().min(2, "Ingresá tu nombre completo."),
  telefono: z.string().trim().min(6, "Ingresá un teléfono válido."),
  email: z.string().trim().email("Ingresá un correo electrónico válido."),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
