type BrandMarkProps = {
  size?: number
}

/**
 * DeckyMart brand mark — a verified-checkmark badge: navy rounded-square
 * base (brand primary) with a white check and a green "match confirmed"
 * accent dot. Pure SVG so it scales cleanly at any size (header, footer,
 * favicon, OG image) with no raster asset to manage.
 */
export function BrandMark({ size = 34 }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DeckyMart logo"
    >
      <rect width="40" height="40" rx="11" fill="#0f3460" />
      <path
        d="M11.5 20.5L17 26L28.5 13.5"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30.5" cy="10.5" r="4" fill="#2eb271" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  )
}
