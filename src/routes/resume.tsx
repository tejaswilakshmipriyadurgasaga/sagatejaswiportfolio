import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import resumeAsset from "@/assets/SAGA_TEJASWI.pdf.asset.json";

const RESUME_VIEW_URL = resumeAsset.url;
const RESUME_DOWNLOAD_URL = "/api/public/resume?download=1";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Saga Tejaswi Data Analyst" },
      {
        name: "description",
        content:
          "Open and download Saga Tejaswi Lakshmi Priya Durga's data analyst resume with education, certifications, analytics projects and BI skills.",
      },
      { property: "og:title", content: "Resume — Saga Tejaswi Data Analyst" },
      {
        property: "og:description",
        content:
          "View Saga Tejaswi Lakshmi Priya Durga's recruiter-ready resume for Data Analyst and Business Intelligence Analyst roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Resume — Saga Tejaswi Data Analyst" },
      {
        name: "twitter:description",
        content:
          "Open and download Saga Tejaswi's resume for data analytics, Power BI and business intelligence roles.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <section className="hero-bg min-h-screen px-5 py-6 sm:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col gap-5">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={16} /> Portfolio
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                href={RESUME_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <ExternalLink size={16} /> Open PDF
              </a>
              <a
                href={RESUME_DOWNLOAD_URL}
                className="inline-flex items-center gap-2 rounded-full bg-royal px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                <Download size={16} /> Download
              </a>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-soft">
                Resume
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-5xl">
                Saga Tejaswi Lakshmi Priya Durga
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                Aspiring Data Analyst · Business Intelligence Analyst · Power BI Developer
              </p>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden rounded-3xl border border-white/15 bg-white shadow-glow">
            <object
              aria-label="Saga Tejaswi resume PDF"
              data={RESUME_VIEW_URL}
              type="application/pdf"
              className="h-[76vh] w-full bg-white sm:h-[78vh]"
            >
              <div className="flex h-[76vh] flex-col items-center justify-center gap-4 bg-white px-6 text-center text-navy sm:h-[78vh]">
                <p className="max-w-md text-sm font-medium">
                  Your browser cannot preview this PDF inline.
                </p>
                <a
                  href={RESUME_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                >
                  <ExternalLink size={16} /> Open Resume
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>
    </main>
  );
}