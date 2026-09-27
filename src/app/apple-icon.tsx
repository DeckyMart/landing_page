import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: '#0f3460',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="110" height="110" viewBox="0 0 40 40" fill="none">
          <path
            d="M11.5 20.5L17 26L28.5 13.5"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="30.5" cy="10.5" r="4" fill="#2eb271" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
