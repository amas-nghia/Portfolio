import { SiteHeader } from "@/components/layout/site-header";
import { PageMotion } from "@/components/motion/page-motion";
import { WorldJourney } from "@/components/world/world-journey";
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
        <WorldJourney />
      </main>
      <PageMotion />
    </>
  );
}
