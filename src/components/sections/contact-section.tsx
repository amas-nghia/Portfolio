import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <footer id="contact" className="contact-section relative scroll-mt-20 overflow-hidden text-cream">
      <Image
        src={contact.background}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        className="object-cover object-center"
      />
      <div className="contact-overlay absolute inset-0" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[600px] flex-col justify-between py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cream/70">{contact.eyebrow}</p>
          <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl">
            {contact.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream/72 sm:text-lg">{contact.description}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="night">
              <a href={contact.primaryAction.href} target="_blank" rel="noreferrer">
                {contact.primaryAction.label}
                <ArrowUpRight weight="bold" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-cream hover:bg-cream/10 hover:text-cream">
              <a href={contact.secondaryAction.href} target="_blank" rel="noreferrer">
                {contact.secondaryAction.label}
                <ArrowUpRight weight="bold" />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-8 border-t border-cream/20 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <Logo inverted />
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cream/65">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-cream">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
