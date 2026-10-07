"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, Download, ExternalLink, Menu, X } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, LINKEDIN, GITHUB } from "../lib/site";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Selected work" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

const PROFILE = [
  { label: "Current role", value: "Software Engineer, Nusuria Technologies" },
  { label: "Experience", value: "About seven years across web, mobile and systems administration" },
  { label: "Focus", value: "ERP systems, payment integrations, mobile apps" },
  { label: "Main tools", value: "Laravel, Node.js, Flutter, React" },
  { label: "Education", value: "Computer Science, Dedan Kimathi University of Technology" },
  { label: "Based in", value: "Kenya" },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "Nusuria Technologies",
    period: "2026 to present",
    current: true,
    description:
      "Building an emergency roadside assistance app that connects stranded drivers with nearby help. Working across the stack with Flutter on mobile and Node.js on the backend.",
  },
  {
    role: "System Administrator",
    org: "Topas Agrovet",
    period: "2024 to 2026",
    description:
      "Developed a multibranch ERP that replaced Excel spreadsheets across two branches, covering sales, user management, reporting, stock tracking, farmer balances and branch-level statistics.",
  },
  {
    role: "System Administrator",
    org: "Olanka Safaris",
    period: "2022 to 2023",
    description:
      "Managed IT systems and infrastructure, supporting day-to-day operations across the business.",
  },
  {
    role: "Web Developer",
    org: "Global Desarts Media",
    period: "2020 to 2021",
    description:
      "Integrated M-Pesa Daraja STK Push, credit card and PayPal payments into more than ten client systems, several of them live with real customers. Built new systems from scratch, modified existing ones, and trained new developers joining the team.",
  },
  {
    role: "Computer Lab Technician",
    org: "Nyandarua Institute of Science and Technology",
    period: "2018 to 2020",
    description:
      "Taught web development and object-oriented programming, mentored students pursuing development careers, and maintained and repaired lab computers.",
  },
];

const PROJECTS = [
  {
    name: "Roadside Assistance App",
    period: "2026 to present",
    summary: "An emergency roadside assistance product connecting stranded drivers with nearby help.",
    problem: "Drivers stranded after a breakdown or accident need a fast way to reach help close to them.",
    built:
      "The whole product at Nusuria Technologies: the mobile apps, the Node.js backend, an admin panel and the project website.",
    outcome: "Currently in development.",
    stack: ["Flutter", "Node.js"],
    link: { label: "Visit the Nusuria website", href: "https://nusuria.com/" },
  },
  {
    name: "Topas Agrovet ERP",
    period: "2024 to 2026",
    summary: "A multibranch ERP system for an agrovet business that works with farmers.",
    problem:
      "Both branches ran on Excel spreadsheets, which made reporting, stock counts and farmer balances slow and hard to track.",
    built:
      "A Laravel ERP covering sales, user management, reporting, stock tracking and farmer balances, with a statistics dashboard per branch.",
    outcome:
      "Management gets reports without compiling spreadsheets, stock tracking became easy, and the system knows each farmer's balance so it can be deducted from their milk payments. Still in use today.",
    stack: ["PHP", "Laravel", "MySQL"],
  },
  {
    name: "Payment Integration Suite",
    period: "2020 to 2021",
    summary: "Online payments added to more than ten client systems at Global Desarts Media.",
    problem: "Client businesses needed customers to pay online instead of having payments confirmed by hand.",
    built:
      "M-Pesa Daraja STK Push, credit card and PayPal gateways integrated into client web applications built with PHP and CodeIgniter.",
    outcome: "Live with real customers across more than ten client systems, and still running.",
    stack: ["PHP", "CodeIgniter", "M-Pesa Daraja API", "PayPal API"],
  },
  {
    name: "Peafowl Tours Website",
    period: "Client project",
    summary: "A website for a tours business, handed off and live.",
    problem: "A tours business needed an online presence that travellers could find.",
    built:
      "Designed and built the website, handed it over to the business, and optimised it for search engines (SEO) so it can be found on Google.",
    outcome: "Live at peafowltours.com.",
    stack: ["Web development", "SEO"],
    link: { label: "View the Peafowl Tours website", href: "https://peafowltours.com/" },
  },
];

const SERVICES = [
  {
    title: "ERP and business systems",
    description:
      "Multibranch systems for sales, user management and reporting, with per-branch dashboards so management can see how each location is performing. Built with PHP, Laravel and MySQL.",
  },
  {
    title: "Payment integrations",
    description:
      "M-Pesa Daraja STK Push, credit card and PayPal gateways connected to web applications, so customers can pay online and the business can see what came in.",
  },
  {
    title: "Mobile app development",
    description:
      "Cross-platform apps built with Flutter and backed by Node.js APIs, from the first screen through to a working product.",
  },
  {
    title: "Websites and web applications",
    description:
      "Client websites and custom web apps built with Laravel, CodeIgniter, Django, React and Next.js, handed off ready for the business to run.",
  },
  {
    title: "IT systems administration",
    description:
      "Day-to-day management of company systems and infrastructure, keeping operations running and staff supported.",
  },
];

const SKILLS = [
  {
    category: "Languages and data",
    items: ["PHP", "JavaScript", "Python", "SQL", "PostgreSQL", "MySQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["Laravel", "CodeIgniter", "Django", "React.js", "Next.js", "Node.js", "Flutter", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Integrations",
    items: ["M-Pesa API", "PayPal API", "Credit card gateways", "REST APIs", "GraphQL", "SMS APIs"],
  },
  {
    category: "How I work",
    items: ["Client handling", "Team collaboration", "Time management", "Mentorship and training"],
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.868.507 3.703 1.474 5.31L2.045 22l4.827-1.396A9.943 9.943 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.062a8.03 8.03 0 01-4.101-1.124l-.294-.175-3.032.879.833-2.99-.192-.307A8.03 8.03 0 013.938 12c0-4.451 3.611-8.062 8.063-8.062 4.451 0 8.062 3.611 8.062 8.062 0 4.452-3.611 8.062-8.062 8.062z" />
    </svg>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const offset = 120;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      // The last section may be too short to reach the offset.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {intro && <p className="mt-3 leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const navClass = (isActive: boolean) =>
    `border-b-2 py-1 text-sm font-medium transition-colors hover:text-ink ${
      isActive ? "border-accent text-ink" : "border-transparent text-muted"
    }`;

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="James Nderitu, back to top">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent font-display text-sm font-semibold text-white">
              JN
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-ink">James Nderitu</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className={navClass(active === link.href.slice(1))}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="hidden items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent sm:flex"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-line bg-paper px-6 py-3 lg:hidden" aria-label="Mobile">
            <div className="mx-auto flex max-w-6xl flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`border-l-2 px-3 py-3 text-sm font-medium ${
                      isActive ? "border-accent bg-accent-soft text-ink" : "border-transparent text-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a href="/resume.pdf" download className="mt-2 px-3 py-3 text-sm font-medium text-accent">
                Download resume
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:py-24">
            <div className="reveal">
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
                Software engineer in Kenya building ERP systems, payment integrations and mobile apps.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                I&apos;m James Nderitu, a software engineer with about seven years of experience building the systems
                businesses run on, from multibranch ERPs and M-Pesa integrations to Flutter mobile apps. I currently
                build an emergency roadside assistance app at Nusuria Technologies.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                I&apos;m open to full-time roles and freelance projects where reliability and correctness matter more
                than flash.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
                >
                  Email me
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download resume
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <aside
              className="reveal rounded-md border border-line bg-surface"
              style={{ animationDelay: "120ms" }}
              aria-label="Profile summary"
            >
              <div className="flex items-center gap-2.5 border-b border-line px-6 py-4">
                <span className="status-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-sm font-medium text-ink">Open to new roles and projects</p>
              </div>
              <dl className="divide-y divide-line">
                {PROFILE.map((item) => (
                  <div key={item.label} className="grid grid-cols-[6.5rem_1fr] gap-4 px-6 py-3.5">
                    <dt className="text-sm text-muted">{item.label}</dt>
                    <dd className="text-sm font-medium leading-snug text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-16 border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <SectionHeading
              title="Software engineering experience"
              intro="Roles across software development and systems administration, newest first."
            />
            <ol className="mt-12 border-t border-line">
              {EXPERIENCE.map((job) => (
                <li
                  key={job.role + job.org}
                  className="grid gap-2 border-b border-line py-8 md:grid-cols-[12rem_1fr] md:gap-10"
                >
                  <p className="text-sm tabular-nums text-muted">
                    {job.period}
                    {job.current && (
                      <span className="ml-2 rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                        Current
                      </span>
                    )}
                  </p>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                    <p className="text-sm font-medium text-accent">{job.org}</p>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">{job.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="scroll-mt-16 border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <SectionHeading
              title="Selected ERP, payment and mobile projects"
              intro="Systems and products I have designed, built and shipped."
            />
            <div className="mt-12 border-t border-line">
              {PROJECTS.map((p) => (
                <article
                  key={p.name}
                  className="grid gap-2 border-b border-line py-8 md:grid-cols-[12rem_1fr] md:gap-10"
                >
                  <p className="text-sm tabular-nums text-muted">{p.period}</p>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">{p.summary}</p>
                    <dl className="mt-5 max-w-2xl space-y-3 text-sm">
                      {[
                        { label: "Problem", text: p.problem },
                        { label: "What I built", text: p.built },
                        { label: "Outcome", text: p.outcome },
                      ].map((row) => (
                        <div key={row.label} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                          <dt className="font-medium text-ink">{row.label}</dt>
                          <dd className="leading-relaxed text-muted">{row.text}</dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${p.name}`}>
                      {p.stack.map((t) => (
                        <li key={t} className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink">
                          {t}
                        </li>
                      ))}
                    </ul>
                    {p.link && (
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
                      >
                        {p.link.label}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <SectionHeading
              title="Software development services"
              intro="Whether you are hiring or have a business problem that needs software, these are the areas I work in."
            />
            <dl className="mt-12 border-t border-line">
              {SERVICES.map((s) => (
                <div key={s.title} className="grid gap-2 border-b border-line py-6 md:grid-cols-[12rem_1fr] md:gap-10">
                  <dt className="font-display text-base font-semibold text-ink">{s.title}</dt>
                  <dd className="max-w-2xl leading-relaxed text-muted">{s.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-16 border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <SectionHeading title="Technical skills" />
            <dl className="mt-12 border-t border-line">
              {SKILLS.map((group) => (
                <div key={group.category} className="grid gap-3 border-b border-line py-6 md:grid-cols-[12rem_1fr] md:gap-10">
                  <dt className="text-sm font-medium text-ink">{group.category}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-md bg-accent-soft px-2.5 py-1 text-sm text-ink">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[12rem_1fr] lg:py-24">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-xl">
              About James Nderitu
            </h2>
            <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I started as a junior developer and have grown into building complete systems on my own, including a
                multibranch ERP and, more recently, a Flutter-based emergency roadside assistance app. My hands-on work
                spans Django, Laravel, CodeIgniter, React.js, Node.js and Flutter.
              </p>
              <p>
                My work leans toward software that businesses depend on every day: ERP systems, payment integrations,
                mobile apps and internal tooling. Alongside development I have taught web development, trained new
                hires and mentored developers coming up in the field. I studied Computer Science at Dedan Kimathi
                University of Technology and am based in Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl rounded-md bg-night px-8 py-12 text-white sm:px-14 sm:py-16">
            <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Hiring a software engineer or need a system built?
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/70">
              I&apos;m open to full-time roles and freelance projects, and happy to talk through what you&apos;re
              building. Email is the fastest way to reach me.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-night transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium transition-colors hover:border-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium transition-colors hover:border-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Message on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex gap-6 text-sm text-white/70">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                LinkedIn profile
              </a>
              {GITHUB && (
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                  GitHub profile
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="text-sm text-muted">Copyright © {new Date().getFullYear()} James Nderitu. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}