import React from "react";
import { Link } from "react-router-dom";

type Props = { className?: string; includeBerry?: boolean };

const WhatWeDoStrip: React.FC<Props> = ({ className = "", includeBerry = true }) => {
  return (
    <aside className={`rounded-2xl border border-border bg-card/60 p-4 ${className}`}>
      <h3 className="text-sm font-semibold">What we do</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        We create a vision of a hopeful future—and push us toward it. First step: show what it looks like through a media brand and podcast that push the boundaries of knowledge.{includeBerry && (<>
          {" "}We’re also building <a href="https://berryplush.com" target="_blank" rel="noopener noreferrer" className="underline">Berry</a> to strengthen self‑security.
        </>)} The world needs hope—spread hope.
      </p>
      <div className="mt-2 text-xs flex gap-3">
        <Link to="/#vision" className="underline">Vision</Link>
        <Link to="/#vision" className="underline">Start here</Link>
        <Link to="/metaphor" className="underline">Metaphor</Link>
      </div>
    </aside>
  );
};

export default WhatWeDoStrip;
