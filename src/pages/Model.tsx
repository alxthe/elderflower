import React from "react";
import Section from "@/components/Section";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// Improved flower diagram resembling a real flower (stem, leaves, petals)
const Flower: React.FC = () => (
  <svg viewBox="0 0 800 520" className="w-full h-[360px] md:h-[440px]">
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

    {/* ground */}
    

    {/* stem */}
    <path d="M400 470 C 405 420, 405 360, 398 300 C 392 250, 392 200, 400 150" stroke="url(#stemG)" strokeWidth="10" fill="none" />

    {/* leaves */}
    <path d="M402 300 C 480 280, 520 300, 560 330 C 510 350, 470 360, 420 345 Z" fill="url(#leafG)"/>
    <path d="M398 330 C 320 310, 280 320, 240 350 C 290 370, 330 380, 380 365 Z" fill="url(#leafG)"/>

    {/* petals arranged around center */}
    {Array.from({ length: 10 }).map((_, i) => {
      const angle = (i / 10) * Math.PI * 2;
      const rx = 34, ry = 72; // ellipse radii for petal
      const cx = 400 + Math.cos(angle) * 8;
      const cy = 120 + Math.sin(angle) * 8;
      const rotate = (angle * 180) / Math.PI;
      return (
        <g key={i} transform={`translate(${cx},${cy}) rotate(${rotate})`}>
          <ellipse cx={0} cy={-ry / 2} rx={rx} ry={ry} fill="url(#petal)" stroke="#e2dbbf" />
        </g>
      );
    })}

    {/* center */}
    <circle cx="400" cy="120" r="34" fill="#f0e4b8" stroke="#d8cfa7" />
  </svg>
);

const Model: React.FC = () => {
  React.useEffect(() => { document.title = "Elderflower — Model"; }, []);
  return (
    <div>
      <Header />
      <Section className="pt-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold">The Elderflower Model</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">Roots as history; stem as needs and inner flourishing; petals as radical humanity; center/berry as future seeds—positive‑sum progress.</p>
        <div className="mt-6">
          <Flower />
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold">The Stem: Core</h4>
            <p className="text-muted-foreground mt-1">Security, well‑being, and the inner world channel nutrients upward.</p>
          </div>
          <div>
            <h4 className="font-semibold">The Petals: Radical Humanity</h4>
            <p className="text-muted-foreground mt-1">Beauty, meaning, and uniquely human expression that the world feels first.</p>
          </div>
          <div>
            <h4 className="font-semibold">The Center/Berry: Growth</h4>
            <p className="text-muted-foreground mt-1">Seeds of new knowledge and positive‑sum progress.</p>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Model;
