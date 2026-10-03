import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Reveal } from './Reveal'

function FlowCard({
  step,
  eyebrow,
  children,
}: {
  step: number
  eyebrow: string
  children: React.ReactNode
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        p: 2.5,
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
        <Box
          sx={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            bgcolor: 'rgba(15,52,96,0.08)',
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {step}
        </Box>
        <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 0.5, fontSize: 11 }}>
          {eyebrow}
        </Typography>
      </Stack>
      <Box>{children}</Box>
    </Paper>
  )
}

export function ProductDemo() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f5f6fa' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
              See it in action
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
              From a problem to the right person.
            </Typography>
          </Stack>
        </Reveal>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal sx={{ height: '100%' }}>
              <FlowCard step={1} eyebrow="The problem">
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  &ldquo;My car won&apos;t start this morning.&rdquo;
                </Typography>
              </FlowCard>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal delayMs={60} sx={{ height: '100%' }}>
              <FlowCard step={2} eyebrow="Details captured">
                <Stack spacing={0.75}>
                  <Chip
                    size="small"
                    icon={<BoltRoundedIcon sx={{ fontSize: 14 }} />}
                    label="Emergency"
                    sx={{ bgcolor: 'error.main', color: '#fff', width: 'fit-content', fontWeight: 700 }}
                  />
                  <Chip size="small" label="Toyota Corolla · 2016" variant="outlined" sx={{ width: 'fit-content' }} />
                </Stack>
              </FlowCard>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal delayMs={120} sx={{ height: '100%' }}>
              <FlowCard step={3} eyebrow="Relevant trade">
                <Chip size="small" label="Automobile Electrician" sx={{ bgcolor: 'primary.main', color: '#fff', fontWeight: 700 }} />
              </FlowCard>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal delayMs={180} sx={{ height: '100%' }}>
              <FlowCard step={4} eyebrow="Verified options nearby">
                <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 34, height: 34, fontSize: 13, fontWeight: 700 }}>
                    CU
                  </Avatar>
                  <Box sx={{ minWidth: 0 }}>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
                        Chigozie U.
                      </Typography>
                      <VerifiedRoundedIcon sx={{ fontSize: 14, color: 'success.main' }} />
                    </Stack>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <StarRoundedIcon sx={{ fontSize: 14, color: 'warning.main' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        4.9 · 4.2 km away
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </FlowCard>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal delayMs={240} sx={{ height: '100%' }}>
              <FlowCard step={5} eyebrow="You choose">
                <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                  Offer accepted
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Payment secured, job tracked
                </Typography>
              </FlowCard>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
