"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  { label: "Current role", value: "Software Engineer and CTO, Nusuria Technologies" },
  { label: "Experience", value: "About seven years across web, mobile and systems administration" },
  { label: "Focus", value: "ERP systems, payment integrations, mobile apps" },
  { label: "Main tools", value: "Laravel, Node.js, Flutter, React" },
  { label: "Education", value: "Computer Science, Dedan Kimathi University of Technology" },
  { label: "Based in", value: "Kenya" },
];

const STATS = [
  { n: "7+", l: "Years building" },
  { n: "10+", l: "Payment integrations" },
  { n: "10", l: "ERP branches live" },
];

const EXPERIENCE = [
  {
    role: "Software Engineer and CTO",
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

const FAQS = [
  {
    q: "What does James Nderitu build?",
    a: "ERP and business systems, payment integrations, Flutter mobile apps, and websites and web applications. His main tools are Laravel, Node.js, Flutter and React.",
  },
  {
    q: "Is James available for freelance or full-time work?",
    a: "Yes. He is open to both full-time roles and freelance projects. Email is the fastest way to reach him.",
  },
  {
    q: "Which payment gateways has he integrated?",
    a: "M-Pesa Daraja STK Push, credit card gateways and PayPal, added to more than ten client systems, several of them live with real customers.",
  },
  {
    q: "What technologies does he work with?",
    a: "PHP, JavaScript, Python, SQL, MySQL and PostgreSQL, with Laravel, CodeIgniter, Django, React.js, Next.js, Node.js and Flutter, plus REST APIs, GraphQL and SMS APIs.",
  },
  {
    q: "How much experience does he have?",
    a: "About seven years across web development, mobile development and systems administration, including a multibranch ERP and an emergency roadside assistance app.",
  },
  {
    q: "Where is James based?",
    a: "Kenya. He studied Computer Science at Dedan Kimathi University of Technology.",
  },
];

const SOCIALS = [
  { label: "LinkedIn", href: LINKEDIN, icon: "linkedin" },
  ...(GITHUB ? [{ label: "GitHub", href: GITHUB, icon: "github" }] : []),
  { label: "X", href: "https://x.com/jamesnderitukar", icon: "x" },
  { label: "Facebook", href: "https://www.facebook.com/james.nderitu.613670", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/jamderitu/", icon: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@user62736446", icon: "tiktok" },
];


function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.868.507 3.703 1.474 5.31L2.045 22l4.827-1.396A9.943 9.943 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.062a8.03 8.03 0 01-4.101-1.124l-.294-.175-3.032.879.833-2.99-.192-.307A8.03 8.03 0 013.938 12c0-4.451 3.611-8.062 8.063-8.062 4.451 0 8.062 3.611 8.062 8.062 0 4.452-3.611 8.062-8.062 8.062z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  const outline = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const svg = { viewBox: "0 0 24 24", className: "h-[18px] w-[18px]", "aria-hidden": true };

  switch (name) {
    case "linkedin":
      return (
        <svg {...svg} {...outline}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "github":
      return (
        <svg {...svg} {...outline}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "x":
      return (
        <svg {...svg} fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...svg} {...outline}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...svg} {...outline}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...svg} fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    default:
      return null;
  }
}

function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const toneClass =
    tone === "dark"
      ? "border-white/20 text-white/80 hover:border-white hover:bg-white hover:text-[#0e1a24]"
      : "border-line text-muted hover:border-accent hover:bg-accent hover:text-white";

  return (
    <ul className="flex flex-wrap items-center gap-3" aria-label="Social profiles">
      {SOCIALS.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer me"
            title={s.label}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${toneClass}`}
          >
            <SocialIcon name={s.icon} />
            <span className="sr-only">{s.label} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
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
            <Image
              src="/james-nderitu.jpg"
              alt="James Nderitu"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border border-line object-cover object-top"
            />
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
              className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong sm:flex"
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
        <section className="relative overflow-hidden border-b border-line">
          <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
          <div
            className="absolute -top-32 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
            aria-hidden="true"
          />
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

              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
                {STATS.map((s) => (
                  <div key={s.l}>
                    <dt className="font-display text-3xl font-semibold text-ink">{s.n}</dt>
                    <dd className="mt-1 text-xs text-muted">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside
              className="reveal rounded-md border border-line bg-surface"
              style={{ animationDelay: "120ms" }}
              aria-label="Profile summary"
            >
              <div className="flex items-center gap-4 border-b border-line px-6 py-5">
                <Image
                  src="/james-nderitu.jpg"
                  alt="James Nderitu"
                  width={72}
                  height={72}
                  priority
                  className="h-[72px] w-[72px] rounded-full border border-line object-cover object-top"
                />
                <div>
                  <p className="font-display text-lg font-semibold text-ink">James Nderitu</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                    <span className="status-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    Open to new roles and projects
                  </p>
                </div>
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
                      <span className="ml-2 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
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
                        <li
                          key={t}
                          className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink"
                        >
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
                        <li key={item} className="rounded-full bg-accent-soft px-3 py-1 text-sm text-ink">
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
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-xl">
                About James Nderitu
              </h2>
              <Image
                src="/james-nderitu.jpg"
                alt="Portrait of James Nderitu"
                width={192}
                height={240}
                className="mt-6 h-60 w-48 rounded-md object-cover object-top"
              />
            </div>
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

        {/* FAQ */}
        <section id="faq" className="scroll-mt-16 border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <SectionHeading title="Frequently asked questions" />
            <div className="mt-12 max-w-3xl border-t border-line">
              {FAQS.map((item) => (
                <details key={item.q} className="group border-b border-line py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="text-xl leading-none text-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
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
                className="flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#0e1a24] transition-opacity hover:opacity-90"
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
            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="mb-4 text-sm text-white/60">Find me online</p>
              <SocialLinks tone="dark" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-6 py-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">Copyright © {new Date().getFullYear()} James Nderitu. All rights reserved.</p>
          <SocialLinks tone="light" />
        </div>
      </footer>
    </>
  );
}