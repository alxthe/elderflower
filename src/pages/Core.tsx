import React from "react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Pillar: React.FC<{ title: string; points: string[] }> = ({ title, points }) => (
  <Card className="rounded-2xl border border-border bg-card/70">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full grid place-items-center bg-accent/30">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Core: React.FC = () => {
  React.useEffect(() => { document.title = "Elderflower — Self‑Security & Flourishing"; }, []);
  const corePoints = [
    "Safety, stability, and a sense of agency in daily life",
    "Mind–body practices that regulate stress and renew energy",
    "Inner skills: attention, acceptance, awareness, self‑compassion",
    "Relationships that nourish, challenge, and help you grow",
  ];
  return (
    <div>
      <Header />
      <Section className="pt-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Self‑Security & Flourishing</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Needs are net. Well‑being. Inner world. The rooted base for a life that compounds.
        </p>
        <div className="mt-4 rounded-2xl border border-border bg-card/60 p-4 text-sm text-muted-foreground">
          We’re building <a href="https://berryplush.com" target="_blank" rel="noopener noreferrer" className="underline">Berry</a>—the step to self‑security—and starting a media brand and podcast to share these ideas widely.
        </div>
        
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Pillar title="Foundation" points={["Safety, stability, agency","Mind and body practices that regulate and renew","Inner skills: attention, acceptance, awareness"]} />
          <Pillar title="Relationships" points={["Bonding that nourishes and challenges","Rituals that sustain connection","Communal growth and service"]} />
        </div>

        <Card className="mt-6 rounded-2xl border border-border bg-card/70">
          <CardHeader><CardTitle className="text-lg">Key areas</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {corePoints.map((p, i) => (
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

export default Core;
