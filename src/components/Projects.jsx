import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Section, { Reveal } from "./Section";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../hooks/useProjects";
const Grid = ({ items }) => (<motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><AnimatePresence mode="popLayout">
  {items.map((p) => <ProjectCard key={p.id} project={p} />)}</AnimatePresence></motion.div>);
export default function Projects() {
  const { projects, loading, error } = useProjects();
  const [cat, setCat] = useState("All");
  const cats = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], [projects]);
  const featured = projects.filter((p) => p.featured);
  const shown = projects.filter((p) => cat === "All" || p.category === cat);
  return (<Section id="projects" title="Featured Projects" intro="A selection of my strongest work across React, JavaScript, PHP and MySQL.">
    {loading && <p className="text-muted">Loading projects...</p>}
    {error && <p role="alert" className="text-red-300">Projects could not be loaded. Please refresh the page.</p>}
    {!loading && !error && (<>
      <Grid items={featured} />
      <Reveal className="mt-16"><h3 className="text-2xl font-extrabold">All Projects</h3>
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">{cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${cat === c ? "border-accent bg-accent text-slate-900" : "border-line text-muted hover:border-accent hover:text-white"}`}>{c}</button>))}</div></Reveal>
      <div className="mt-8"><Grid items={shown} /></div></>)}
  </Section>);
}
