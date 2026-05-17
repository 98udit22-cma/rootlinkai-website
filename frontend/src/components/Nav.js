import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById("inquiry");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/#inquiry");
    }
  };

  return (
    <header
      data-testid="site-nav"
      className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-sm transition-colors duration-200 ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" data-testid="nav-logo" className="flex items-baseline gap-1 group">
            <span className="font-serif text-[26px] leading-none tracking-tight text-ink">
              Rootlink
            </span>
            <span className="text-[11px] tracking-[0.18em] uppercase font-medium text-moss mt-0.5 group-hover:text-terra transition-colors duration-200">
              AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-[14px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-moss" : "text-ink hover:text-terra"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={handleBook}
              data-testid="nav-book-session-btn"
              className="btn-moss text-[14px]"
              style={{ padding: "10px 18px" }}
            >
              Book a session
            </button>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            data-testid="nav-mobile-toggle"
            className="md:hidden text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 border-t border-hairline pt-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className="font-serif text-[22px] text-ink"
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={handleBook}
              data-testid="nav-mobile-book-btn"
              className="btn-moss w-fit mt-2"
            >
              Book a session
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
