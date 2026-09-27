import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded'
import { APP_LINKS } from '@/lib/appLinks'

function AudiencePanel({
  icon: Icon,
  eyebrow,
  title,
  points,
  ctaLabel,
  ctaHref,
  tone,
}: {
  icon: typeof PersonRoundedIcon
  eyebrow: string
  title: string
  points: string[]
  ctaLabel: string
  ctaHref: string
  tone: 'primary' | 'success'
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 3.5, md: 5 },
        borderRadius: 5,
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: '14px',
          bgcolor: tone === 'primary' ? 'primary.main' : 'success.main',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <Icon />
      </Box>
      <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 1 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '1.7rem' }, mb: 2.5 }}>
        {title}
      </Typography>
      <Stack spacing={1.5} sx={{ mb: 4, flex: 1 }}>
        {points.map((point) => (
          <Stack key={point} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
            <CheckCircleRoundedIcon sx={{ fontSize: 20, color: tone === 'primary' ? 'primary.main' : 'success.main', mt: 0.25 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {point}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Button
        href={ctaHref}
        variant={tone === 'primary' ? 'contained' : 'outlined'}
        color={tone === 'primary' ? 'primary' : 'success'}
        size="large"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{ alignSelf: 'flex-start' }}
      >
        {ctaLabel}
      </Button>
    </Paper>
  )
}

export function AudienceSplit() {
  return (
    <Box id="solvers" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
            Built for both sides of the job
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
            Whichever side you&apos;re on, DeckyMart has you covered
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <AudiencePanel
              icon={PersonRoundedIcon}
              tone="primary"
              eyebrow="For customers"
              title="Get it fixed without the runaround"
              points={[
                'Describe the problem in plain language — no categories to hunt through.',
                'Compare ranked, verified Solvers by rating, distance and price before you choose.',
                'Your payment stays protected until you confirm the work is done.',
                'Message your Solver and track the job from acceptance to completion.',
              ]}
              ctaLabel="Get help now"
              ctaHref={APP_LINKS.customerSignUp}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <AudiencePanel
              icon={EngineeringRoundedIcon}
              tone="success"
              eyebrow="For Solvers"
              title="Spend your time on jobs that fit you"
              points={[
                'Get matched to opportunities in your trade and service area — no cold leads.',
                'Set your price and completion timeline on every offer you send.',
                'Start work only once payment is confirmed secured, never before.',
                'See exactly what you’ve earned and what’s still pending settlement.',
              ]}
              ctaLabel="Become a Solver"
              ctaHref={APP_LINKS.solverSignUp}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
