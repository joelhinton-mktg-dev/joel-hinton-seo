interface SunriseMarkProps {
  size?: number;
  /** navy for light backgrounds (header), blue for the navy footer */
  variant?: 'navy' | 'blue';
  className?: string;
}

/**
 * The AIO Growth sunrise mark (Brand direction v2, finalist B).
 * Rounded square, white sunrise semicircle over a horizontal line, orange sun dot.
 * Replaces the stock brain icon everywhere.
 */
const SunriseMark = ({ size = 40, variant = 'navy', className = '' }: SunriseMarkProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="AIO Growth sunrise logo"
      className={className}
    >
      <rect width="48" height="48" rx="11" fill={variant === 'navy' ? '#14213D' : '#0055FF'} />
      {/* Sunrise semicircle */}
      <path
        d="M13 29 A11 11 0 0 1 35 29"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Horizon line */}
      <line x1="9" y1="33.5" x2="39" y2="33.5" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
      {/* Sun dot */}
      <circle cx="24" cy="29" r="3.4" fill="#F97415" />
    </svg>
  );
};

export default SunriseMark;
