'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import type { ReactNode } from 'react'
import { theme } from '@/theme/theme'

/**
 * MUI's official Next.js App Router integration: AppRouterCacheProvider
 * injects Emotion's generated CSS during SSR so styles are present on
 * first paint (no flash of unstyled content), then hands off to the
 * client-side cache after hydration.
 */
export function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
