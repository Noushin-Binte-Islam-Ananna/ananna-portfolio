import Section, { Card, Reveal } from "./Section";
import { site } from "../data/site";
export default function About() {
  return (<Section id="about" title="A Little About Me"><div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
    <Reveal className="space-y-4 text-muted">{site.about.map((p) => <p key={p}>{p}</p>)}</Reveal>
    <div className="grid gap-4">{site.facts.map(([k, v], i) => (<Reveal key={k} delay={i * 0.08}><Card><small className="text-muted">{k}</small><div className="font-semibold">{v}</div></Card></Reveal>))}</div>
  </div></Section>);
}
