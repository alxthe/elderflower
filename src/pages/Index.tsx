import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Link } from "react-router-dom";
import Section from "@/components/Section";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Helper components
const Gradients: React.FC = () => (
  <svg className="absolute inset-0 -z-10 h-full w-full" aria-hidden>
    <defs>
      <linearGradient id="dawn" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f5ead7" />
        <stop offset="60%" stopColor="#e9e2cf" />
        <stop offset="100%" stopColor="#e1d8c6" />
      </linearGradient>
      <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f2e9d7" />
        <stop offset="100%" stopColor="#e8dfcc" />
      </linearGradient>
      <radialGradient id="sun" cx="75%" cy="20%" r="40%">
        <stop offset="0%" stopColor="#fff7da" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#dawn)" />
    <rect width="100%" height="55%" y="45%" fill="url(#field)" />
    <circle cx="78%" cy="14%" r="180" fill="url(#sun)" />

    <g opacity=".35">
      <path d="M0 520 C 220 450, 420 520, 640 470 C 860 420, 1120 500, 1440 460 L1440 800 L0 800 Z" fill="#b6c2a3"/>
      <path d="M0 560 C 260 510, 520 560, 760 520 C 980 480, 1200 540, 1440 520 L1440 800 L0 800 Z" fill="#c6cfb6"/>
      <path d="M0 600 C 260 560, 520 600, 760 560 C 980 520, 1200 580, 1440 560 L1440 800 L0 800 Z" fill="#d6ddc7"/>
    </g>
  </svg>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Badge className="rounded-full bg-accent/20 text-foreground border border-accent/30 px-3 py-1 font-medium">
    {children}
  </Badge>
);

type PillarCardProps = {
  title: string;
  subtitle: string;
  items: string[];
};

const PillarCard: React.FC<PillarCardProps> = ({ title, subtitle, items }) => {
  const path = title.startsWith("Self") ? "/self-security" : title.startsWith("Radical") ? "/humanity" : "/growth";
  return (
    <Card className="group bg-card/60 border border-border rounded-2xl hover-scale transition-transform hover:-translate-y-0.5 ring-1 ring-transparent hover:ring-primary/20">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary/20" />
      </CardHeader>
      <CardFooter>
        <Link to={path} className="story-link text-sm">Learn more</Link>
      </CardFooter>
    </Card>
  );
};

// Improved flower diagram on home
const FlowerDiagram: React.FC = () => (
  <div className="relative rounded-3xl border border-border bg-card/60 p-6 md:p-8 overflow-hidden">
    <svg viewBox="0 0 800 520" className="w-full h-[360px] md:h-[420px]">
      <defs>
        <linearGradient id="petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6f0d6" />
          <stop offset="100%" stopColor="#eadfbf" />
        </linearGradient>
        <linearGradient id="leafG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8fb089" />
          <stop offset="100%" stopColor="#5c7a59" />
        </linearGradient>
        <linearGradient id="stemG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f6e4e" />
          <stop offset="100%" stopColor="#3e5b3d" />
        </linearGradient>
      </defs>
      
      <path d="M400 420 C 405 360, 405 300, 398 240 C 392 200, 392 170, 400 140" stroke="url(#stemG)" strokeWidth="10" fill="none" />
      <path d="M402 270 C 480 250, 520 270, 560 300 C 510 320, 470 330, 420 315 Z" fill="url(#leafG)"/>
      <path d="M398 300 C 320 280, 280 290, 240 320 C 290 340, 330 350, 380 335 Z" fill="url(#leafG)"/>

      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const rx = 34, ry = 72;
        const cx = 400 + Math.cos(angle) * 8;
        const cy = 120 + Math.sin(angle) * 8;
        const rotate = (angle * 180) / Math.PI;
        return (
          <g key={i} transform={`translate(${cx},${cy}) rotate(${rotate})`}>
            <ellipse cx={0} cy={-ry / 2} rx={rx} ry={ry} fill="url(#petal)" stroke="#e2dbbf" />
          </g>
        );
      })}
      <circle cx="400" cy="120" r="34" fill="#f0e4b8" stroke="#d8cfa7" />
    </svg>

      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-foreground">The Stem: Core</h4>
          <p className="text-muted-foreground mt-1">Self‑Security & Flourishing: the rooted foundation that lifts everything else.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">The Petals: Radical Humanity</h4>
          <p className="text-muted-foreground mt-1">Art, philosophy, nature, ethics, film, spirituality—what the world feels first.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">The Center/Berry</h4>
          <p className="text-muted-foreground mt-1">Growth, innovation, and positive‑sum progress that seed the future.</p>
        </div>
      </div>
  </div>
);

const Index: React.FC = () => {
  React.useEffect(() => { document.title = "Elderflower — Nature‑Inspired Human Flourishing"; }, []);
  return (
    <div className="relative min-h-screen text-foreground">
      <Gradients />

      <Header />

      {/* HERO */}
      <Section className="pt-16 pb-10 md:pt-24 md:pb-16 animate-fade-in">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Creating the age of flourishing.
          </h1>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl leading-relaxed">
            When technology handles the basics, our central task is to live fully, love deeply, create beauty, and think expansively.
          </p>
          <p className="mt-3 text-muted-foreground">
            Be a light for those around you, and help everyone, everywhere live with deep fulfillment while advancing humanity and uncovering the mysteries of the universe.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button className="rounded-xl" variant="outline" asChild>
                <Link to="/metaphor">See the Metaphor</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      <Separator className="my-6 bg-border" />

      {/* CORE */}
      <Section className="py-6 md:py-10 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pillars</h2>
        <div className="grid lg:grid-cols-3 gap-6 animate-fade-in">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ y: -2 }}>
            <PillarCard
              title="Self‑Security & Flourishing"
              subtitle="The practical foundation for a good life: meeting needs, stabilizing the inner world, and building well‑being that compounds."
              items={[
                "Safety, stability, and a sense of agency in daily life",
                "Mind–body practices that regulate stress and renew energy",
                "Inner skills: attention, acceptance, awareness, self‑compassion",
                "Relationships that nourish, challenge, and help you grow"
              ]}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} whileHover={{ y: -2 }}>
            <PillarCard
              title="Radical Humanity"
              subtitle="Embracing what is uniquely human and learning how to preserve it as our society evolves."
              items={[
                "Art as signal, meaning, and shared culture",
                "Human‑scale philosophy, ethics, and lived wisdom",
                "Nature as kin: reciprocity, stewardship, and awe",
                "Stories that shape identity, values, and belonging"
              ]}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ y: -2 }}>
            <PillarCard
              title="Growth & Accelerationism"
              subtitle="Responsible progress that expands what’s possible while including people."
              items={[
                "Science and technology as positive‑sum engines for prosperity",
                "Learn from the past; move forward without stagnation",
                "Governance and norms that protect dynamism and safety",
                "Create new knowledge and scale its diffusion"
              ]}
            />
          </motion.div>
        </div>
      </Section>


      <Section id="vision" className="py-10 md:py-14 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-semibold">What does Elderflower do?</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">We create a vision of a hopeful future—and push us toward it. The world needs hope. Spread hope. We are starting with Berry and our podcast / blog series. Right now we’re spreading this knowledge to the world through essays, a podcast, and products that help people flourish.</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="rounded-2xl border border-border bg-card/70 hover-scale">
            <CardHeader><CardTitle className="text-lg">Berry: The First Step to Self-Security</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <a href="https://berryplush.com" target="_blank" rel="noopener noreferrer" className="underline">Berry</a> is an AI‑powered plush companion that helps regulate emotions, build inner security, and practice healthy habits through daily check‑ins, grounding exercises, and playful prompts.
            </CardContent>
          </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
            <Card className="rounded-2xl border border-border bg-card/70 hover-scale">
            <CardHeader><CardTitle className="text-lg">Media Brand & Podcast</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">First step: show what the future looks like through a media brand and podcast that push the boundaries of knowledge and surface what the coolest minds are thinking.</CardContent>
          </Card>
          </motion.div>
        </div>
      </Section>




      {/* CALL TO ACTION */}
      <Section className="py-12 animate-fade-in">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-border bg-card/70 p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold">Follow the research & releases</h3>
              <p className="mt-2 text-sm text-muted-foreground">Occasional notes on flourishing, radical humanity, and progress. No noise.</p>
            </div>
            <form className="mt-4 md:mt-0 flex w-full max-w-md gap-3">
              <input type="email" required placeholder="you@domain.com" className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 outline-none focus:ring-2 focus:ring-ring/40" />
              <Button className="rounded-xl">Subscribe</Button>
            </form>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
