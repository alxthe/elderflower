import React from "react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Lightbulb, FlaskConical, Cpu, Bot, Atom } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const Tile: React.FC<{ title: string; Icon: any; desc: string }> = ({ title, Icon, desc }) => (
  <Card className="bg-card/60 border border-border rounded-2xl hover:shadow-md transition-shadow">
    <CardHeader className="flex flex-row items-center gap-3">
      <div className="p-2 rounded-xl bg-accent/20"><Icon className="h-5 w-5"/></div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const Growth: React.FC = () => {
  React.useEffect(() => { document.title = "Elderflower — Growth"; }, []);
  const growthPoints = [
    "Science and technology as positive‑sum engines for prosperity",
    "Learn from the past; move forward without stagnation",
    "Governance and norms that protect dynamism and safety",
    "Create new knowledge and scale its diffusion",
  ];
  return (
    <div>
      <Header />
      <Section className="pt-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Growth & Responsible Acceleration</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">Breakthroughs that expand the adjacent possible—positively, and for everyone.</p>
        
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Tile title="New Companies" Icon={Rocket} desc="Builders crafting tomorrow’s infrastructure of meaning and welfare." />
          <Tile title="Innovation" Icon={Lightbulb} desc="Playbooks for non‑linear progress." />
          <Tile title="Bio" Icon={FlaskConical} desc="Life sciences from cells to societies." />
          <Tile title="Robotics" Icon={Cpu} desc="Embodied intelligence shaping the real world." />
          <Tile title="AI" Icon={Bot} desc="Tools that augment judgment and creativity." />
          <Tile title="Quantum" Icon={Atom} desc="Computing and physics that bend limits." />
        </div>

        <Card className="mt-6 rounded-2xl border border-border bg-card/70">
          <CardHeader><CardTitle className="text-lg">Key areas</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {growthPoints.map((p, i) => (
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

export default Growth;
