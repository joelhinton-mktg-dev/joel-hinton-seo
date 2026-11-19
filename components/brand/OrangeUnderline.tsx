import type { ReactNode } from 'react';

/**
 * Hand-drawn orange underline swoosh used under the key phrase in a headline
 * (the "pen" stroke from Brand direction v2).
 */
const OrangeUnderline = ({ children }: { children: ReactNode }) => {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 220 14"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute left-0 -bottom-1 h-[0.24em] w-full"
      >
        <path
          d="M4 10 C 60 3, 160 3, 216 7"
          fill="none"
          stroke="#F97415"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default OrangeUnderline;
