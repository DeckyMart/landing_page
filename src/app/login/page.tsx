'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import Link from '@mui/material/Link'
import { BrandMark } from '@/components/landing/BrandMark'

type Role = 'customer' | 'solver'

function LoginCard() {
  const searchParams = useSearchParams()
  const initialRole: Role = searchParams.get('role') === 'solver' ? 'solver' : 'customer'

  const [role, setRole] = useState<Role>(initialRole)
  const [submitted, setSubmitted] = useState(false)

  return (
    <Box
      sx={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #f5f6fa 0%, #ffffff 65%)',
        py: 6,
      }}
    >
      <Container maxWidth="xs">
        <Stack spacing={3} sx={{ alignItems: 'center', mb: 3 }}>
          <Link href="/" underline="none" sx={{ display: 'inline-flex' }}>
            <BrandMark size={44} />
          </Link>
          <Typography variant="h5" sx={{ fontWeight: 800, textAlign: 'center' }}>
            Welcome to DeckyMart
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            {role === 'customer'
              ? 'Sign in to describe a problem and get matched with a verified Solver.'
              : 'Sign in to review job opportunities and manage your Solver profile.'}
          </Typography>
        </Stack>

        <Paper
          elevation={0}
          sx={{ p: { xs: 3, sm: 4 }, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
        >
          <Tabs
            value={role}
            onChange={(_, next: Role) => setRole(next)}
            variant="fullWidth"
            sx={{ mb: 3, minHeight: 40, '& .MuiTab-root': { minHeight: 40, fontWeight: 700 } }}
          >
            <Tab value="customer" label="Customer" />
            <Tab value="solver" label="Solver" />
          </Tabs>

          {submitted ? (
            <Alert severity="info" sx={{ borderRadius: 2 }}>
              DeckyMart isn&apos;t live yet — this is a preview of the sign-in screen. Check back soon!
            </Alert>
          ) : (
            <Box
              component="form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <Stack spacing={2}>
                <TextField label="Email" type="email" fullWidth required autoComplete="email" />
                <TextField label="Password" type="password" fullWidth required autoComplete="current-password" />
                <Button type="submit" variant="contained" size="large" fullWidth>
                  Continue
                </Button>
              </Stack>
            </Box>
          )}
        </Paper>

        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'text.secondary', mt: 3 }}>
          <Link href="/" underline="hover" sx={{ color: 'text.secondary' }}>
            ← Back to DeckyMart
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginCard />
    </Suspense>
  )
}
