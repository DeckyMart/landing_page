'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'

interface RevealProps {
  children: ReactNode
  /** Stagger successive Reveal siblings without extra markup. */
  delayMs?: number
  /** Passed through to the wrapping Box — e.g. { height: '100%' } so an
   * equal-height card grid still stretches correctly through the wrapper. */
  sx?: BoxProps['sx']
}

/**
 * Minimal, dependency-free scroll-entrance effect: fades and lifts
 * children in once they cross the viewport, via IntersectionObserver.
 * No animation library added for this — a single observer + CSS
 * transition covers the "subtle entrance on scroll" requirement without
 * a new dependency. Respects prefers-reduced-motion by skipping the
 * transform/opacity animation entirely (content is simply visible).
 */
export function Reveal({ children, delayMs = 0, sx }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(media.matches)

    const node = ref.current
    if (!node) return

    if (media.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      sx={[
        reduceMotion
          ? {}
          : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 500ms ease ${delayMs}ms, transform 500ms ease ${delayMs}ms`,
            },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  )
}
