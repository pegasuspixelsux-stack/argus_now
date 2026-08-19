# Argus Now — Landing & Lead Generation Page

**Date:** 2026-08-19
**Status:** Approved

## 1. Purpose

Single-page, high-end real estate landing page for Punta del Este (Uruguay).
Goal: capture and prequalify high-end buyers/investors, and route them to
either a qualification form or WhatsApp — never to an open public catalog.
Content and copy are in Spanish (Uruguay locale). Traffic source is
Instagram/Meta ads, so mobile performance and fast load matter.

## 2. Tech stack

- Next.js (App Router, version already pinned in this repo: 16.3.1) — read
  `node_modules/next/dist/docs/` for any API that looks unfamiliar per this
  repo's `AGENTS.md` convention.
- TypeScript, Tailwind CSS v4 (already configured).
- shadcn/ui for form primitives and general UI (not yet initialized in this
  repo — must run `npx shadcn@latest init -d` first, `new-york` style,
  `components/ui` alias).
- `framer-motion` + `lucide-react` (new dependencies, required by the
  PrismaHero-derived hero and used consistently for section-entry motion).
- `react-hook-form` + `zod` (+ `@hookform/resolvers`) for the lead form,
  following shadcn's `Form` component pattern.
- Resend (Vercel Marketplace integration, category `messaging`) for actually
  delivering submitted leads by email. Provisioned via
  `vercel integration add resend` — real integration, not a mock.

## 3. Page structure (top to bottom)

All copy below is final (given verbatim by the user) — do not paraphrase it.

### Nav (floating pill, adapted from PrismaHero's nav)
- Brand: "Argus" wordmark (serif accent font).
- CTA button "Obtener Selección" → smooth-scrolls to `#contacto`.

### 1. Hero (adapted from PrismaHero)
- Headline: "No busques entre cientos de avisos. Encontrá el activo correcto."
- Subheadline: "En un mercado complejo como Punta del Este, la verdadera
  exclusividad no se publica en portales abiertos. En Argus gestionamos,
  filtramos y protegemos los mejores listados para conectarte únicamente con
  lo que vale la pena."
- Primary CTA: "Obtené tu selección personalizada" → smooth-scrolls to
  `#contacto`.
- Background: video slot with graceful fallback to a dark gradient/texture
  placeholder when no video source is configured (no real asset yet — ship
  swap-ready, not broken).

### 2. Vitrina de Autoridad (Curated Showcase)
- Subtitle: "Una muestra de nuestra curaduría actual."
- Description: "Protegemos la privacidad de nuestros propietarios y la
  exclusividad de nuestros clientes. Aquí solo ves una fracción de lo que
  gestionamos."
- Grid of exactly 5 listings, each with a placeholder image block (no real
  photos yet) and a profile badge:
  1. Residencia de Autor — La Barra (Perfil: Lifestyle / Estacional)
  2. Penthouse Frente al Mar — Playa Mansa (Perfil: Rentabilidad Turística)
  3. Lote Premium — José Ignacio (Perfil: Plusvalía / Inversión)
  4. Apartamento Boutique — Península (Perfil: Alta Demanda)
  5. Activo Exclusivo — Barrios Privados (Perfil: Reserva Confidencial)
- Transition text: "¿Buscas algo específico que no está en vitrina? No
  publicamos toda nuestra cartera por seguridad y discreción. Dinos qué
  necesitas y te enviamos el listado privado."

### 3. Por Qué Argus (value proposition, 3 columns)
- Headline: "El mercado de Punta del Este ordenado para vos."
- Points:
  - "Cero caos de precios: Evitamos la desinformación de los portales
    abiertos. Trabajamos con datos reales, directos y actualizados."
  - "Discreción absoluta: Ni compradores curiosos ni la competencia sabrán
    qué estás buscando o evaluando."
  - "Gestión, no catálogos: No te pedimos que busques solo. Entendemos tu
    objetivo de inversión o disfrute y hacemos el filtro por vos."

### 4. Formulario de Calificación — `id="contacto"`
- Headline: "Recibí tu listado curado a medida"
- Subheadline: "Completá este breve perfil y nuestro equipo preparará una
  selección privada de propiedades que coinciden exactamente con lo que
  buscás."
- Fields (all required, validated client + server side):
  1. Operación (radio group — only 3 options, reads better as visible
     choices than a collapsed select): Comprar / Invertir / Alquilar
     temporada
  2. Tipo de Activo (select): Casa en barrio cerrado / Apartamento frente al
     mar / Terreno / Inmueble comercial
  3. Presupuesto (select): Menos de $500k / $500k - $1M / Más de $1M (USD)
  4. Nombre, Teléfono / WhatsApp, Correo electrónico (inputs)
- Submit button: "Generar mi selección privada"
- On submit: calls a Server Action that sends the lead via Resend. Button
  shows a loading state, then either a success message ("¡Listo! Te
  contactaremos pronto.") replacing the form, or an inline error if the send
  fails (form stays filled, user can retry).

### 5. WhatsApp Alternate Route
- Headline: "¿Preferís hablar ahora con un asesor?"
- Subheadline: "Salteá el formulario y escribinos directamente por
  WhatsApp. Nuestro equipo te responde al instante para entender tu
  búsqueda."
- CTA "Abrir chat de WhatsApp" → `wa.me/<WHATSAPP_NUMBER>?text=<encoded
  prefilled message>`. Prefilled message: "Hola, equipo de Argus. Vi la web
  y quiero que me contacten para recibir opciones de inversión/propiedades
  en Punta del Este."
- `WHATSAPP_NUMBER` lives as a single named constant in `lib/constants.ts`,
  currently a placeholder (`+598 99 000 000`) clearly marked for swap before
  launch — no real number was provided.

### 6. Footer
- Copyright, a short discretion/privacy disclaimer, brand signature.

## 4. File structure

```
app/
  page.tsx              → composes all sections in order
  actions.ts             → "use server" submitLead() Server Action
components/
  ui/                     → shadcn primitives: button, input, select,
                            radio-group, label, form, card, badge
  sections/
    nav.tsx
    hero.tsx              → PrismaHero adapted (copy, palette, fallback bg)
    showcase.tsx
    value-props.tsx
    lead-form.tsx
    whatsapp-cta.tsx
    footer.tsx
lib/
  constants.ts            → WHATSAPP_NUMBER, prefilled message
  lead-schema.ts           → zod schema shared by client form + server action
```

`components/ui/prisma-hero.tsx` (as originally pasted) is not kept verbatim —
it's split up: nav becomes `components/sections/nav.tsx`, hero body becomes
`components/sections/hero.tsx`. The `WordsPullUp` / `WordsPullUpMultiStyle`
helpers move into `components/ui/` as small reusable primitives since other
section headlines reuse the same pull-up motion.

## 5. Visual direction

- Dark, minimal, whitespace-heavy. Base palette extends PrismaHero's:
  near-black background, warm off-white foreground (`#E1E0CC` family), one
  restrained accent color (no more than one).
- Typography: one serif display face (Fraunces) for the "Argus" wordmark and
  big section headlines only; body/UI text stays on Geist Sans (already
  configured in `app/layout.tsx`). Avoids a generic SaaS look.
- Motion: `framer-motion`, `WordsPullUp`-style entrance for headlines,
  consistent scroll-in transitions across sections — one motion language,
  not ad hoc per section. Apply `design-taste-frontend` / polish-skill
  scrutiny during build so it doesn't read as templated.
- Density: comfortable spacing (`gap-6`/`p-6`-scale), consistent radius.

## 6. Error handling

- Form: zod validation surfaces inline field errors before submit fires.
- Server Action: if Resend send fails, return a typed error result (not a
  thrown exception across the server/client boundary) so the client can show
  a friendly inline retry message without losing the user's input.
- Hero video: if no `src` configured, render the gradient fallback — never a
  broken/empty video element.

## 7. Out of scope (explicitly not building)

- No leads database or admin dashboard — Resend email notification only.
- No real hero video or showcase photography — placeholders only, swap-ready.
- No real WhatsApp number — placeholder constant only.
- No i18n/locale switching — Spanish only, hardcoded copy.
- No CMS — all copy is hardcoded from this spec.

## 8. Testing / verification

Manual verification via the `run` skill once built:
- Dev server boots, page renders at `/`.
- Responsive check at mobile and desktop widths.
- Smooth-scroll anchors (`Obtener Selección` nav CTA, hero CTA) land on
  `#contacto`.
- Form: validation errors on empty/invalid submit; success state on valid
  submit (with Resend env vars present); WhatsApp CTA opens `wa.me` link
  with correctly encoded prefilled text.
