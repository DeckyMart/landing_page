import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded'
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded'
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded'
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded'
import { Reveal } from './Reveal'

const PAIN_POINTS = [
  {
    icon: HelpOutlineRoundedIcon,
    problem: "Don't know exactly what's wrong",
    solution: 'Describe it in your own words — no categories to guess at.',
  },
  {
    icon: PersonSearchRoundedIcon,
    problem: "Don't know who to trust",
    solution: "See a Solver's verification status, rating and completed jobs upfront.",
  },
  {
    icon: PriceCheckRoundedIcon,
    problem: "Don't know what's a fair price",
    solution: 'Compare offers side by side before you accept any of them.',
  },
  {
    icon: ScheduleRoundedIcon,
    problem: 'Struggle to find the right person fast',
    solution: 'Get matched with nearby, available Solvers in your trade — right away.',
  },
]

export function ValueProposition() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
              The problem
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
              Finding help shouldn&apos;t be this difficult.
            </Typography>
          </Stack>
        </Reveal>

        <Grid container spacing={3}>
          {PAIN_POINTS.map((point, index) => (
            <Grid key={point.problem} size={{ xs: 12, sm: 6, md: 3 }}>
              <Reveal delayMs={index * 80} sx={{ height: '100%' }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      bgcolor: 'rgba(231,76,60,0.1)',
                      color: 'error.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <point.icon fontSize="small" />
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'text.secondary', textDecoration: 'line-through', textDecorationColor: 'rgba(231,76,60,0.4)' }}>
                    {point.problem}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                    {point.solution}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
