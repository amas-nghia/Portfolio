import { SiteHeader } from "@/components/layout/site-header";
import { PageMotion } from "@/components/motion/page-motion";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { WorkSection } from "@/components/sections/work-section";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${siteConfig.name} — ${siteConfig.role}`,
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      url: siteUrl,
      knowsAbout: siteConfig.about.skills,
      sameAs: siteConfig.social.map((item) => item.href),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <WorkSection />
        <ProcessSection />
        <AboutSection />
      </main>
      <ContactSection />
      <PageMotion />
    </>
  );
}
