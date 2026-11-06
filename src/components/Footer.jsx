import { Github, Mail } from "lucide-react";
import { site } from "../data/site";
export default function Footer() {
  return (<footer className="border-t border-line py-8 text-sm text-muted"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
    <div><a href="#top" className="font-display text-lg font-extrabold text-white">Ananna<span className="text-accent">.dev</span></a>
      <p>© {new Date().getFullYear()} {site.name}. Designed & Developed with care by Ananna.</p></div>
    <nav aria-label="Footer" className="flex flex-wrap items-center gap-5">{site.nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-white">{n}</a>)}
      <a aria-label="GitHub" href={site.github} target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
      <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
      <a aria-label="Facebook" href={site.facebook} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
      <a aria-label="Email" href={`mailto:${site.email}`}><Mail size={18} /></a></nav></div></footer>);
}
