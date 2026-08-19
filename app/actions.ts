"use server";

import { Resend } from "resend";
import { leadSchema, type LeadFormValues } from "@/lib/lead-schema";
import { LEAD_NOTIFICATION_EMAIL, LEAD_NOTIFICATION_FROM } from "@/lib/constants";

export type SubmitLeadResult = { success: true } | { success: false; error: string };

const GENERIC_ERROR = "No pudimos enviar tu selección. Intentá de nuevo en unos minutos.";

export async function submitLead(values: LeadFormValues): Promise<SubmitLeadResult> {
  const parsed = leadSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Revisá los datos del formulario e intentá de nuevo." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("submitLead: RESEND_API_KEY is not set.");
    return { success: false, error: GENERIC_ERROR };
  }

  const resend = new Resend(apiKey);
  const { operacion, tipoActivo, presupuesto, nombre, telefono, email } = parsed.data;

  const { error } = await resend.emails.send({
    from: LEAD_NOTIFICATION_FROM,
    to: LEAD_NOTIFICATION_EMAIL,
    replyTo: email,
    subject: `Nuevo lead Argus: ${nombre}`,
    text: [
      `Operación: ${operacion}`,
      `Tipo de activo: ${tipoActivo}`,
      `Presupuesto: ${presupuesto}`,
      `Nombre: ${nombre}`,
      `Teléfono / WhatsApp: ${telefono}`,
      `Correo: ${email}`,
    ].join("\n"),
  });

  if (error) {
    console.error("submitLead: Resend error", error);
    return { success: false, error: GENERIC_ERROR };
  }

  return { success: true };
}
