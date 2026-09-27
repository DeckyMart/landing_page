import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'

const STEPS = [
  {
    icon: ChatBubbleOutlineRoundedIcon,
    title: 'Describe the problem',
    body: "Type it the way you'd explain it to a friend. Drop a pin or share your location — DeckyMart pulls out the details that matter: category, urgency, vehicle.",
  },
  {
    icon: GroupsRoundedIcon,
    title: 'Get matched & review offers',
    body: 'See a short, ranked list of verified Solvers nearby — with ratings, completed jobs and response time — and compare their price and timeline before you commit.',
  },
  {
    icon: ShieldRoundedIcon,
    title: 'Pay with confidence',
    body: 'Your payment is secured the moment you accept an offer, and only released once you confirm the work is done — never before.',
  },
  {
    icon: TaskAltRoundedIcon,
    title: 'Track it to completion',
    body: 'Chat with your Solver inside the job, follow status updates in real time, then confirm and leave a review once it is finished.',
  },
]

export function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
            How it works
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
            From "it's broken" to fixed, in four steps
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {STEPS.map((step, index) => (
            <Grid key={step.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  transition: 'transform 150ms ease, box-shadow 150ms ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px -20px rgba(15,52,96,0.35)' },
                }}
              >
                <Stack direction="row" sx={{ mb: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      bgcolor: 'rgba(15,52,96,0.08)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <step.icon fontSize="small" />
                  </Box>
                  <Typography variant="h5" sx={{ color: 'divider', fontWeight: 800 }}>
                    0{index + 1}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {step.body}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
