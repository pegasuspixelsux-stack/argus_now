import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { Showcase } from "@/components/sections/showcase";
import { QuienesSomos } from "@/components/sections/quienes-somos";
import { ValueProps } from "@/components/sections/value-props";
import { LeadForm } from "@/components/sections/lead-form";
import { WhatsappCta } from "@/components/sections/whatsapp-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <BrandIntro />
        <Showcase />
        <QuienesSomos />
        <ValueProps />
        <LeadForm />
        <WhatsappCta />
        <Footer />
      </main>
    </>
  );
}
