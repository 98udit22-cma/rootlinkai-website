import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import RootLinkAnimation from "../components/RootLinkAnimation";
import InquiryForm from "../components/InquiryForm";
import NewsletterForm from "../components/NewsletterForm";

const services = [
  {
    n: "01",
    title: "Claude Workspace Setup",
    tagline: "Claude, set up properly for you.",
    body: "We configure Claude for the way you work — projects, custom instructions, skills, and integrations with the tools you already use. You stop fumbling and start using it like you've had it for years. By the end, Claude works like a senior AI agent for your daily work — not a chatbot you forget about.",
  },
  {
    n: "02",
    title: "AI Workflows & Automation",
    tagline: "Workflows that run themselves.",
    body: "We design and build no-code AI agents and automations that handle the repetitive parts of your business — client intake, content pipelines, follow-ups, reporting, lead capture, and the small daily tasks that quietly drain your time. AI does the thinking. Automation does the running. Built around your process, not someone else's template.",
  },
  {
    n: "03",
    title: "AI Content Systems",
    tagline: "Content that sounds and looks like you.",
    body: "We build content systems that handle both sides of your output — written content (LinkedIn posts, newsletters, articles) that captures your voice, and visual content (image ads, short-form video, branded creatives) that captures your look. No generic ChatGPT tone. No template-y AI ad visuals. Built around your brand.",
  },
  {
    n: "04",
    title: "AI-Powered Website Design",
    tagline: "Websites that tell your actual story.",
    body: "We design and build AI-powered websites that tell your actual story — not a templated version of it. Crafted visuals, clean copy, and AI tools working behind the scenes so you ship fast without the design quality dropping. For businesses and brands who want a site that sounds and looks like them.",
  },
];

const audience = [
  "Consultants who want to stop redoing the same workflow",
  "Coaches running 1:1 practices solo",
  "Solopreneurs juggling 5 tools to do 1 job",
  "Agencies tired of patching things together",
  "Brand owners who need AI-powered workflows and systems",
];

const steps = [
  { n: "01", title: "Understand", body: "We map how you actually work today and where AI fits." },
  { n: "02", title: "Build", body: "We set up tools, workflows, and systems around your real process." },
  { n: "03", title: "Hand off", body: "You get a system you can run yourself, plus support if you want it." },
];

export default function Home() {
  const scrollTo = (id) => (e) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section className="px-6 md:px-12">
        <div className="max-w-content mx-auto pt-24 md:pt-36 pb-24 md:pb-36">
          <div className="mb-10 md:mb-14">
            <RootLinkAnimation />
          </div>

          <h1 className="font-serif text-[44px] sm:text-[58px] md:text-[78px] lg:text-[92px] leading-[1.02] tracking-[-0.025em] text-ink max-w-[14ch]">
            AI, <span className="text-terra italic font-light">grounded</span> in how you actually work.
          </h1>

          <p className="mt-8 md:mt-10 max-w-[640px] text-[18px] md:text-[20px] leading-[1.55] text-muted">
            RootlinkAI helps Indian consultants, coaches, and service businesses set up Claude, build
            workflows, and create content systems that fit how you already operate. No code. No fluff.
            No theater.
          </p>

          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-8">
            <button
              data-testid="hero-book-btn"
              onClick={scrollTo("inquiry")}
              className="btn-moss"
            >
              Book a 1:1 session
              <ArrowRight size={16} strokeWidth={1.75} />
            </button>
            <a
              href="#how"
              onClick={scrollTo("how")}
              data-testid="hero-how-link"
              className="text-link text-[15px]"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="border-t border-hairline" />
      </div>

      {/* WHO THIS IS FOR */}
      <section className="px-6 md:px-12">
        <div className="max-w-content mx-auto py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-6">Built for</p>
            <h2 className="font-serif text-[34px] md:text-[52px] tracking-tight leading-[1.08] text-ink max-w-[18ch]">
              Service businesses that move faster than their tools.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8 mt-16 md:mt-20">
            {audience.map((a, i) => (
              <Reveal key={a} delay={i * 80}>
                <div className="flex items-start gap-3">
                  <span className="inline-block w-[6px] h-[6px] rounded-full bg-moss mt-[10px] flex-shrink-0" />
                  <p className="text-[16px] md:text-[17px] text-ink leading-[1.55]">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="border-t border-hairline" />
      </div>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-12">
        <div className="max-w-content mx-auto py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-6">Services</p>
            <h2 className="font-serif text-[34px] md:text-[52px] tracking-tight leading-[1.08] text-ink max-w-[16ch]">
              Four ways we work with you.
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-20">
            {services.map((s, i) => (
              <Reveal key={s.n}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 ${
                    i !== 0 ? "border-t border-hairline" : ""
                  }`}
                >
                  <div className="md:col-span-2">
                    <span className="font-serif text-[28px] md:text-[40px] text-muted leading-none">
                      {s.n}
                    </span>
                  </div>
                  <div className="md:col-span-10 max-w-[640px]">
                    <h3 className="font-serif text-[26px] md:text-[34px] tracking-tight text-ink leading-[1.15]">
                      {s.title}
                    </h3>
                    <p className="mt-3 font-serif italic text-[18px] md:text-[20px] text-terra">
                      {s.tagline}
                    </p>
                    <p className="mt-5 text-[16px] md:text-[17px] text-muted leading-[1.65]">
                      {s.body}
                    </p>
                    <Link
                      to="/services"
                      data-testid={`service-learn-more-${s.n}`}
                      className="text-link text-[14px] mt-6 inline-flex items-center gap-1"
                    >
                      Learn more
                      <ArrowUpRight size={14} strokeWidth={1.75} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="border-t border-hairline" />
      </div>

      {/* HOW WE WORK */}
      <section id="how" className="px-6 md:px-12">
        <div className="max-w-content mx-auto py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-6">How we work</p>
            <h2 className="font-serif text-[34px] md:text-[52px] tracking-tight leading-[1.08] text-ink max-w-[14ch]">
              Simple, deliberate, hands-on.
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div
                  className={`p-0 md:px-8 py-8 md:py-0 ${
                    i !== 0 ? "border-t md:border-t-0 md:border-l border-hairline" : ""
                  } ${i === 0 ? "md:pl-0" : ""}`}
                >
                  <p className="font-serif text-[22px] text-muted leading-none">{s.n}</p>
                  <h3 className="font-serif text-[28px] md:text-[32px] tracking-tight text-ink mt-4">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[16px] text-muted leading-[1.6] max-w-[28ch]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE 1:1 SESSION */}
      <section className="px-0">
        <div style={{ backgroundColor: "#FAF1EA" }}>
          <div className="max-w-content mx-auto px-6 md:px-12 py-24 md:py-36">
            <Reveal>
              <p className="eyebrow mb-6">The 1:1 session</p>
              <h2 className="font-serif text-[34px] md:text-[52px] tracking-tight leading-[1.08] text-ink max-w-[16ch]">
                Start with a 1:1 session.
              </h2>
            </Reveal>

            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <Reveal className="md:col-span-7">
                <p className="text-[18px] md:text-[19px] leading-[1.65] text-ink max-w-[52ch]">
                  A 90-minute working session where we map your workflow, identify where AI actually
                  fits, and walk away with a concrete plan you can act on. If we're a fit to build it
                  together, we'll talk about that next.
                </p>
                <button
                  onClick={scrollTo("inquiry")}
                  data-testid="session-book-btn"
                  className="btn-moss mt-10"
                >
                  Book your session
                  <ArrowRight size={16} strokeWidth={1.75} />
                </button>
              </Reveal>

              <Reveal className="md:col-span-5" delay={120}>
                <p className="eyebrow mb-5">What you'll leave with</p>
                <ul className="space-y-4">
                  {[
                    "A clear AI implementation plan",
                    "Identified workflow opportunities",
                    "Tool recommendations specific to your business",
                    "A written follow-up doc",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="inline-block w-[6px] h-[6px] rounded-full bg-moss mt-[10px] flex-shrink-0" />
                      <span className="text-[16px] text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="px-6 md:px-12">
        <div className="max-w-content mx-auto py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-6">Trust</p>
            <h2 className="font-serif text-[34px] md:text-[52px] tracking-tight leading-[1.08] text-ink max-w-[18ch]">
              Built by someone who's done it.
            </h2>
            <p className="mt-8 text-[17px] md:text-[18px] text-muted leading-[1.65] max-w-[58ch]">
              Practical, hands-on, no-jargon. The work isn't built on slide decks or hand-waving — it's
              built on real systems run inside real businesses. You'll get straight answers, an honest
              read on what's worth doing, and a partner who shows up.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-16 md:mt-24 border-t border-hairline pt-12 md:pt-16 max-w-[680px]">
              <p className="eyebrow mb-6">Building in the open</p>
              <h3 className="font-serif text-[28px] md:text-[40px] tracking-tight leading-[1.1] text-ink max-w-[20ch]">
                Onboarding the first founding clients now.
              </h3>
              <p className="mt-6 text-[17px] md:text-[18px] text-muted leading-[1.65] max-w-[58ch]">
                RootlinkAI is new — I'm working with the first cohort of founding clients and sharing
                what I'm learning along the way. Real case studies and client stories will go here as
                the work happens. If you want to be part of the founding group, the inquiry form is
                the way in.
              </p>
              <button
                onClick={scrollTo("inquiry")}
                data-testid="founding-list-btn"
                className="btn-moss mt-8"
              >
                Join the founding list
                <ArrowRight size={16} strokeWidth={1.75} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="px-0">
        <div style={{ backgroundColor: "#FAF1EA" }}>
          <div className="max-w-content mx-auto px-6 md:px-12 py-24 md:py-32">
            <Reveal>
              <p className="eyebrow mb-6">Newsletter</p>
              <h2 className="font-serif text-[34px] md:text-[52px] tracking-tight leading-[1.08] text-ink max-w-[18ch]">
                Notes on AI, written for builders like you.
              </h2>
              <p className="mt-6 text-[17px] md:text-[18px] text-muted leading-[1.65] max-w-[58ch]">
                Less hype. More signal. Once a month — what's changing in AI, what's actually
                working, and what to skip. Written for Indian consultants and service businesses.
              </p>
            </Reveal>

            <Reveal className="mt-10 md:mt-12" delay={80}>
              <NewsletterForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section id="inquiry" className="px-6 md:px-12">
        <div className="max-w-content mx-auto py-24 md:py-36">
          <Reveal>
            <p className="eyebrow mb-6">Inquiry</p>
            <h2 className="font-serif text-[34px] md:text-[52px] tracking-tight leading-[1.08] text-ink max-w-[18ch]">
              Tell us what you're working on.
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-7">
              <InquiryForm />
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <p className="font-serif italic text-[22px] md:text-[26px] text-ink leading-[1.35] max-w-[26ch]">
                Real replies from a real person.
              </p>
              <p className="mt-5 text-[16px] text-muted leading-[1.65] max-w-[36ch]">
                No sales sequence, no spam. Just a real conversation about what you're trying to do
                and whether we're the right fit to help.
              </p>
              <div className="mt-10 border-t border-hairline pt-6">
                <p className="eyebrow mb-3">Or reach out directly</p>
                <p className="text-[15px] text-ink">
                  <a className="text-link" href="mailto:98udit22@gmail.com">98udit22@gmail.com</a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
