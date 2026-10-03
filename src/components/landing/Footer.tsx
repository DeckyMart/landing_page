import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import { BrandMark } from './BrandMark'
import { APP_LINKS } from '@/lib/appLinks'

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Trades we cover', href: '#trades' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [{ label: 'Our team', href: '#team' }],
  },
  {
    title: 'Customers',
    links: [
      { label: 'Get help now', href: APP_LINKS.customerSignUp },
      { label: 'Sign in', href: APP_LINKS.signIn },
    ],
  },
  {
    title: 'For Solvers',
    links: [
      { label: 'Become a Solver', href: APP_LINKS.solverSignUp },
      { label: 'Solver sign in', href: APP_LINKS.solverSignIn },
    ],
  },
]

export function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 8 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2, alignItems: 'center' }}>
              <BrandMark size={32} />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                DeckyMart
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 280 }}>
              A problem-first marketplace. Describe what you need, and DeckyMart matches you with a verified,
              nearby professional — starting with automobile trades in Lagos.
            </Typography>
          </Grid>

          {COLUMNS.map((column) => (
            <Grid key={column.title} size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
                {column.title}
              </Typography>
              <Stack spacing={1.25}>
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href} underline="hover" sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} DeckyMart. Pilot launch — automobile trades.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Lagos, Nigeria
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
