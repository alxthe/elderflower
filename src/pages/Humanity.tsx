import React from "react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, BookOpen, TreePine, Compass, Film, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Topic: React.FC<{ title: string; Icon: any; desc: string }> = ({ title, Icon, desc }) => (
  <Card className="bg-card/60 border border-border rounded-2xl">
    <CardHeader className="flex flex-row items-center gap-3">
      <div className="p-2 rounded-xl bg-accent/20"><Icon className="h-5 w-5"/></div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const Humanity: React.FC = () => {
  React.useEffect(() => { document.title = "Elderflower — Humanity"; }, []);
  const humanityPoints = [
    "Art as signal, meaning, and shared culture",
    "Human‑scale philosophy, ethics, and lived wisdom",
    "Nature as kin: reciprocity, stewardship, and awe",
    "Stories that shape identity, values, and belonging",
  ];
  return (
    <div>
      <Header />
      <Section className="pt-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Radical Humanity</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">What is uniquely human in the age of AI? How will we preserve and evolve our essence.</p>
        <div className="mt-4 rounded-2xl border border-border bg-card/60 p-4 text-sm text-muted-foreground">
          The world needs hope—spread hope. We’re starting a media brand and podcast to carry this conversation into the world.
        </div>
        
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Topic title="Art" Icon={Palette} desc="Creative expression as our fingerprint on the world." />
          <Topic title="Philosophy" Icon={BookOpen} desc="Foundations for meaning, ethics, and knowledge." />
          <Topic title="Nature" Icon={TreePine} desc="Our kinship with the living world." />
          <Topic title="Ethics" Icon={Compass} desc="Navigating trade‑offs with integrity." />
          <Topic title="Film" Icon={Film} desc="Stories that reflect and shape our humanity." />
          <Topic title="Spiritual" Icon={Sparkles} desc="Practices and perspectives that deepen the soul." />
        </div>

        <Card className="mt-6 rounded-2xl border border-border bg-card/70">
          <CardHeader><CardTitle className="text-lg">Key areas</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {humanityPoints.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Section>
      <Footer />
    </div>
  );
};

export default Humanity;
