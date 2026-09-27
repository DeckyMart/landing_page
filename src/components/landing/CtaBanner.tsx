import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { APP_LINKS } from '@/lib/appLinks'

export function CtaBanner() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 6 },
            bgcolor: '#0f3460',
            backgroundImage: 'radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 55%)',
            color: '#fff',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }}>
              Something wrong with your car right now?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 480 }}>
              Describe the problem and get matched with a verified Solver near you in minutes.
            </Typography>
          </Stack>
          <Button
            href={APP_LINKS.customerSignUp}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ bgcolor: '#fff', color: 'primary.main', flexShrink: 0, '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
          >
            Get help now
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}
