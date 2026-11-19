import type { ReactNode } from 'react';

interface MarkerNoteProps {
  children: ReactNode;
  className?: string;
  /** pen = readable orange for notes on cream, navy = ink notes, sun = notes on the yellow sticky */
  tone?: 'pen' | 'navy';
  rotate?: boolean;
}

/**
 * Handwritten marker note (Caveat). Brand rules: five words or fewer, always
 * beside a clear normal-font element, 4 to 6 per page, never for headings,
 * buttons, prices, or anything a visitor must read to act.
 */
const MarkerNote = ({ children, className = '', tone = 'pen', rotate = true }: MarkerNoteProps) => {
  return (
    <span
      className={`font-caveat font-bold leading-none ${
        tone === 'pen' ? 'text-pen-text' : 'text-navy'
      } ${rotate ? '-rotate-2' : ''} ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

/** Small hand-drawn curved arrow used next to marker notes. */
export const MarkerArrow = ({
  className = '',
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) => (
  <svg
    viewBox="0 0 40 28"
    fill="none"
    aria-hidden="true"
    className={`${flip ? '-scale-x-100' : ''} ${className}`}
  >
    <path
      d="M4 4 C 14 20, 24 24, 33 22 M33 22 l-7 -1 M33 22 l-2 -7"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MarkerNote;
