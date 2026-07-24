import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import resumeAsset from "@/assets/SAGA_TEJASWI.pdf.asset.json";
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

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const LINKS = {
  email: "sagatejaswidataanalytics@gmail.com",
  linkedin: "https://www.linkedin.com/in/stlpdurga?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/tejaswilakshmipriyadurgasaga",
  resume: resumeAsset.url,
  location: "Gudivada, Andhra Pradesh, India",
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
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
        <Experience />
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
        <a href="#home" className="font-display font-bold text-white text-lg tracking-tight">
          Tejaswi<span className="text-royal-soft">.</span>
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
          href={LINKS.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-royal px-4 py-2 text-sm font-medium text-white shadow-glow hover:brightness-110 transition"
        >
          <Download size={14} /> Resume
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
            Open to Data Analyst roles &amp; internships
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white to-royal-soft bg-clip-text text-transparent">
              Saga Tejaswi Lakshmi Priya Durga
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-royal-soft font-medium">
            Aspiring Data Analyst · Power BI Developer · Transforming Data into Smart Decisions
          </p>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            Computer Science Engineering student with a strong foundation in
            SQL, Python, Excel, Power BI and Google Looker Studio. I clean,
            analyze and visualize data to uncover actionable insights that
            support better business decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
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
            <SocialIcon href={LINKS.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon href={LINKS.github} label="GitHub">
              <Github size={18} />
            </SocialIcon>
            <SocialIcon href={`mailto:${LINKS.email}`} label="Email">
              <Mail size={18} />
            </SocialIcon>
          </div>
        </div>

        <div className="relative animate-rise hidden lg:block" style={{ animationDelay: "150ms" }}>
          <HeroVisual />
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

function HeroVisual() {
  const bars = [55, 78, 42, 88, 64, 92, 70];
  return (
    <div className="relative aspect-square max-w-[520px] mx-auto">
      <div className="absolute inset-0 rounded-full bg-white/10 animate-blob" />
      <div className="absolute inset-8 rounded-full border border-white/15 animate-spin-slow" />
      <div className="absolute inset-16 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "45s" }} />

      {/* Center dashboard card */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="glass rounded-3xl p-6 w-[78%] shadow-glow animate-float">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-widest text-white/60">Live Dashboard</div>
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-green-400/70" />
            </div>
          </div>
          <div className="mt-4 flex items-end gap-2 h-32">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-white/30 to-white/90"
                style={{
                  ["--h" as string]: `${h}%`,
                  height: `${h}%`,
                  animation: `bar-grow 1.2s ${i * 0.12}s ease-out both`,
                }}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-white">
            <div className="rounded-lg bg-white/10 px-2 py-2">
              <div className="text-[9px] uppercase text-white/60">Revenue</div>
              <div className="text-sm font-semibold">₹4.2M</div>
            </div>
            <div className="rounded-lg bg-white/10 px-2 py-2">
              <div className="text-[9px] uppercase text-white/60">Growth</div>
              <div className="text-sm font-semibold">+18%</div>
            </div>
            <div className="rounded-lg bg-white/10 px-2 py-2">
              <div className="text-[9px] uppercase text-white/60">Users</div>
              <div className="text-sm font-semibold">12.4K</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating pills */}
      <div className="absolute -top-2 left-4 glass rounded-2xl px-4 py-2 text-white shadow-soft animate-float" style={{ animationDelay: "0.6s" }}>
        <div className="text-[10px] uppercase tracking-widest text-white/60">Focus</div>
        <div className="text-sm font-semibold">Power BI · SQL · Python</div>
      </div>
      <div className="absolute bottom-4 -right-2 glass rounded-2xl px-4 py-2 text-white shadow-soft animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="text-[10px] uppercase tracking-widest text-white/60">CGPA</div>
        <div className="text-sm font-semibold">8.19 / 10</div>
      </div>
    </div>
  );
}

function FloatingDots() {
  const dots = Array.from({ length: 30 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 4 + ((i * 7) % 12);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 8 + ((i * 3) % 10);
        const delay = (i % 7) * 0.6;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/40"
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
      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <span
          key={`r${i}`}
          className="absolute rounded-full border border-white/30"
          style={{
            width: 200,
            height: 200,
            left: `${20 + i * 25}%`,
            top: `${30 + (i % 2) * 20}%`,
            animation: `pulse-ring 6s ${i * 1.5}s ease-out infinite`,
          }}
        />
      ))}
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
const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "V.K.R, V.N.B & A.G.K College of Engineering",
    period: "2023 – 2027",
    grade: "CGPA: 8.19 / 10",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College",
    period: "2023",
    grade: "82%",
  },
  {
    degree: "SSC",
    school: "Ravindra Bharathi School",
    period: "2021",
    grade: "90%",
  },
];

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
                I'm an aspiring Data Analyst with a strong foundation in SQL,
                Python, Excel, Power BI and Google Looker Studio. I enjoy
                cleaning, analyzing, and visualizing data to uncover actionable
                insights that support better decision-making.
              </p>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                My goal is to begin my career as a Data Analyst, contribute to
                data-driven solutions, and continuously enhance my technical and
                analytical skills through real-world projects and lifelong
                learning.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <MiniStat label="Projects" value="7+" />
                <MiniStat label="Certifications" value="9" />
                <MiniStat label="CGPA" value="8.19" />
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
              <ul className="mt-4 space-y-4">
                {EDUCATION.map((e) => (
                  <li key={e.degree} className="border-l-2 border-royal-soft/60 pl-4">
                    <div className="font-display font-semibold text-sm">{e.degree}</div>
                    <div className="text-xs text-white/70">{e.school}</div>
                    <div className="mt-1 flex flex-wrap gap-2 text-[11px]">
                      <span className="rounded-full bg-white/10 px-2 py-0.5">{e.period}</span>
                      <span className="rounded-full bg-royal/30 px-2 py-0.5">{e.grade}</span>
                    </div>
                  </li>
                ))}
              </ul>
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
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- SKILLS ---------------- */
const SKILL_GROUPS = [
  {
    icon: Database,
    title: "Programming",
    items: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    icon: BarChart3,
    title: "Visualization & BI",
    items: [
      { name: "Power BI", level: 92 },
      { name: "Microsoft Excel", level: 90 },
      { name: "Google Looker Studio", level: 82 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    icon: Brain,
    title: "Libraries",
    items: [
      { name: "Pandas", level: 86 },
      { name: "NumPy", level: 82 },
      { name: "Scikit-Learn", level: 78 },
    ],
  },
];

const ANALYTICS_SKILLS = [
  "Data Cleaning",
  "ETL",
  "Dashboard Development",
  "KPI Reporting",
  "Statistical Analysis",
  "Machine Learning",
  "DAX",
  "Power Query",
];

const SOFT_SKILLS = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Skills"
          title="Stack I ship with"
          subtitle="A focused toolkit for analytics, BI and applied machine learning."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group h-full rounded-3xl bg-card p-7 border border-border/60 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal">
                    <g.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy">{g.title}</h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {g.items.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{s.name}</span>
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

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-card p-7 border border-border/60 shadow-soft h-full">
              <h3 className="font-display text-lg font-semibold text-navy">Analytics Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {ANALYTICS_SKILLS.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium rounded-full bg-royal/10 text-royal px-3 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl bg-card p-7 border border-border/60 shadow-soft h-full">
              <h3 className="font-display text-lg font-semibold text-navy">Soft Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {SOFT_SKILLS.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium rounded-full bg-navy/5 text-navy px-3 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
type Project = {
  title: string;
  tags: string[];
  description: string;
  features: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "HR Analytics Dashboard",
    tags: ["Power BI", "DAX", "Excel"],
    description:
      "Interactive HR dashboard analyzing employee attrition, workforce demographics and job satisfaction.",
    features: [
      "Attrition Rate Analysis",
      "Department-wise Distribution",
      "Satisfaction Score Tracking",
      "Retention Recommendations",
    ],
    href: "https://github.com/tejaswilakshmipriyadurgasaga/HR_Analytics-Dashboard",
  },
  {
    title: "Customer Churn Prediction",
    tags: ["Python", "SQL", "Scikit-Learn", "Power BI"],
    description:
      "Machine learning model predicting customer churn with ~78% accuracy, paired with retention insights.",
    features: ["EDA", "Feature Engineering", "Churn Prediction", "Retention Insights"],
    href: "https://github.com/tejaswilakshmipriyadurgasaga/Customer-Churn-Prediction",
  },
  {
    title: "IPL 2026 Team & Player Dashboard",
    tags: ["Power BI", "DAX", "Excel"],
    description:
      "Interactive analysis of IPL team and player performance across venues, matches and toss outcomes.",
    features: [
      "Team Analysis",
      "Player Performance",
      "Venue & Toss Impact",
      "Match Results",
    ],
    href: "https://github.com/tejaswilakshmipriyadurgasaga/-IPL-2026-Team-Player-Performance-Dashboard",
  },
  {
    title: "Zomato Restaurant Analytics",
    tags: ["Power BI", "SQL", "Excel"],
    description:
      "Restaurant ratings, cuisine popularity and pricing trends analyzed across cities.",
    features: [
      "Restaurant Rankings",
      "Cuisine Popularity",
      "Pricing Insights",
      "Market Trends",
    ],
    href: "https://github.com/tejaswilakshmipriyadurgasaga/-Zomato-Restaurant-Analytics-Dashboard-",
  },
  {
    title: "Retail Sales & Revenue Dashboard",
    tags: ["Looker Studio", "Python", "Pandas", "Excel"],
    description:
      "Interactive dashboard covering sales trends, profit margins and customer segments with real-time KPIs.",
    features: [
      "KPI Scorecards",
      "Revenue Analysis",
      "Customer Segmentation",
      "Real-time Tracking",
    ],
    href: "https://github.com/tejaswilakshmipriyadurgasaga/Retail-Sales-Revenue-Dashboard",
  },
  {
    title: "Instagram Analytics Dashboard",
    tags: ["Power BI", "Power Query", "DAX", "Excel"],
    description:
      "Social media performance dashboard tracking follower growth, engagement, reach and top posts.",
    features: [
      "Follower Growth",
      "Engagement Tracking",
      "Reach & Impressions",
      "Top Posts",
    ],
    href: "https://github.com/tejaswilakshmipriyadurgasaga/Instagram-Analytics-Dashboard",
  },
  {
    title: "Investment Analysis Dashboard",
    tags: ["Power BI", "Power Query", "DAX", "Excel"],
    description:
      "Analyzed investment behavior of 40 respondents across savings goals, monitoring habits and information sources.",
    features: [
      "Gender-based Analysis",
      "Investment Objectives",
      "Information Sources",
      "7-page Dashboard",
    ],
    href: LINKS.github,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Projects"
          title="Selected analytics work"
          subtitle="Dashboards, ML models and BI case studies built end-to-end."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <article className="group relative h-full rounded-3xl bg-card border border-border/60 p-7 shadow-soft hover:-translate-y-2 hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-royal to-royal-soft opacity-15 blur-3xl group-hover:opacity-30 transition" />
                <div className="relative flex h-full flex-col">
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
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-2">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-navy hover:bg-navy hover:text-white transition"
                    >
                      <Github size={14} /> View on GitHub
                      <ExternalLink size={12} />
                    </a>
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

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Experience" title="Where I've applied the craft" />
        <Reveal className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-card p-8 border border-border/60 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-royal/10 text-royal shrink-0">
                <Briefcase size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    Python Intern
                  </h3>
                  <span className="text-xs rounded-full bg-royal/10 text-royal px-2.5 py-1">
                    Apr 2025 – Jun 2025
                  </span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  BIST Technologies Private Limited
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/85">
                  {[
                    "Automated data processing tasks using Python",
                    "Cleaned and transformed real-world datasets",
                    "Optimized code performance for analytics pipelines",
                    "Contributed to hands-on data analytics projects",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-royal shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATES ---------------- */
const CERTS = [
  { title: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", href: "https://www.linkedin.com/posts/stlpdurga_python-cisconetworkingacademy-pythoninstitute-activity-7438474726035075072-V4mL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", href: "https://www.linkedin.com/posts/stlpdurga_dataanalytics-cisconetworkingacademy-dataanalyticsessentials-activity-7471164910706663424-KuZQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "SQL & Relational Database 101", issuer: "IBM Skills Network", href: "https://www.linkedin.com/posts/stlpdurga_sql-database-dataanalytics-share-7475871241552277504-AO_-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "Power BI Micro Course", issuer: "Power BI", href: "https://www.linkedin.com/posts/stlpdurga_powerbi-dataanalytics-dataanalyst-activity-7467181662242664449-fVlh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "MS Excel Essentials", issuer: "Uniathena", href: "https://www.linkedin.com/posts/stlpdurga_excel-dataanalytics-dataanalyst-share-7474066345773580288-ZVxZ/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "Python Internship", issuer: "BIST Technologies", href: "https://www.linkedin.com/posts/stlpdurga_pythondeveloper-internshipcompleted-bisttechnologies-activity-7424783920958976000-kKXD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "Tata Data Visualization", issuer: "Tata Group · Forage", href: "https://www.linkedin.com/posts/stlpdurga_tata-forage-datavisualization-activity-7482716333562912770-GF4I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "Data Analytics Job Simulation", issuer: "Quantium · Forage", href: "https://www.linkedin.com/posts/stlpdurga_dataanalytics-quantium-forage-activity-7483203577708953600-SWJO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
  { title: "Quantum Fundamentals Program", issuer: "Emerging Tech", href: "https://www.linkedin.com/posts/stlpdurga_quantumcomputing-emergingtechnology-studentlearning-activity-7438144796558520320-K9fz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMzleQBtRtjC6YqOWEjhcCege6oV65Y-nk" },
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
          subtitle="Continuously learning across analytics, AI and emerging tech. Click any card to view."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/15 transition h-full block"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-10 w-10 rounded-lg bg-royal/25 text-royal-soft">
                      <Sparkles size={18} />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-white/60">
                      Certificate
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-white/50 group-hover:text-white transition" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold leading-snug">
                  {c.title}
                </div>
                <div className="mt-1 text-sm text-white/70">{c.issuer}</div>
                <div className="mt-3 h-px w-10 bg-royal-soft group-hover:w-16 transition-all" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Academic Topper",
    body: "Recognized for highest academic performance in the C.S.E Department.",
  },
  {
    icon: Sparkles,
    title: "National Paper Presentation",
    body: "TATVA 2K26 — Seshadri Rao Gudlavalleru Engineering College.",
  },
  {
    icon: Brain,
    title: "Generative AI Program",
    body: "Skill Development Program — NASSCOM.",
  },
  {
    icon: Briefcase,
    title: "Ignite India 5.0",
    body: "Certificates of Proficiency & Content Completion — Wadhwani Foundation.",
  },
  {
    icon: BarChart3,
    title: "Certified Entrepreneur Trainee",
    body: "Wadhwani Global Entrepreneur Program.",
  },
  {
    icon: Trophy,
    title: "MY Bharat Budget Quest & DFPD-II",
    body: "Ministry of Youth Affairs and Sports.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Achievements" title="Milestones along the way" />
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
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
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
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
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
          subtitle="Open to internships, entry-level Data Analyst roles and collaborations."
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
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={LINKS.email}
                  href={`mailto:${LINKS.email}`}
                />
                <ContactItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/stlpdurga"
                  href={LINKS.linkedin}
                />
                <ContactItem
                  icon={Github}
                  label="GitHub"
                  value="github.com/tejaswilakshmipriyadurgasaga"
                  href={LINKS.github}
                />
                <ContactItem icon={MapPin} label="Location" value={LINKS.location} />
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
        <div className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Saga Tejaswi Lakshmi Priya Durga. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <SocialIcon href={LINKS.linkedin} label="LinkedIn">
            <Linkedin size={16} />
          </SocialIcon>
          <SocialIcon href={LINKS.github} label="GitHub">
            <Github size={16} />
          </SocialIcon>
          <SocialIcon href={`mailto:${LINKS.email}`} label="Email">
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
