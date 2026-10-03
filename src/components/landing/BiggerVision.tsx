import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Reveal } from './Reveal'

const STAGES = [
  {
    icon: LocationOnRoundedIcon,
    title: 'Lagos',
    body: 'Piloting with three automobile trades — where the need is most urgent and most frequent.',
    active: true,
  },
  {
    icon: BuildRoundedIcon,
    title: 'More trades',
    body: 'Expanding into more everyday problems beyond automobiles, as the model proves out.',
    active: false,
  },
  {
    icon: PublicRoundedIcon,
    title: 'More locations',
    body: 'Bringing the same verified, problem-first experience to more cities.',
    active: false,
  },
]

export function BiggerVision() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
              The bigger picture
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
              Starting in Lagos. Building for everywhere.
            </Typography>
          </Stack>
        </Reveal>

        <Reveal delayMs={80}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 0 }} sx={{ alignItems: 'stretch' }}>
            {STAGES.map((stage, index) => (
              <Stack
                key={stage.title}
                direction={{ xs: 'column', md: 'row' }}
                spacing={0}
                sx={{ flex: 1, alignItems: 'center' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: stage.active ? 'primary.main' : 'divider',
                    bgcolor: stage.active ? 'primary.main' : 'background.paper',
                    color: stage.active ? '#fff' : 'text.primary',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      bgcolor: stage.active ? 'rgba(255,255,255,0.15)' : 'rgba(15,52,96,0.08)',
                      color: stage.active ? '#fff' : 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <stage.icon fontSize="small" />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    {stage.title}
                    {stage.active ? (
                      <Typography component="span" variant="caption" sx={{ ml: 1, fontWeight: 700, opacity: 0.8 }}>
                        · now
                      </Typography>
                    ) : null}
                  </Typography>
                  <Typography variant="body2" sx={{ color: stage.active ? 'rgba(255,255,255,0.85)' : 'text.secondary' }}>
                    {stage.body}
                  </Typography>
                </Paper>

                {index < STAGES.length - 1 ? (
                  <Box
                    aria-hidden
                    sx={{
                      color: 'divider',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      py: { xs: 1, md: 0 },
                      px: { md: 1.5 },
                      transform: { xs: 'rotate(90deg)', md: 'none' },
                    }}
                  >
                    <ArrowForwardRoundedIcon />
                  </Box>
                ) : null}
              </Stack>
            ))}
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}
