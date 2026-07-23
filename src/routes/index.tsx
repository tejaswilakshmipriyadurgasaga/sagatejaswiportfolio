import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUp,
  BarChart3,
  Brain,
  Briefcase,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color-mix(in_oklab,var(--navy)_92%,transparent)] backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-bold text-white text-lg tracking-tight"
        >
          Saga<span className="text-royal-soft">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="px-3 py-2 text-sm text-white/75 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-royal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-royal px-4 py-2 text-sm font-medium text-white shadow-glow hover:brightness-110 transition"
        >
          Let's talk
        </a>
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 animate-rise">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-white/80 hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- REVEAL ---------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative hero-bg overflow-hidden pt-28 pb-20">
      <FloatingDots />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-white/85">
            <Sparkles size={14} className="text-royal-soft" />
            Available for Data Analyst roles · 2026
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white to-royal-soft bg-clip-text text-transparent">
              Saga Tejaswi Lakshmi Priya Durga
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-royal-soft font-medium">
            Transforming Data into Business Insights
          </p>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            Passionate Computer Science Engineering student with expertise in
            Excel, SQL, Python, Power BI, DAX, and Google Looker Studio. I build
            interactive dashboards and predictive analytics solutions that help
            organizations make data-driven decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white shadow-glow hover:brightness-110 hover:-translate-y-0.5 transition"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon href="https://github.com" label="GitHub">
              <Github size={18} />
            </SocialIcon>
            <SocialIcon href="mailto:hello@example.com" label="Email">
              <Mail size={18} />
            </SocialIcon>
          </div>
        </div>

        <div className="relative animate-rise" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-royal/40 to-transparent blur-2xl" />
          <div className="relative glass rounded-[2rem] p-3 shadow-glow animate-float">
            <img
              src={profileImg}
              alt="Portrait of Saga Tejaswi Lakshmi Priya Durga"
              width={912}
              height={1104}
              className="rounded-[1.5rem] w-full h-auto object-cover"
            />
            <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 text-white shadow-soft">
              <div className="text-[10px] uppercase tracking-widest text-white/60">
                Focus
              </div>
              <div className="text-sm font-semibold">Power BI · SQL · Python</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-white shadow-soft">
              <div className="text-[10px] uppercase tracking-widest text-white/60">
                Projects
              </div>
              <div className="text-sm font-semibold">5+ Dashboards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid place-items-center h-10 w-10 rounded-full glass text-white hover:bg-royal hover:border-royal hover:-translate-y-0.5 transition"
    >
      {children}
    </a>
  );
}

function FloatingDots() {
  const dots = Array.from({ length: 22 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 4 + ((i * 7) % 10);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 8 + ((i * 3) % 10);
        const delay = (i % 7) * 0.6;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-royal-soft/50"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `drift ${dur}s ease-in-out ${delay}s infinite`,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHead({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl mx-auto text-center mb-14">
      <div
        className={`text-xs font-semibold tracking-[0.2em] uppercase ${
          dark ? "text-royal-soft" : "text-royal"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl font-bold ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="About"
          title="Turning raw data into decisions"
          subtitle="Analyst by training, storyteller by instinct."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl bg-card p-8 shadow-soft border border-border/60 h-full">
              <p className="text-foreground/85 leading-relaxed">
                I'm a Computer Science Engineering student focused on the
                analytics side of the discipline — the intersection where
                statistics, SQL and business context meet. I love building
                dashboards that reveal the story hidden inside a spreadsheet, and
                predictive models that put a number on the future.
              </p>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                My toolkit spans Power BI, DAX, SQL, Python (Pandas, NumPy,
                Scikit-learn) and Google Looker Studio. I care about clean data,
                clear visuals, and outcomes teams can act on the same day.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <MiniStat label="Dashboards" value="5+" />
                <MiniStat label="Certifications" value="5" />
                <MiniStat label="Tools Mastered" value="10+" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-navy text-white p-8 shadow-soft h-full relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-royal/40 blur-3xl" />
              <GraduationCap className="text-royal-soft" size={28} />
              <div className="mt-4 text-xs uppercase tracking-widest text-white/60">
                Education
              </div>
              <div className="mt-2 font-display text-xl font-semibold">
                Bachelor of Technology
              </div>
              <div className="text-white/80">
                Computer Science &amp; Engineering
              </div>
              <div className="mt-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs">
                2023 – 2027
              </div>
              <p className="mt-6 text-sm text-white/70">
                Coursework in data structures, databases, statistics, and
                machine learning — paired with hands-on analytics projects.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-secondary/60 border border-border/60 px-4 py-3">
      <div className="font-display text-2xl font-bold text-navy">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* ---------------- SKILLS ---------------- */
const SKILL_GROUPS = [
  {
    icon: Database,
    title: "Programming",
    items: [
      { name: "Python", level: 88 },
      { name: "SQL", level: 92 },
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    items: [
      { name: "Power BI", level: 94 },
      { name: "Excel", level: 90 },
      { name: "DAX", level: 85 },
      { name: "Google Looker Studio", level: 82 },
    ],
  },
  {
    icon: Brain,
    title: "Libraries",
    items: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Scikit-learn", level: 78 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Skills"
          title="Stack I ship with"
          subtitle="A focused toolkit for analytics, BI and predictive modelling."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group h-full rounded-3xl bg-card p-7 border border-border/60 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal">
                    <g.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {g.title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {g.items.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">
                          {s.name}
                        </span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-royal to-royal-soft transition-all duration-1000 group-hover:brightness-110"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
type Project = {
  title: string;
  tags: string[];
  features: string[];
  links: { label: string; href: string; icon: typeof Github }[];
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "HR Analytics Dashboard",
    tags: ["Power BI", "Excel", "DAX"],
    features: [
      "Employee Attrition",
      "Job Satisfaction",
      "Department Analysis",
      "Interactive Dashboard",
    ],
    links: [
      { label: "GitHub", href: "https://github.com", icon: Github },
      { label: "Live Demo", href: "#", icon: ExternalLink },
    ],
    accent: "from-royal to-royal-soft",
  },
  {
    title: "Customer Churn Prediction",
    tags: ["Python", "Scikit-learn", "Pandas"],
    features: ["Random Forest Model", "Data Cleaning", "EDA", "Machine Learning"],
    links: [{ label: "GitHub", href: "https://github.com", icon: Github }],
    accent: "from-royal-soft to-royal",
  },
  {
    title: "Retail Sales Dashboard",
    tags: ["Power BI"],
    features: ["Revenue", "Profit", "Regional Sales", "KPIs"],
    links: [{ label: "GitHub", href: "https://github.com", icon: Github }],
    accent: "from-royal to-royal-soft",
  },
  {
    title: "IPL Analytics Dashboard",
    tags: ["Power BI"],
    features: ["Player Statistics", "Team Performance", "Season Insights"],
    links: [{ label: "GitHub", href: "https://github.com", icon: Github }],
    accent: "from-royal-soft to-royal",
  },
  {
    title: "Zomato Restaurant Analysis",
    tags: ["Power BI", "Python"],
    features: ["Restaurant Ratings", "Cost Analysis", "Cuisine Insights"],
    links: [{ label: "GitHub", href: "https://github.com", icon: Github }],
    accent: "from-royal to-royal-soft",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Projects"
          title="Selected analytics work"
          subtitle="Dashboards, models and case studies built end-to-end."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <article className="group relative h-full rounded-3xl bg-card border border-border/60 p-7 shadow-soft hover:-translate-y-2 hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div
                  className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-15 blur-3xl group-hover:opacity-30 transition`}
                />
                <div className="relative">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-navy text-white shadow-soft">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium rounded-full bg-royal/10 text-royal px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-navy hover:bg-navy hover:text-white transition"
                      >
                        <l.icon size={14} /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATES ---------------- */
const CERTS = [
  "Cisco Python Essentials",
  "Power BI Certificate",
  "NASSCOM GEN AI",
  "Quantum Fundamentals",
  "Wadhwani Entrepreneur Program",
];

function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <FloatingDots />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          dark
          eyebrow="Certificates"
          title="Credentialed and current"
          subtitle="Continuously learning across analytics, AI and emerging tech."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <Reveal key={c} delay={i * 80}>
              <div className="group glass rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/15 transition h-full">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-lg bg-royal/25 text-royal-soft">
                    <Sparkles size={18} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    Certificate
                  </div>
                </div>
                <div className="mt-4 font-display text-lg font-semibold">
                  {c}
                </div>
                <div className="mt-3 h-px w-10 bg-royal-soft group-hover:w-16 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
const ACHIEVEMENTS = [
  { icon: Trophy, title: "Academic Topper", body: "Consistent top performer across semesters." },
  { icon: Sparkles, title: "Paper Presentation", body: "Presented technical papers at symposia." },
  { icon: Briefcase, title: "Internships", body: "Hands-on analytics and BI experience." },
  { icon: Brain, title: "Hackathons", body: "Team lead across data-driven challenges." },
  { icon: BarChart3, title: "Technical Certifications", body: "Multiple industry-recognized credentials." },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Achievements"
          title="Milestones along the way"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="rounded-3xl bg-card p-7 border border-border/60 shadow-soft hover:-translate-y-1 hover:shadow-glow transition h-full">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal">
                  <a.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESUME ---------------- */
function Resume() {
  return (
    <section id="resume" className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy text-white p-10 sm:p-14 shadow-glow">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-royal/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-royal-soft/30 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-royal-soft">
                  Resume
                </div>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
                  A one-page view of my analytics journey
                </h2>
                <p className="mt-3 text-white/70 max-w-xl">
                  Download the latest version of my resume — projects,
                  certifications, education and stack in a recruiter-ready
                  format.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3.5 font-semibold shadow-glow hover:brightness-110 hover:-translate-y-0.5 transition"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Contact"
          title="Let's build something insightful"
          subtitle="Open to full-time analyst roles, internships and collaborations."
        />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <Reveal>
            <div className="rounded-3xl bg-card p-8 border border-border/60 shadow-soft h-full">
              <h3 className="font-display text-xl font-semibold text-navy">
                Reach out directly
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I usually reply within 24 hours.
              </p>
              <ul className="mt-6 space-y-4">
                <ContactItem icon={Mail} label="Email" value="hello@example.com" href="mailto:hello@example.com" />
                <ContactItem icon={Linkedin} label="LinkedIn" value="/in/saga-tejaswi" href="https://linkedin.com" />
                <ContactItem icon={Github} label="GitHub" value="@saga-tejaswi" href="https://github.com" />
                <ContactItem icon={MapPin} label="Location" value="India" />
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sent");
              }}
              className="rounded-3xl bg-card p-8 border border-border/60 shadow-soft"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" className="mt-4" />
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Tell me about the role or project…"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-royal/40 focus:border-royal transition resize-none"
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  {status === "sent"
                    ? "Thanks — I'll be in touch soon."
                    : "Your message goes straight to my inbox."}
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white shadow-glow hover:brightness-110 hover:-translate-y-0.5 transition"
                >
                  <Send size={16} /> Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal group-hover:bg-royal group-hover:text-white transition">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium text-navy truncate">{value}</div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required
        maxLength={200}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-royal/40 focus:border-royal transition"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()} Saga Tejaswi Lakshmi Priya Durga. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <SocialIcon href="https://linkedin.com" label="LinkedIn">
            <Linkedin size={16} />
          </SocialIcon>
          <SocialIcon href="https://github.com" label="GitHub">
            <Github size={16} />
          </SocialIcon>
          <SocialIcon href="mailto:hello@example.com" label="Email">
            <Mail size={16} />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- BACK TO TOP ---------------- */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <a
      href="#home"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 grid place-items-center h-12 w-12 rounded-full bg-royal text-white shadow-glow hover:brightness-110 hover:-translate-y-0.5 transition animate-rise"
    >
      <ArrowUp size={18} />
    </a>
  );
}
