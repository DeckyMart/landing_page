import { createTheme } from '@mui/material/styles'

/**
 * Same brand palette used across web-app/admin-panel/mobile-app
 * (DaisyUI theme tokens: --color-primary #0f3460, --color-base-200
 * #f5f6fa, etc.) so the marketing site and the product feel like one
 * system, even though this app styles with MUI instead of Tailwind.
 */
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f3460',
      light: '#3d6ea3',
      dark: '#0a2544',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2eb271',
      contrastText: '#ffffff',
    },
    warning: { main: '#f2ab14' },
    error: { main: '#e74c3c' },
    success: { main: '#2eb271' },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1c2029',
      secondary: '#5b6472',
    },
    divider: '#e5e7eb',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: 'var(--font-inter), "Segoe UI", system-ui, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, paddingInline: '20px', paddingBlock: '10px' },
        sizeLarge: { paddingInline: '28px', paddingBlock: '14px', fontSize: '1rem' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 700 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})
