import { ArrowRight, ArrowUpRight, MouseSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { JourneyChapter } from "./journey-chapter";
import { WorldCanvas } from "./world-canvas";
import { WorldMotion } from "./world-motion";

const steps = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function WorldJourney() {
  const { hero, projects, process, about, contact, world } = siteConfig;

  return (
    <section id="top" className="world-scroll" data-world-scroll>
      <span id="work" className="world-anchor world-anchor-work" />
      <span id="process" className="world-anchor world-anchor-process" />
      <span id="about" className="world-anchor world-anchor-about" />
      <span id="contact" className="world-anchor world-anchor-contact" />

      <div className="world-stage">
        <div className="world-visuals" aria-hidden="true">
          <Image
            src={world.background}
            alt=""
            fill
            priority
            quality={88}
            sizes="100vw"
            className="world-layer world-layer-far"
            data-world-layer="far"
          />
          <Image
            src={world.midground}
            alt=""
            fill
            priority
            quality={88}
            sizes="100vw"
            className="world-layer world-layer-middle"
            data-world-layer="middle"
          />
          <WorldCanvas
            characterModel={world.characterModel}
            groundModel={world.groundModel}
          />
          <Image
            src={world.foreground}
            alt=""
            fill
            priority
            quality={88}
            sizes="100vw"
            className="world-layer world-layer-foreground"
            data-world-layer="foreground"
          />
        </div>

        <div className="world-chapters">
          <JourneyChapter
            index={0}
            label="Introduction"
            className="world-chapter-intro"
          >
            <Container className="world-chapter-inner">
              <div className="world-copy world-copy-intro">
                <p className="world-eyebrow">{hero.eyebrow}</p>
                <h1>{hero.title}</h1>
                <p className="world-lede">{hero.description}</p>
                <div className="world-actions">
                  <Button asChild size="lg" data-magnetic>
                    <a href={hero.primaryAction.href}>
                      {hero.primaryAction.label}
                      <ArrowRight weight="bold" />
                    </a>
                  </Button>
                  <a className="world-scroll-hint" href="#work">
                    <MouseSimple weight="bold" />
                    {world.interactionHint}
                  </a>
                </div>
              </div>
            </Container>
          </JourneyChapter>

          <JourneyChapter index={1} label="Selected work" className="world-chapter-work">
            <Container className="world-chapter-inner world-chapter-inner-right">
              <div className="world-paper-panel world-project-panel">
                <p className="world-eyebrow">Selected playgrounds</p>
                <h2>Small ideas, playable early.</h2>
                <div className="world-project-list">
                  {projects.map((project, index) => (
                    <a
                      key={project.title}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="world-project-row"
                    >
                      <span className="world-project-index">0{index + 1}</span>
                      <Image
                        src={project.image}
                        alt=""
                        width={132}
                        height={84}
                        sizes="132px"
                      />
                      <span>
                        <strong>{project.title}</strong>
                        <small>{project.type}</small>
                      </span>
                      <ArrowUpRight weight="bold" />
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </JourneyChapter>

          <JourneyChapter index={2} label="Process" className="world-chapter-process">
            <Container className="world-chapter-inner world-chapter-inner-right">
              <div className="world-paper-panel world-process-panel">
                <p className="world-eyebrow">{process.eyebrow}</p>
                <h2>{process.title}</h2>
                <p>{process.description}</p>
                <ol>
                  {process.steps.map((step, index) => (
                    <li key={step.label}>
                      <span>0{index + 1}</span>
                      <strong>{step.label}</strong>
                      <small>{step.detail}</small>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </JourneyChapter>

          <JourneyChapter index={3} label="About" className="world-chapter-about">
            <Container className="world-chapter-inner world-chapter-inner-right">
              <div className="world-paper-panel world-about-panel">
                <p className="world-eyebrow">{about.eyebrow}</p>
                <h2>{about.title}</h2>
                <p>{about.paragraphs[0]}</p>
                <div className="world-skills" aria-label="Core skills">
                  {about.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </Container>
          </JourneyChapter>

          <JourneyChapter index={4} label="Contact" className="world-chapter-contact">
            <Container className="world-chapter-inner world-chapter-inner-center">
              <div className="world-paper-panel world-contact-panel">
                <p className="world-eyebrow">{contact.eyebrow}</p>
                <h2>{contact.title}</h2>
                <p>{contact.description}</p>
                <div className="world-actions">
                  <Button asChild size="lg">
                    <a href={contact.primaryAction.href} target="_blank" rel="noreferrer">
                      {contact.primaryAction.label}
                      <ArrowUpRight weight="bold" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={contact.secondaryAction.href} target="_blank" rel="noreferrer">
                      {contact.secondaryAction.label}
                      <ArrowUpRight weight="bold" />
                    </a>
                  </Button>
                </div>
              </div>
            </Container>
          </JourneyChapter>
        </div>

        <nav className="world-progress" aria-label="Portfolio journey">
          <span className="world-progress-track">
            <span className="world-progress-fill" data-world-progress-fill />
          </span>
          <ol>
            {steps.map((step, index) => (
              <li key={step.label}>
                <a href={step.href} data-world-step={index}>
                  <span aria-hidden="true" />
                  {step.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <WorldMotion />
    </section>
  );
}
