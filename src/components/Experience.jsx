import Section, { Card, Reveal, Tag } from "./Section";
import { site } from "../data/site";
export default function Experience() {
  return (<Section id="experience" title="Experience & Practical Learning" intro="Internship experience in web development, my education, and what I am exploring now.">
    {site.experience.map((e) => (<Reveal key={e.title}><Card><h3 className="text-xl font-bold">{e.title}, {e.org}</h3>
      <div className="mb-3 text-accent">Project: {e.project}</div><ul className="list-disc space-y-1 pl-5 text-muted">{e.points.map((p) => <li key={p}>{p}</li>)}</ul></Card></Reveal>))}
    <h3 className="mb-4 mt-14 text-2xl font-extrabold">Education</h3>
    <div className="grid gap-4 md:grid-cols-2">{site.education.map((e) => (<Reveal key={e.school}><Card className="h-full"><h4 className="font-display text-lg font-bold">{e.school}</h4>
      <div className="mb-3 text-accent">{e.detail}</div><div className="flex flex-wrap gap-2">{e.badges.map((b) => <Tag key={b}>{b}</Tag>)}</div></Card></Reveal>))}</div>
    <h3 className="mb-4 mt-14 text-2xl font-extrabold">Currently Exploring</h3>
    <div className="flex flex-wrap gap-2">{site.learning.map((l) => <Tag key={l}>{l}</Tag>)}</div></Section>);
}
