import React from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="border-t border-hairline mt-24">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-baseline gap-1">
              <span className="font-serif text-[24px] leading-none tracking-tight text-ink">
                Rootlink
              </span>
              <span className="text-[11px] tracking-[0.18em] uppercase font-medium text-moss">
                AI
              </span>
            </Link>
            <p className="mt-5 text-[15px] text-muted leading-relaxed max-w-[280px]">
              AI and automation for Indian consultants, coaches, and service businesses.
            </p>
            <p className="mt-4 text-[13px] text-muted tracking-wide">Building in India.</p>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow mb-5">Sitemap</p>
            <ul className="space-y-3">
              <li>
                <Link to="/services" data-testid="footer-link-services" className="text-[15px] text-ink hover:text-terra transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" data-testid="footer-link-about" className="text-[15px] text-ink hover:text-terra transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" data-testid="footer-link-contact" className="text-[15px] text-ink hover:text-terra transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/#newsletter" data-testid="footer-link-newsletter" className="text-[15px] text-ink hover:text-terra transition-colors duration-200">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="eyebrow mb-5">Follow</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/udit-agrawal-2204ap"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
                className="text-ink hover:text-terra transition-colors duration-200"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-hairline mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[13px] text-muted">© RootlinkAI {year}</p>
          <p className="text-[13px] text-muted">Made with care. No fluff.</p>
        </div>
      </div>
    </footer>
  );
}
