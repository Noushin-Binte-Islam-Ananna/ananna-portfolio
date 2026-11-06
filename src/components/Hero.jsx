import { motion } from "motion/react";
import { ArrowDown, Facebook, FileText, Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";
import { useTyping } from "../hooks/useTyping";

const Btn = ({ href, primary, children, ...p }) => (
  <motion.a
    href={href}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.97 }}
    {...p}
    className={`inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold ${
      primary ? "border-accent bg-accent text-slate-900" : "border-line hover:border-accent"
    }`}
  >
    {children}
  </motion.a>
);

export default function Hero() {
  const role = useTyping(site.roles);

  const links = [
    { icon: Github, label: "GitHub", href: site.github },
    site.linkedin && { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
    site.facebook && { icon: Facebook, label: "Facebook", href: site.facebook },
    { icon: Mail, label: site.email, href: `mailto:${site.email}`, internal: true },
  ].filter(Boolean);

  return (
    <section id="top" className="relative overflow-hidden py-16 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -left-20 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="blob absolute right-0 top-20 h-96 w-96 rounded-full bg-violet/25 blur-3xl [animation-delay:-5s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
      <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-first mx-auto md:order-last"
        >
          <img
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width="320"
            height="320"
            className="photo-glow h-64 w-64 rounded-full border object-cover object-top sm:h-80 sm:w-80"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Open to Opportunities
          </span>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Hi, I'm {site.name}.</h1>

          <p className="mt-4 h-8 font-display text-xl font-semibold text-accent" aria-label={site.roles.join(", ")}>
            {role}
            <span className="caret">|</span>
          </p>

          <p className="mt-4 max-w-xl text-muted">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn primary href="#projects">
              <ArrowDown size={18} />
              Explore My Work
            </Btn>
            <Btn href={site.resume} download="Noushin_Binte_Islam_Ananna_Resume.pdf">
              <FileText size={18} />
              Download Resume
            </Btn>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-muted">
            {links.map(({ icon: Icon, label, href, internal }) => (
              <a
                key={label}
                href={href}
                {...(!internal && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}