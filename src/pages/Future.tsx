import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/Section";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FlaskConical, Atom, Sparkles, BookOpen } from "lucide-react";

const Future: React.FC = () => {
  React.useEffect(() => { document.title = "Elderflower — Future"; }, []);

  return (
    <div>
      <Header />

      <Section className="pt-10 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Future</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">Later, As We Gain Resources</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-3xl">Future tracks we’ll unlock as resources grow.</p>
      </Section>

      <Section className="py-6 md:py-10">
        <div className="mt-2 relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" aria-hidden />
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative pl-14">
              <div className="absolute left-4 top-3 h-3 w-3 rounded-full bg-primary ring-2 ring-primary/30" aria-hidden />
              <Card className="rounded-2xl border border-border bg-card/70 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FlaskConical className="h-4 w-4" /> Our Lab
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex items-start justify-between gap-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>A cultural R&D lab where science, art, philosophy, and technology meet.</li>
                    <li>Small, high‑leverage teams merging beauty, insight, and ambition.</li>
                    <li>Collaborations with thinkers, makers, and storytellers to prototype the future.</li>
                    <li>Research in AI, science, art, philosophy, and human flourishing.</li>
                    <li>Curation and collaboration engine, finding ideas worth amplifying.</li>
                  </ul>
                  <Badge variant="secondary" className="whitespace-nowrap">Future phase</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="relative pl-14">
              <div className="absolute left-4 top-3 h-3 w-3 rounded-full bg-primary ring-2 ring-primary/30" aria-hidden />
              <Card className="rounded-2xl border border-border bg-card/70 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Atom className="h-4 w-4" /> Our Capital
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex items-start justify-between gap-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Capital as an amplifier for transformative ideas.</li>
                    <li>Fund “hope infrastructure” that expands human potential and bridges humanity and new intelligences.</li>
                    <li>Back early, underfunded projects with high upside; scale through media, technology, and cultural adoption.</li>
                  </ul>
                  <Badge variant="secondary" className="whitespace-nowrap">Future phase</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="relative pl-14">
              <div className="absolute left-4 top-3 h-3 w-3 rounded-full bg-primary ring-2 ring-primary/30" aria-hidden />
              <Card className="rounded-2xl border border-border bg-card/70 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sparkles className="h-4 w-4" /> Our Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex items-start justify-between gap-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Curated gatherings to build momentum and community around the future.</li>
                    <li>Salons, retreats, and pop‑up forums for cross‑disciplinary collaboration.</li>
                    <li>Public events blending science talks, art installations, and interactive tech demos.</li>
                    <li>Spaces where optimism is contagious and people leave with new ideas and new allies.</li>
                  </ul>
                  <Badge variant="secondary" className="whitespace-nowrap">Future phase</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="relative pl-14">
              <div className="absolute left-4 top-3 h-3 w-3 rounded-full bg-primary ring-2 ring-primary/30" aria-hidden />
              <Card className="rounded-2xl border border-border bg-card/70 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-4 w-4" /> Our Art
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex items-start justify-between gap-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Stories, artifacts, and immersive experiences that embody Elderflower’s ethos.</li>
                    <li>Cross‑medium creations: essays, visual art, interactive experiences.</li>
                    <li>Worldbuilding that inspires belonging, curiosity, and wonder.</li>
                    <li>Animations and interactive media; Studio Ghibli is a touchstone.</li>
                  </ul>
                  <Badge variant="secondary" className="whitespace-nowrap">Future phase</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Future;
