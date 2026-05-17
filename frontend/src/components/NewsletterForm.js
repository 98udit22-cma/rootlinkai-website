import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

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
      const res = await axios.post(`${API}/newsletter`, { email });
      if (res.data.status === "already_subscribed") {
        toast.success("You're already on the list.");
      } else {
        toast.success("You're in. Check your inbox in a few weeks.");
      }
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || "Please enter a valid email.";
      toast.error(typeof msg === "string" ? msg : "Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
      <p className="mt-4 text-[13px] text-muted">
        {subscribed ? "Thanks. You're one of the first." : "Be one of the first to join."}
      </p>
    </div>
  );
}
