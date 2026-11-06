import Section, { Card, Reveal, Tag } from "./Section";
import { skills } from "../data/skills";
export default function Skills() {
  return (<Section id="skills" title="Technical Skills" intro="The tools I work with, grouped by area. I list what I use rather than rating myself.">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{Object.entries(skills).map(([group, items], i) => (
      <Reveal key={group} delay={i * 0.06}><Card className="h-full"><h3 className="mb-3 text-lg font-bold">{group}</h3>
        <div className="flex flex-wrap gap-2">{items.map((s) => <Tag key={s}>{s}</Tag>)}</div></Card></Reveal>))}</div></Section>);
}
