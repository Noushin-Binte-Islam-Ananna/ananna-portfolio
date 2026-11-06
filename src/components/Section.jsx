import { motion } from "motion/react";
export function Reveal({ children, delay = 0, className = "" }) {
  return (<motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay }}>{children}</motion.div>);
}
export default function Section({ id, title, intro, children }) {
  return (<section id={id} className="py-20 md:py-24"><div className="mx-auto max-w-6xl px-6">
    <Reveal><h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}</Reveal>
    <div className="mt-10">{children}</div></div></section>);
}
export const Tag = ({ children }) => (<span className="rounded-md border border-line bg-white/5 px-2.5 py-1 text-sm text-slate-300">{children}</span>);
export const Card = ({ children, className = "" }) => (<div className={`rounded-xl border border-line bg-surface p-5 ${className}`}>{children}</div>);
