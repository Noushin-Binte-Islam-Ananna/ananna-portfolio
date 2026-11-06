// Generic card: renders whatever fields a project object has. Never needs editing when projects change.
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Tag } from "./Section";
const hue = (s) => [...s].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
const statusStyle = { Live: "bg-green-400/15 text-green-300", Completed: "bg-accent/15 text-accent", "In progress": "bg-amber-400/15 text-amber-300" };
export default function ProjectCard({ project: p }) {
  const h = hue(p.title);
  return (<motion.article layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
    whileHover={{ y: -4 }} className="glow flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
    <div className="relative h-36 overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(${h} 60% 35%), hsl(${(h + 60) % 360} 60% 30%))` }}>
      {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        : <span className="absolute bottom-3 left-4 font-display text-2xl font-extrabold text-white/90">{p.title}</span>}
      {p.status && <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[p.status] ?? "bg-white/10"}`}>{p.status}</span>}</div>
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div><div className="text-sm text-accent">{p.category}</div><h3 className="text-xl font-bold">{p.title}</h3></div>
      <p className="text-sm text-muted">{p.description}</p>
      {p.features?.length > 0 && <ul className="list-disc space-y-1 pl-5 text-sm text-muted">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>}
      <div className="flex flex-wrap gap-2">{p.tech?.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <div className="mt-auto flex gap-3 pt-2">
        {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"><ExternalLink size={15} />Live Demo</a>}
        {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent"><Github size={15} />GitHub</a>}</div>
    </div></motion.article>);
}
