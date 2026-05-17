import React, { useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";

const BUSINESS_TYPES = [
  "Consultant",
  "Coach",
  "Solopreneur",
  "E-commerce / Product Brand",
  "Agency",
  "Other",
];

const START_TIMELINES = ["This month", "1–3 months", "Just exploring"];

const SERVICES_INTERESTED = [
  "Claude Workspace Setup",
  "AI Workflows & Automation",
  "AI Content Systems",
  "AI-Powered Website Design",
  "Not sure yet — help me figure out",
  "Other (please specify)",
];

const OTHER_OPTION = "Other (please specify)";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    business_type: "",
    services_interested: [],
    services_other: "",
    needs: "",
    start_timeline: "",
    tools: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const toggleService = (s) => {
    setForm((prev) => {
      const has = prev.services_interested.includes(s);
      const next = has
        ? prev.services_interested.filter((x) => x !== s)
        : [...prev.services_interested, s];
      // Clear the "other" text when the option is unchecked.
      const services_other =
        s === OTHER_OPTION && has ? "" : prev.services_other;
      return {
        ...prev,
        services_interested: next,
        services_other,
      };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.whatsapp ||
      !form.business_type ||
      !form.needs ||
      !form.start_timeline
    ) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (form.services_interested.length === 0) {
      toast.error("Please select at least one service you're interested in.");
      return;
    }
    if (
      form.services_interested.includes(OTHER_OPTION) &&
      !form.services_other.trim()
    ) {
      toast.error("Please tell me what you're looking for.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        whatsapp: form.whatsapp,
        business_type: form.business_type,
        services_interested: form.services_interested.join(", "),
        services_other: form.services_other,
        needs: form.needs,
        start_timeline: form.start_timeline,
        tools: form.tools,
        _subject: `New RootlinkAI inquiry from ${form.name}`,
      };
      const res = await fetch("https://formspree.io/f/mnjraoya", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setDone(true);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or email me directly.");
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
          Thanks for reaching out.
        </h3>
        <p className="mt-4 text-muted max-w-[440px]">
          I read every inquiry personally and I'll be in touch. No drip sequence, no auto-funnel —
          just a real reply from a real person.
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

        <div className="mt-10 pt-8 pb-8 border-t border-b border-hairline" data-testid="inquiry-services-group">
          <label className="block text-[16px] font-medium text-ink">
            Which services are you interested in?
          </label>
          <p className="text-[13px] text-muted mt-1">Select all that apply</p>

          <div className="mt-5 flex flex-col gap-3">
            {SERVICES_INTERESTED.map((s) => {
              const checked = form.services_interested.includes(s);
              const id = `svc-${s.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`;
              return (
                <label
                  key={s}
                  htmlFor={id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span
                    aria-hidden="true"
                    className={`inline-flex items-center justify-center w-[18px] h-[18px] border transition-colors duration-200 ${
                      checked ? "bg-moss border-moss" : "bg-transparent border-hairline group-hover:border-muted"
                    }`}
                    style={{ borderRadius: "2px" }}
                  >
                    {checked && <Check size={12} strokeWidth={3} className="text-paper" />}
                  </span>
                  <input
                    id={id}
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleService(s)}
                    data-testid={`inquiry-service-${id}`}
                  />
                  <span className="text-[16px] text-ink select-none">{s}</span>
                </label>
              );
            })}
          </div>

          {form.services_interested.includes(OTHER_OPTION) && (
            <div className="mt-5 pl-[30px]" data-testid="inquiry-services-other-wrap">
              <input
                type="text"
                value={form.services_other}
                onChange={change("services_other")}
                placeholder="Tell me what you're looking for"
                className="field"
                data-testid="inquiry-services-other"
                required
              />
            </div>
          )}
        </div>

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

        <label className="eyebrow mt-6">When do you want to get started?</label>
        <select
          required
          value={form.start_timeline}
          onChange={change("start_timeline")}
          className="field appearance-none cursor-pointer"
          data-testid="inquiry-start-timeline"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23141210' stroke-width='1.25' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 4px center",
          }}
        >
          <option value="" disabled>Select a timeline</option>
          {START_TIMELINES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

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
        No sales sequence, no spam. A real reply from a real person.
      </p>
    </form>
  );
}
