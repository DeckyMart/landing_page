import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded'
import GavelRoundedIcon from '@mui/icons-material/GavelRounded'
import { Reveal } from './Reveal'

const PILLARS = [
  {
    icon: VerifiedUserRoundedIcon,
    title: 'Identity-verified Solvers',
    body: 'Every Solver goes through an identity and skills review before they can receive job opportunities.',
  },
  {
    icon: LockRoundedIcon,
    title: 'Payment held until you approve',
    body: 'Funds are secured the moment you accept an offer and only released after you confirm the work is complete.',
  },
  {
    icon: ReviewsRoundedIcon,
    title: 'Reviews from real transactions only',
    body: 'Ratings can only come from customers who actually completed a job through DeckyMart — no fake reviews.',
  },
  {
    icon: GavelRoundedIcon,
    title: 'A real dispute process',
    body: "If something's not right, you can raise it before settlement — DeckyMart reviews the full job evidence before resolving it.",
  },
]

export function TrustSafety() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: 1 }}>
              Trust & safety
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
              Built so you can trust someone you&apos;ve never met
            </Typography>
          </Stack>
        </Reveal>

        <Grid container spacing={4}>
          {PILLARS.map((pillar, index) => (
            <Grid key={pillar.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Reveal delayMs={index * 80}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '14px',
                  bgcolor: 'rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <pillar.icon />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                {pillar.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                {pillar.body}
              </Typography>
            </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
