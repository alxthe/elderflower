import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 border-t border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Elderflower, Inc.</p>
          <div className="flex gap-4">
            <Link to="/self-security" className="hover:underline">Self‑Security</Link>
            <Link to="/humanity" className="hover:underline">Humanity</Link>
            <Link to="/growth" className="hover:underline">Growth</Link>
            <Link to="/metaphor" className="hover:underline">Metaphor</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
