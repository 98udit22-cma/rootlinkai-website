import React, { useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";

const NEWSLETTER_ENDPOINT = "https://formspree.io/f/mlgvrarg";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New RootlinkAI newsletter signup",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div data-testid="newsletter-success" className="flex items-start gap-3 max-w-[560px]">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-[26px] h-[26px] bg-moss mt-1 flex-shrink-0"
          style={{ borderRadius: "2px" }}
        >
          <Check size={14} strokeWidth={2.5} className="text-paper" />
        </span>
        <p className="text-[17px] md:text-[18px] text-ink leading-[1.55]">
          Thanks — you're on the list. I'll send the first note soon.
        </p>
      </div>
    );
  }

  return (
    <div data-testid="newsletter-block">
      <form
        onSubmit={submit}
        data-testid="newsletter-form"
        className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 sm:gap-6 max-w-[560px]"
      >
        <div className="flex-1">
          <label className="eyebrow block mb-1">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="field"
            data-testid="newsletter-email"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-moss"
          data-testid="newsletter-submit"
        >
          {loading ? "Sending…" : "Subscribe to newsletter"}
        </button>
      </form>
      <p className="mt-4 text-[13px] text-muted">Be one of the first to join.</p>
    </div>
  );
}
