import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [location.pathname]);

  const navLink = ({ isActive }: { isActive: boolean }) =>
    cn(
      "transition-colors story-link",
      isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-card/40 bg-card/30",
        scrolled && "bg-card/70 shadow-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="h-9 w-9 grid place-items-center rounded-xl bg-accent/20 border border-border">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">Elderflower</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/self-security" className={navLink}>Self‑Security</NavLink>
          <NavLink to="/humanity" className={navLink}>Humanity</NavLink>
          <NavLink to="/growth" className={navLink}>Growth</NavLink>
          <NavLink to="/future" className={navLink}>Future</NavLink>
          <NavLink to="/metaphor" className={navLink}>Metaphor</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="default" className="rounded-xl hidden md:inline-flex">
            <Link to="/metaphor">See metaphor</Link>
          </Button>
          <button
            className="md:hidden h-9 w-9 grid place-items-center rounded-xl border border-border bg-card/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card/80">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-3 text-sm">
            <NavLink to="/self-security" className={navLink}>Self‑Security</NavLink>
            <NavLink to="/humanity" className={navLink}>Humanity</NavLink>
            <NavLink to="/growth" className={navLink}>Growth</NavLink>
            <NavLink to="/future" className={navLink}>Future</NavLink>
            <NavLink to="/metaphor" className={navLink}>Metaphor</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
