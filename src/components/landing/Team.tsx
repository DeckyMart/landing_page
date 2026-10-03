'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import Image from 'next/image'
import { Reveal } from './Reveal'

interface Founder {
  name: string
  photo: string
  role: string
  credentials: string
  bio: string[]
  vision: string
}

const FOUNDERS: Founder[] = [
  {
    name: 'David Ajibola',
    photo: '/team/david-ajibola.jpg',
    role: 'Co-Founder, Deckymarts',
    credentials: 'Chartered Accountant · Finance Professional · Entrepreneur',
    bio: [
      'I’m David Ajibola, a Chartered Accountant and finance professional with a passion for business, financial strategy, and entrepreneurship.',
      'As Co-Founder of Deckymarts, I am focused on helping build a platform that creates real value for its users and grows into a sustainable, impactful business.',
      'My background in finance has shaped the way I approach business. I combine financial discipline, strategic thinking, problem-solving, and entrepreneurial drive to identify opportunities and turn ideas into practical solutions.',
      'I believe great businesses are built through vision, execution, innovation, and a deep understanding of the people they serve.',
    ],
    vision: 'To build businesses that solve real problems, create opportunities, and deliver lasting value.',
  },
  {
    name: 'Aka Christian Onyekachukwu',
    photo: '/team/christian-onyekachukwu.jpg',
    role: 'Co-Founder, Deckymarts',
    credentials: 'Senior DevOps Engineer · Cloud Architect · Systems Administrator',
    bio: [
      'I’m Aka Christian Onyekachukwu, a Senior DevOps Engineer with over 5 years of experience designing, automating, and operating scalable cloud-native and on-premises infrastructure.',
      'I specialize in Kubernetes, containerization, CI/CD, and Linux systems administration, with hands-on experience across AWS, DigitalOcean, and on-prem environments. My work includes modernizing legacy applications, building secure and compliant platforms (including HIPAA and fintech), and ensuring 99.9% uptime for critical systems.',
      'I am passionate about infrastructure as code, automation, security, and building resilient systems. As Co-Founder of Deckymarts, I bring my technical expertise, problem-solving skills, and entrepreneurial mindset to help create a platform that delivers real value and sustainable growth for our users.',
    ],
    vision: 'To build innovative solutions that solve real problems, create opportunities, and deliver lasting value.',
  },
]

function FounderCard({ founder }: { founder: Founder }) {
  const [expanded, setExpanded] = useState(false)
  const [firstParagraph, ...restParagraphs] = founder.bio

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        p: { xs: 3.5, md: 5 },
        borderRadius: 5,
        border: '1px solid',
        borderColor: 'divider',
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px -20px rgba(15,52,96,0.35)' },
      }}
    >
      <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center', mb: 3 }}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: 160, md: 180 },
            height: { xs: 160, md: 180 },
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid',
            borderColor: 'primary.main',
            flexShrink: 0,
            bgcolor: '#e5e7eb',
          }}
        >
          <Image
            src={founder.photo}
            alt={founder.name}
            fill
            sizes="(max-width: 900px) 160px, 180px"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {founder.name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mt: 0.5 }}>
            {founder.role}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5 }}>
            {founder.credentials}
          </Typography>
        </Box>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
          {firstParagraph}
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Stack spacing={2}>
            {restParagraphs.map((paragraph) => (
              <Typography key={paragraph} variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                {paragraph}
              </Typography>
            ))}

            <Box
              sx={{
                mt: 1,
                p: { xs: 2.5, md: 3 },
                borderRadius: 4,
                bgcolor: 'primary.main',
                color: '#fff',
              }}
            >
              <FormatQuoteRoundedIcon sx={{ fontSize: 28, opacity: 0.5, mb: 1 }} />
              <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700, letterSpacing: 1, display: 'block' }}>
                My vision
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1 }}>
                {founder.vision}
              </Typography>
            </Box>
          </Stack>
        </Collapse>

        <Button
          onClick={() => setExpanded((prev) => !prev)}
          endIcon={
            <ExpandMoreRoundedIcon
              sx={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}
            />
          }
          aria-expanded={expanded}
          sx={{ alignSelf: 'center', fontWeight: 700 }}
        >
          {expanded ? 'See less' : 'See more'}
        </Button>
      </Stack>
    </Paper>
  )
}

export function Team() {
  return (
    <Box id="team" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
              About the team
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
              Meet the Co-Founders
            </Typography>
          </Stack>
        </Reveal>

        <Grid container spacing={4}>
          {FOUNDERS.map((founder, index) => (
            <Grid key={founder.name} size={{ xs: 12, md: 6 }}>
              <Reveal delayMs={index * 90} sx={{ height: '100%' }}>
                <FounderCard founder={founder} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
