import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeRegistry } from '@/theme/ThemeRegistry'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://deckymart.com'
const SITE_NAME = 'DeckyMart'
const TITLE = 'DeckyMart — Describe the problem. We find who can fix it.'
const DESCRIPTION =
  'DeckyMart matches you with verified, nearby tradespeople for roadside and on-site automobile repairs — describe the problem in plain language, compare ranked Solvers, and pay only once the job is done.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'DeckyMart',
    'roadside car repair Lagos',
    'find a mechanic near me',
    'automobile electrician Lagos',
    'vulcanizer near me',
    'verified auto mechanic Nigeria',
    'on-demand vehicle repair',
    'car breakdown help Lagos',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  category: 'Automotive Services',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0f3460',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  description: DESCRIPTION,
  areaServed: {
    '@type': 'City',
    name: 'Lagos',
  },
  serviceType: [
    'Vulcanizer / tire repair',
    'Automobile electrician',
    'Automobile mechanic',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
