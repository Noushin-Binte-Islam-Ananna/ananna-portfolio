import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Section, { Reveal } from "./Section";
import { site } from "../data/site";

const subject = encodeURIComponent("Hello from your portfolio");
const mailtoHref = `mailto:${site.email}?subject=${subject}`;
const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${subject}`;

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this email address:", site.email);
    }
  };

  return (
    <button
      onClick={copy}
      aria-label="Copy email address"
      className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold transition hover:border-accent active:scale-95"
    >
      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}

function InfoCard({ icon: Icon, label, value, href, external = true }) {
  const inner = (
    <>
      <div className="flex items-center gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/5 text-accent">
          <Icon size={20} />
        </span>
        <div>
          <div className="font-semibold">{label}</div>
          <div className="text-sm text-muted">{value}</div>
        </div>
      </div>
      {href && <ArrowUpRight size={18} className="text-muted transition group-hover:text-accent" />}
    </>
  );

  const base = "group flex h-full items-center justify-between gap-3 rounded-xl border border-line bg-surface p-5";

  if (!href) return <div className={base}>{inner}</div>;

  return (
    <motion.a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      whileHover={{ y: -4 }}
      className={`${base} transition-colors hover:border-violet`}
    >
      {inner}
    </motion.a>
  );
}

export default function Contact() {
  const cards = [
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneLink}`, external: false },
    site.linkedin && { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: site.linkedin },
    site.facebook && { icon: Facebook, label: "Facebook", value: "Message me on Facebook", href: site.facebook },
    { icon: Github, label: "GitHub", value: "See my code", href: site.github },
    { icon: MapPin, label: "Location", value: site.location },
  ].filter(Boolean);

  return (
    <Section
      id="contact"
      title="Have a Project in Mind? Let's Build Something Together."
      intro="I'm always interested in connecting with developers, exploring opportunities, and working on meaningful projects. Feel free to reach out!"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 md:p-10">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 text-muted">
              <Mail size={20} className="text-accent" />
              The fastest way to reach me is email
            </div>
            <a
              href={mailtoHref}
              className="mt-3 block break-all font-display text-2xl font-extrabold transition hover:text-accent md:text-4xl"
            >
              {site.email}
            </a>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a
                href={mailtoHref}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-slate-900"
              >
                <Mail size={18} />
                Write an email
              </motion.a>
              <motion.a
                href={gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-semibold transition-colors hover:border-accent"
              >
                Open in Gmail
                <ArrowUpRight size={16} />
              </motion.a>
              <CopyEmail />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <InfoCard {...c} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}