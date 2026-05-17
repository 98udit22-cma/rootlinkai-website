import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Check } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BUSINESS_TYPES = ["Consultant", "Coach", "Solopreneur", "Small Agency", "Other"];

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    business_type: "",
    needs: "",
    tools: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.whatsapp || !form.business_type || !form.needs) {
      toast.error("Please fill all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      setDone(true);
    } catch (err) {
      console.error(err);
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Something went wrong. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div
        data-testid="inquiry-success"
        className="border border-hairline p-10 md:p-12"
      >
        <div className="w-10 h-10 rounded-full bg-moss flex items-center justify-center mb-6">
          <Check size={20} className="text-paper" strokeWidth={2} />
        </div>
        <h3 className="font-serif text-[28px] md:text-[34px] tracking-tight text-ink leading-[1.15]">
          Thank you. We've got it.
        </h3>
        <p className="mt-4 text-muted max-w-[420px]">
          We'll read what you sent and reply within 24 hours — from a real person, with a real
          answer. No drip sequence, no auto-funnel.
        </p>
        <p className="mt-6 text-[14px] text-muted">
          In the meantime, you can read about{" "}
          <a href="/services" className="text-link">how we work</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      data-testid="inquiry-form"
      onSubmit={submit}
      className="border border-hairline p-8 md:p-10"
      noValidate
    >
      <div className="grid grid-cols-1 gap-y-1">
        <label className="eyebrow mt-2">Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={change("name")}
          placeholder="Your full name"
          className="field"
          data-testid="inquiry-name"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div>
            <label className="eyebrow mt-6 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={change("email")}
              placeholder="you@domain.com"
              className="field"
              data-testid="inquiry-email"
            />
          </div>
          <div>
            <label className="eyebrow mt-6 block">WhatsApp</label>
            <input
              type="tel"
              required
              value={form.whatsapp}
              onChange={change("whatsapp")}
              placeholder="+91 98765 43210"
              className="field"
              data-testid="inquiry-whatsapp"
            />
          </div>
        </div>

        <label className="eyebrow mt-6">Business type</label>
        <select
          required
          value={form.business_type}
          onChange={change("business_type")}
          className="field appearance-none cursor-pointer"
          data-testid="inquiry-business-type"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23141210' stroke-width='1.25' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 4px center",
          }}
        >
          <option value="" disabled>Select your business</option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label className="eyebrow mt-6">What do you need help with?</label>
        <textarea
          required
          value={form.needs}
          onChange={change("needs")}
          placeholder="Tell us a bit about your work and where AI might fit. Even a paragraph is enough."
          className="field"
          rows={4}
          data-testid="inquiry-needs"
        />

        <label className="eyebrow mt-6">Tools you currently use <span className="lowercase tracking-normal text-[11px] text-muted">(optional)</span></label>
        <input
          type="text"
          value={form.tools}
          onChange={change("tools")}
          placeholder="e.g. Notion, Google Workspace, Zapier, Calendly"
          className="field"
          data-testid="inquiry-tools"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-moss mt-10"
        data-testid="inquiry-submit"
      >
        {loading ? "Sending…" : "Send inquiry"}
      </button>

      <p className="mt-4 text-[13px] text-muted">
        We reply within 24 hours. No sales sequence, no spam.
      </p>
    </form>
  );
}
