'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

const FAQS = [
  {
    question: 'Which trades does DeckyMart support right now?',
    answer:
      'The pilot covers three automobile trades: vulcanizer (tire repair and replacement), automobile electrician (battery, starter, alternator, wiring, lights, AC electrical faults), and automobile mechanic (engine diagnostics, brakes, suspension, breakdown repair). More trades are on the roadmap.',
  },
  {
    question: 'Is my payment actually protected?',
    answer:
      "Yes. Payment is only initiated after you accept a Solver's offer, and it's held securely until you confirm the work is complete. If a payment fails or is abandoned, the job never moves forward — a Solver only starts once your payment is confirmed secured.",
  },
  {
    question: 'What if the job isn’t done right?',
    answer:
      'Before final settlement, you can confirm completion or open a dispute instead. A valid dispute pauses settlement until DeckyMart reviews the full job evidence and both parties’ responses.',
  },
  {
    question: 'How are Solvers verified?',
    answer:
      'Every Solver goes through identity and contact verification, and lists their skills, tools/equipment on hand, and service area before they can start receiving job opportunities. Their profile shows verification status, rating and completed jobs so you can judge trust before you hire.',
  },
  {
    question: 'What happens for an emergency, roadside situation?',
    answer:
      'Marking a request as an emergency changes how it’s matched — nearby, available Solvers are notified faster, and distance/ETA are weighted above price so you get help as quickly as possible.',
  },
]

export function Faq() {
  return (
    <Box id="faq" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={1.5} sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
            FAQ
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
            Good to know before you start
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          {FAQS.map((faq) => (
            <Accordion
              key={faq.question}
              elevation={0}
              disableGutters
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '14px !important',
                '&:before': { display: 'none' },
                px: 1,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                <Typography sx={{ fontWeight: 700 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
