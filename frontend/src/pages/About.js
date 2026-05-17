import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function About() {
  const navigate = useNavigate();

  return (
    <main data-testid="about-page" className="px-6 md:px-12">
      <article className="max-w-[760px] mx-auto pt-24 md:pt-36 pb-24 md:pb-36">
        <Reveal>
          <p className="eyebrow mb-6">About</p>
          <h1 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-ink">
            We help people use AI <span className="italic text-terra">like they own it.</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-12 text-[18px] md:text-[19px] leading-[1.7] text-ink">
            RootlinkAI exists because most Indian consultants, coaches, and service businesses don't
            need another tutorial, another newsletter, or another shiny tool. They need someone to sit
            with their actual work — the spreadsheets, the client lists, the half-finished SOPs — and
            put AI inside it in a way that holds up on a Tuesday afternoon.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-[18px] leading-[1.7] text-muted">
            The internet is full of "AI experts" who've never run a business. We started here because
            we did. The first AI workflows we ever built were for our own consulting practice,
            because the cost of one more lost lead or a missed follow-up was real money. That instinct
            — make it work for the way you already operate — is what every engagement is built on.
          </p>
        </Reveal>

        <Reveal>
          <figure className="my-16 md:my-20 border-l-2 border-moss pl-6 md:pl-10">
            <blockquote className="font-serif italic text-[24px] md:text-[30px] leading-[1.3] text-ink">
              AI shouldn't replace your judgment. It should run the repetitive parts so your judgment
              has more room to work.
            </blockquote>
          </figure>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-[28px] md:text-[36px] tracking-tight text-ink leading-[1.15]">
            What we believe
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.7] text-ink">
            <span className="font-medium">Process before tooling.</span>{" "}
            We don't start with "let's set up Claude." We start with how you actually take a client
            from inquiry to delivery, where it leaks, and where AI can quietly carry weight.
          </p>
          <p className="mt-5 text-[17px] md:text-[18px] leading-[1.7] text-ink">
            <span className="font-medium">No template businesses.</span>{" "}
            Your firm isn't a template. The system you walk away with shouldn't be one either.
            Everything is built around how you talk to clients, how you write, how you sell.
          </p>
          <p className="mt-5 text-[17px] md:text-[18px] leading-[1.7] text-ink">
            <span className="font-medium">Hand it over.</span>{" "}
            The goal is never to make you dependent. It's to leave you with something you can run,
            edit, and grow on your own — with support when you want it, not because you're stuck.
          </p>
        </Reveal>

        <Reveal>
          <figure className="my-16 md:my-20 border-l-2 border-terra pl-6 md:pl-10">
            <blockquote className="font-serif italic text-[24px] md:text-[30px] leading-[1.3] text-ink">
              Built in India, for people who run lean teams, real businesses, and want their AI to
              show up the same way they do.
            </blockquote>
          </figure>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-[28px] md:text-[36px] tracking-tight text-ink leading-[1.15]">
            Who this is for
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.7] text-muted">
            You probably found us because you've already tried. You've watched the YouTube videos,
            saved the threads, opened ChatGPT a hundred times. You can see what's possible. You just
            don't have a week to wire it together yourself — and you're past the point where another
            generic Zapier template is going to cut it.
          </p>
          <p className="mt-5 text-[17px] md:text-[18px] leading-[1.7] text-muted">
            That's where we come in.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16 md:mt-20 border-t border-hairline pt-12">
            <h2 className="font-serif text-[28px] md:text-[36px] tracking-tight text-ink leading-[1.15]">
              Want to talk?
            </h2>
            <p className="mt-5 text-[17px] md:text-[18px] leading-[1.7] text-muted max-w-[52ch]">
              The fastest way to find out if we're a fit is the 1:1 session. 90 minutes, your real
              workflow, a concrete plan.
            </p>
            <button
              onClick={() => navigate("/#inquiry")}
              data-testid="about-book-btn"
              className="btn-moss mt-8"
            >
              Book a session
              <ArrowRight size={16} strokeWidth={1.75} />
            </button>
          </div>
        </Reveal>
      </article>
    </main>
  );
}
