import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import InquiryForm from "../components/InquiryForm";

export default function Contact() {
  return (
    <main data-testid="contact-page" className="px-6 md:px-12">
      <div className="max-w-content mx-auto pt-24 md:pt-36 pb-24 md:pb-36">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-serif text-[44px] md:text-[72px] leading-[1.03] tracking-[-0.022em] text-ink max-w-[18ch]">
            Tell us what you're working on.
          </h1>
          <p className="mt-8 text-[18px] md:text-[19px] text-muted leading-[1.6] max-w-[58ch]">
            No sales sequence, no spam. Just a real conversation about what you're trying to do and
            whether we're the right fit to help.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-7">
            <InquiryForm />
          </Reveal>

          <Reveal className="md:col-span-5" delay={100}>
            <p className="eyebrow mb-5">Or reach out directly</p>

            <div className="space-y-8">
              <div className="border-t border-hairline pt-6">
                <div className="flex items-start gap-3">
                  <Mail size={18} strokeWidth={1.5} className="text-moss mt-1" />
                  <div>
                    <p className="text-[13px] text-muted tracking-wide uppercase">Email</p>
                    <a
                      href="mailto:98udit22@gmail.com"
                      className="text-link text-[17px] mt-1 inline-block"
                      data-testid="contact-email"
                    >
                      98udit22@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-hairline pt-6">
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} strokeWidth={1.5} className="text-moss mt-1" />
                  <div>
                    <p className="text-[13px] text-muted tracking-wide uppercase">WhatsApp</p>
                    <p className="text-[17px] text-ink mt-1" data-testid="contact-whatsapp">
                      Share your number in the form and we'll reach out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-hairline pt-6">
                <p className="text-[13px] text-muted tracking-wide uppercase mb-2">Hours</p>
                <p className="text-[16px] text-ink">
                  Monday — Friday, 10am to 7pm IST
                </p>
                <p className="text-[14px] text-muted mt-1">
                  We're based in India. We answer everything ourselves.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
