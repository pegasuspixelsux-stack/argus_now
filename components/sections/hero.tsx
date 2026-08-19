"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { WordsPullUp } from "@/components/ui/words-pull-up";

// TODO: set a hosted video URL to switch the background to video (e.g. the
// same CDN pattern used by the original PrismaHero reference component).
// Takes priority over HERO_IMAGE_SRC when set.
const HERO_VIDEO_SRC = "";

const HERO_IMAGE_SRC = "/images/hero/apartamento-playa-brava.jpg";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {HERO_VIDEO_SRC ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
        />
      ) : HERO_IMAGE_SRC ? (
        <Image
          src={HERO_IMAGE_SRC}
          alt="Apartamento frente a la Playa Brava, Punta del Este"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1a1a1a,transparent_60%),linear-gradient(to_bottom,#0a0a0a,#050505)]" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* This overlay content sits on a fixed dark photo + black gradient
          (not the page's own background), so its text stays a fixed cream
          tone rather than following text-foreground — the light theme
          flips that token to near-black, which would be unreadable here. */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-10 sm:px-6 md:px-10 md:pb-16">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-[#e1e0cc] text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.6vw]">
              <WordsPullUp text="No busques entre cientos de avisos. Encontrá el activo correcto." />
            </h1>
          </div>

          <div className="col-span-12 flex flex-col gap-5 pb-2 lg:col-span-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-[#e1e0cc]/70 sm:text-base"
              style={{ lineHeight: 1.4 }}
            >
              En un mercado complejo como Punta del Este, la verdadera exclusividad no
              se publica en portales abiertos. En Argus gestionamos, filtramos y
              protegemos los mejores listados para conectarte únicamente con lo que
              vale la pena.
            </motion.p>

            <motion.a
              href="#contacto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-primary-foreground transition-all hover:gap-3"
            >
              Obtené tu selección personalizada
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background transition-transform group-hover:scale-110">
                <ArrowRight className="h-4 w-4 text-foreground" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
