"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadSchema,
  operacionOptions,
  tipoActivoOptions,
  presupuestoOptions,
  type LeadFormValues,
} from "@/lib/lead-schema";
import { submitLead } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// react-hook-form's DefaultValues type doesn't accept an empty string for a
// zod enum field, but leaving these fields unselected until the user picks
// is exactly the desired initial state — the cast is safe because zod
// validates on submit either way.
const emptyDefaults = {
  operacion: undefined,
  tipoActivo: undefined,
  presupuesto: undefined,
  nombre: "",
  telefono: "",
  email: "",
} as unknown as LeadFormValues;

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: emptyDefaults,
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus("submitting");
    setServerError(null);
    const result = await submitLead(values);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  }

  if (status === "success") {
    return (
      <section id="contacto" className="bg-background px-4 py-24 sm:px-6 md:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-3xl text-foreground">
            ¡Listo! Te contactaremos pronto.
          </h2>
          <p className="mt-4 text-foreground/70">
            Recibimos tu perfil. Nuestro equipo prepara tu selección privada y te
            contacta a la brevedad.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-background px-4 py-24 sm:px-6 md:px-10">
      <div className="mx-auto max-w-xl">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Recibí tu listado curado a medida
        </h2>
        <p className="mt-4 text-foreground/70">
          Completá este breve perfil y nuestro equipo preparará una selección
          privada de propiedades que coinciden exactamente con lo que buscás.
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Label>Operación</Label>
            <RadioGroup
              onValueChange={(value) =>
                form.setValue("operacion", value as LeadFormValues["operacion"], {
                  shouldValidate: true,
                })
              }
              className="flex flex-col gap-2 sm:flex-row sm:gap-6"
            >
              {operacionOptions.map((option, index) => (
                <div key={option} className="flex items-center gap-2">
                  <RadioGroupItem value={option} id={`operacion-${index}`} />
                  <Label htmlFor={`operacion-${index}`} className="font-normal text-foreground/80">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {form.formState.errors.operacion && (
              <p className="text-sm text-destructive">Seleccioná una opción.</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="tipoActivo">Tipo de Activo</Label>
            <Select
              onValueChange={(value) =>
                form.setValue("tipoActivo", value as LeadFormValues["tipoActivo"], {
                  shouldValidate: true,
                })
              }
            >
              <SelectTrigger id="tipoActivo" className="w-full">
                <SelectValue placeholder="Elegí un tipo de activo" />
              </SelectTrigger>
              <SelectContent>
                {tipoActivoOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.tipoActivo && (
              <p className="text-sm text-destructive">Seleccioná un tipo de activo.</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="presupuesto">Presupuesto</Label>
            <Select
              onValueChange={(value) =>
                form.setValue("presupuesto", value as LeadFormValues["presupuesto"], {
                  shouldValidate: true,
                })
              }
            >
              <SelectTrigger id="presupuesto" className="w-full">
                <SelectValue placeholder="Elegí un rango" />
              </SelectTrigger>
              <SelectContent>
                {presupuestoOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.presupuesto && (
              <p className="text-sm text-destructive">Seleccioná un rango de presupuesto.</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" {...form.register("nombre")} placeholder="Tu nombre completo" />
            {form.formState.errors.nombre && (
              <p className="text-sm text-destructive">{form.formState.errors.nombre.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
            <Input id="telefono" {...form.register("telefono")} placeholder="+598 99 000 000" />
            {form.formState.errors.telefono && (
              <p className="text-sm text-destructive">{form.formState.errors.telefono.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" {...form.register("email")} placeholder="tu@correo.com" />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>

          {status === "error" && serverError && (
            <p className="text-sm text-destructive">{serverError}</p>
          )}

          <Button type="submit" disabled={status === "submitting"} className="w-full">
            {status === "submitting" ? "Enviando..." : "Generar mi selección privada"}
          </Button>
        </form>
      </div>
    </section>
  );
}
