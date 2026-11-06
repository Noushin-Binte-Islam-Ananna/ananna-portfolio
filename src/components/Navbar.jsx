import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";
export default function Navbar() {
  const [open, setOpen] = useState(false), [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    site.nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  const link = (n) => (<a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
    className={`transition-colors hover:text-white ${active === n.toLowerCase() ? "text-accent" : "text-muted"}`}>{n}</a>);
  return (<header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur">
    <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="#top" className="font-display text-xl font-extrabold">Ananna<span className="text-accent">.dev</span></a>
      <div className="hidden items-center gap-7 md:flex">{site.nav.map(link)}
        <a href="#contact" className="rounded-lg bg-accent px-4 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_#55d6e8]">Let's Talk</a></div>
      <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    <AnimatePresence>{open && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden border-t border-line md:hidden"><div className="flex flex-col gap-4 px-6 py-4">{site.nav.map(link)}
      <a href="#contact" onClick={() => setOpen(false)} className="font-semibold text-accent">Let's Talk</a></div></motion.div>)}</AnimatePresence>
  </header>);
}
