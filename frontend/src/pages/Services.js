import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

const detail = [
  {
    n: "01",
    title: "Claude Workspace Setup",
    tagline: "Claude, set up properly for you.",
    intro:
      "We configure Claude end-to-end so it feels like a colleague who already knows your business, your voice, and the way you make decisions. By the end, Claude works like a senior AI agent for your daily work — not a chatbot you forget about.",
    includes: [
      "Custom instructions tuned to your tone and decision style",
      "Projects scaffolded around your real client work",
      "Skills, files, and reference docs loaded and labelled",
      "Integrations with your existing tools (Notion, Drive, Gmail, calendars)",
      "A short live walkthrough so you actually use it after we leave",
    ],
    forYou:
      "Consultants and coaches who've tried Claude or ChatGPT a dozen times but still default to typing the same prompts from scratch.",
    outcome:
      "A Claude workspace you open every morning instead of forgetting about by Wednesday.",
  },
  {
    n: "02",
    title: "AI Workflows & Automation",
    tagline: "Workflows that run themselves.",
    intro:
      "We design and build no-code AI agents and automations that handle the repetitive parts of your business — client intake, content pipelines, follow-ups, reporting, lead capture, and the small daily tasks that quietly drain your time. AI does the thinking. Automation does the running. Built around your process, not someone else's template.",
    includes: [
      "Client intake and onboarding flows",
      "Content pipelines that move from idea to draft to publish",
      "Follow-up sequences that don't sound like marketing",
      "Internal reporting and dashboards from your existing data",
      "Lead capture, qualification, and routing",
    ],
    forYou:
      "Solopreneurs and small agencies losing hours every week to admin work they shouldn't be touching anymore.",
    outcome:
      "A set of workflows that quietly carry the day-to-day, built around your process — not a template.",
  },
  {
    n: "03",
    title: "AI Content Systems",
    tagline: "Content that sounds and looks like you.",
    intro:
      "We build systems that handle both sides of your content — written and visual — without the generic AI feel.",
    includes: [
      "Voice and tone training across long and short form",
      "LinkedIn, newsletter, and article pipelines",
      "Visual systems for image ads, branded creatives, short video",
      "Asset libraries you can pull from at any time",
      "Light review checkpoints so nothing weird ships",
    ],
    forYou:
      "People who are already publishing or want to start — and refuse to sound like every other ChatGPT output on the timeline.",
    outcome:
      "A content engine that produces work that reads and looks unmistakably like you, on a schedule you control.",
  },
  {
    n: "04",
    title: "AI-Powered Website Design",
    tagline: "Websites that tell your actual story.",
    intro:
      "We design and build AI-powered websites that tell your actual story — not a templated version of it. Crafted visuals, clean copy, and AI tools working behind the scenes so you ship fast without the design quality dropping. For businesses and brands who want a site that sounds and looks like them.",
    includes: [
      "Story-first messaging and copy that reads like you wrote it",
      "Custom visual design — no template lock-in, no Framer clone look",
      "AI-assisted production for faster iteration without losing craft",
      "Built on a modern stack (React or Framer) you can edit yourself",
      "Lightweight SEO, OG, and analytics setup at launch",
    ],
    forYou:
      "Founders, consultants, and brand owners whose current site doesn't reflect what they actually do — and who want a real designer in the loop, not a builder template.",
    outcome:
      "A site that opens conversations instead of explaining itself. Faster to ship, easier to update, and unmistakably yours.",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <main data-testid="services-page" className="px-6 md:px-12">
      <div className="max-w-content mx-auto pt-24 md:pt-36 pb-16 md:pb-24">
        <Reveal>
          <p className="eyebrow mb-6">Services</p>
          <h1 className="font-serif text-[44px] md:text-[72px] leading-[1.03] tracking-[-0.022em] text-ink max-w-[18ch]">
            Four ways we work with you, in depth.
          </h1>
          <p className="mt-8 text-[18px] md:text-[19px] text-muted leading-[1.6] max-w-[58ch]">
            Each engagement is shaped around your business. The structure below is what most clients
            need — but nothing here is a fixed package.
          </p>
        </Reveal>
      </div>

      <div className="max-w-content mx-auto">
        {detail.map((s, i) => (
          <section key={s.n} id={`service-${s.n}`}>
            <Reveal>
              <div
                className={`px-0 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 ${
                  i !== 0 ? "border-t border-hairline" : "border-t border-hairline"
                }`}
              >
                <div className="md:col-span-4 px-6 md:px-12">
                  <p className="font-serif text-[32px] md:text-[44px] text-muted leading-none">
                    {s.n}
                  </p>
                  <h2 className="font-serif text-[28px] md:text-[40px] tracking-tight text-ink leading-[1.1] mt-6">
                    {s.title}
                  </h2>
                  <p className="mt-4 font-serif italic text-[18px] md:text-[20px] text-terra">
                    {s.tagline}
                  </p>
                </div>

                <div className="md:col-span-8 px-6 md:px-12 md:pr-0">
                  <p className="text-[17px] md:text-[18px] text-ink leading-[1.65] max-w-[58ch]">
                    {s.intro}
                  </p>

                  <div className="mt-10">
                    <p className="eyebrow mb-4">What it includes</p>
                    <ul className="space-y-3">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="inline-block w-[6px] h-[6px] rounded-full bg-moss mt-[10px] flex-shrink-0" />
                          <span className="text-[16px] text-ink">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="eyebrow mb-3">Who it's for</p>
                      <p className="text-[16px] text-muted leading-[1.6]">{s.forYou}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">What you walk away with</p>
                      <p className="text-[16px] text-muted leading-[1.6]">{s.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      <section className="px-6 md:px-12 border-t border-hairline">
        <div className="max-w-content mx-auto py-24 md:py-32">
          <Reveal>
            <h2 className="font-serif text-[32px] md:text-[48px] tracking-tight leading-[1.1] text-ink max-w-[18ch]">
              Not sure which one fits? Start with a session.
            </h2>
            <p className="mt-6 text-[17px] md:text-[18px] text-muted leading-[1.6] max-w-[52ch]">
              Most engagements start the same way: a 90-minute working session to figure out which of
              the four (or some combination) is actually right for you.
            </p>
            <button
              onClick={() => navigate("/#inquiry")}
              data-testid="services-book-btn"
              className="btn-moss mt-8"
            >
              Book a 1:1 session
              <ArrowRight size={16} strokeWidth={1.75} />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
