import React from "react";
import Section from "@/components/Section";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const Flower: React.FC = () => (
  <img
    src="/lovable-uploads/f3207866-7579-4f93-8aa3-f7c171d3881a.png"
    alt="Elderflower blossom with butterfly representing Elderflower metaphor"
    className="w-full h-[360px] md:h-[440px] object-cover rounded-xl border border-border shadow-sm"
    loading="lazy"
    decoding="async"
    sizes="100vw"
  />
);

const Metaphor: React.FC = () => {
  React.useEffect(() => { document.title = "Elderflower — Metaphor"; }, []);
  return (
    <div>
      <Header />
      <Section className="pt-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold">The Elderflower Metaphor</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">Roots as history; stem as needs and inner flourishing; petals as radical humanity; center/berry as future seeds—positive‑sum progress.</p>
      <section aria-labelledby="symbolism" className="mt-10">
        <h2 id="symbolism" className="text-2xl md:text-3xl font-semibold">Symbolism of Elderflower</h2>
        <p className="mt-1 text-muted-foreground">This is our soul &amp; meaning</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md min-h-[280px]">
            <h3 className="font-semibold">Healing</h3>
            <p className="text-sm text-muted-foreground mt-1">For centuries, elderflower has been a trusted ally in human care. Its blossoms and berries have been brewed into tonics, steeped into calming teas, and infused into balms for cleansing, soothing, and restoring strength. Villages planted elder trees near their homes for protection; travelers carried sprigs as charms against harm. It is more than a plant — it is hope infrastructure: a living reminder that protection against despair requires both tools and traditions, and that renewal is a practice as much as a moment.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md min-h-[280px]">
            <h3 className="font-semibold">Wonder / Mystery</h3>
            <p className="text-sm text-muted-foreground mt-1">In myth and folklore, the elder tree is a threshold being: a guardian of portals between worlds, a keeper of forgotten wisdom, a sentinel at the veil between the seen and unseen. It calls for curiosity and respect, hinting that reality is layered and that the richest truths often live just beyond the obvious.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md min-h-[280px]">
            <h3 className="font-semibold">Transformation</h3>
            <p className="text-sm text-muted-foreground mt-1">Elderflower’s strength lies in its contrasts. Its blooms are fragile yet anchored by deep, enduring roots — softness that survives storms. It offers medicine and nourishment, but can be toxic if taken without care — a reminder that healing requires wisdom, and that what nourishes in the right dose can harm in excess. In this way, it stands as both a relic of ancient knowledge and a guide for moving wisely into what comes next.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="parts" className="mt-10">
        <h2 id="parts" className="text-2xl md:text-3xl font-semibold">Parts of the Plant</h2>
        <p className="mt-1 text-muted-foreground">This is our structure and body.</p>
        <div className="mt-6">
          <Flower />
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-semibold">Roots &amp; Stems</h3>
            <p className="text-sm text-muted-foreground mt-1">Stability, resilience, and connection. Core values, identity, and the systems that carry life from foundation to fruit. Grounded in science, philosophy, art, and nature.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-semibold">Leaves</h3>
            <p className="text-sm text-muted-foreground mt-1">Protection and function. Boundaries, safeguards, and the unseen work that keeps growth healthy.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-semibold">Flowers</h3>
            <p className="text-sm text-muted-foreground mt-1">Beauty, curiosity, and hope. Brief but catalytic moments — our media, gatherings, and cultural works. Blooming epiphanies.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-semibold">Berries &amp; Seeds</h3>
            <p className="text-sm text-muted-foreground mt-1">Tangible nourishment with future potential inside. Products, tools, and artifacts (Berry is the first), each carrying seeds of what’s next.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="embodiments" className="mt-10">
        <h2 id="embodiments" className="text-2xl md:text-3xl font-semibold">Embodiments</h2>
        <p className="mt-1 text-muted-foreground">These are our personalities and actions</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-semibold">The Healer</h3>
            <p className="text-sm text-muted-foreground mt-1">Medicine, renewal → Self-Security &amp; Flourishing. Flower and berry nourish when used with care, offering tools that strengthen the inner life without fluff. Embodying restoration without excess, the Healer carries wisdom in timing and restraint, knowing renewal is as much about what is withheld as what is given — sustaining vitality while honoring the natural pace of flourishing.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="font-semibold">The Threshold Guardian</h3>
            <p className="text-sm text-muted-foreground mt-1">Liminal tree, boundary between worlds) → Radical Humanity. Standing at crossings and doorways where people and ideas shift from one state to another, the Guardian protects the integrity of what lies within while enabling transformation. Its role is discernment — allowing growth without erosion, guiding change without losing what makes us human, and ensuring that evolution remains rooted in essential values.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card/60 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md min-h-[280px]">
            <h3 className="font-semibold">The Alchemist</h3>
            <p className="text-sm text-muted-foreground mt-1">Flower to berry, toxicity to nourishment) → Growth & Accelerationism. Converting fleeting beauty into lasting sustenance, the Alchemist embodies the paradox of potential — what heals can also harm, depending on its use. Here, alchemy means creating disproportionate value from minimal resources, turning scarcity into abundance through resourcefulness and creativity, and transforming what exists now into something greater, more enduring, and more widely shared.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="berry" className="mt-10">
        <h2 id="berry" className="text-2xl md:text-3xl font-semibold">Berry — The First Harvest</h2>
        <blockquote className="mt-3 rounded-2xl border border-border bg-card/60 p-4">
          <p className="text-sm text-muted-foreground">“Long before steel and circuits, there were plants that held worlds in their roots. The elder was one of them — healer, protector, doorway. In its blossoms, the promise of joy. In its fruit, the power to nourish. It asked for respect before giving its gifts, knowing transformation requires care. Elderflower carries this lineage forward — tending a grove of ideas, art, and alliances. From its blossoms comes Berry, our first fruit: a tool for inner security, so you can flourish in the age ahead.”</p>
        </blockquote>
        <p className="mt-3 text-sm text-muted-foreground">Like elderflowers in tonics, perfumes, and healing elixirs, our work restores, delights, and expands the mind. The name gives us license to build across health, emotion, AI, tech, education, and design without ever outgrowing the symbol.</p>
      </section>

      </Section>
      <Footer />
    </div>
  );
};

export default Metaphor;
