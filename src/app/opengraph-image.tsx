import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'DeckyMart — Describe the problem. We find who can fix it.'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f3460 0%, #0a2547 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
            }}
          >
            <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
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
          <div style={{ display: 'flex', fontSize: 44, fontWeight: 800, color: '#ffffff' }}>
            DeckyMart
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 58, fontWeight: 800, color: '#ffffff', lineHeight: 1.15, maxWidth: 950 }}>
          Describe the problem. We find who can fix it.
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.75)', marginTop: 24, maxWidth: 850 }}>
          Verified, nearby Solvers for roadside and on-site automobile repairs.
        </div>
      </div>
    ),
    { ...size },
  )
}
