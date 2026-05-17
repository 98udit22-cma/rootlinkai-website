import React from "react";

/**
 * RootLinkAnimation
 * Renders the wordmark "root [drawn line] link" with the line animating once on load.
 */
export default function RootLinkAnimation() {
  return (
    <div
      data-testid="root-link-animation"
      className="flex items-center gap-3 md:gap-4 select-none"
    >
      <span className="font-serif italic text-[22px] md:text-[26px] text-ink leading-none">
        root
      </span>
      <svg
        width="84"
        height="16"
        viewBox="0 0 84 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="hero-line"
          d="M2 8 H70 M64 3 L72 8 L64 13"
          stroke="#1F3D2F"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-serif italic text-[22px] md:text-[26px] text-moss leading-none">
        link
      </span>
    </div>
  );
}
