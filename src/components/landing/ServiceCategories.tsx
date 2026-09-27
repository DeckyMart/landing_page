import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import TireRepairRoundedIcon from '@mui/icons-material/TireRepairRounded'
import ElectricalServicesRoundedIcon from '@mui/icons-material/ElectricalServicesRounded'
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded'

const CATEGORIES = [
  {
    icon: TireRepairRoundedIcon,
    title: 'Vulcanizer',
    body: 'Flat tire repair, tire replacement, tube patching, roadside tire fitting.',
  },
  {
    icon: ElectricalServicesRoundedIcon,
    title: 'Automobile Electrician',
    body: 'Battery, starter, alternator, wiring, lights, and AC electrical faults.',
  },
  {
    icon: BuildCircleRoundedIcon,
    title: 'Automobile Mechanic',
    body: 'Engine diagnostics, brakes, suspension, servicing, breakdown repair.',
  },
]

export function ServiceCategories() {
  return (
    <Box id="trades" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f5f6fa' }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
          <Chip
            label="Pilot launch"
            size="small"
            sx={{ bgcolor: 'rgba(15,52,96,0.08)', color: 'primary.main', fontWeight: 700, width: 'fit-content' }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
            Starting with the trades that can&apos;t wait
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            DeckyMart is launching with three automobile trades — the jobs that most often happen roadside, under
            pressure, with a customer who needs help now.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {CATEGORIES.map((category) => (
            <Grid key={category.title} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <category.icon />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {category.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {category.body}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
