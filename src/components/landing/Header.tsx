'use client'

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { BrandMark } from './BrandMark'
import { APP_LINKS } from '@/lib/appLinks'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Trades we cover', href: '#trades' },
  { label: 'For Solvers', href: '#solvers' },
  { label: 'FAQ', href: '#faq' },
]

function Logo() {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <BrandMark size={34} />
      <Typography variant="h6" component="span" sx={{ fontWeight: 800, color: 'text.primary' }}>
        DeckyMart
      </Typography>
    </Stack>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between' }}>
          <Logo />

          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="none"
                sx={{ color: 'text.secondary', fontWeight: 600, fontSize: 14, '&:hover': { color: 'text.primary' } }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button href={APP_LINKS.customerSignUp} variant="contained" color="primary">
              Get started
            </Button>
          </Stack>

          <IconButton
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, p: 3 }} role="presentation">
          <Stack direction="row" sx={{ mb: 3, justifyContent: 'space-between', alignItems: 'center' }}>
            <Logo />
            <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2.5}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="none"
                onClick={() => setMobileOpen(false)}
                sx={{ color: 'text.primary', fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
            <Button href={APP_LINKS.customerSignUp} variant="contained" fullWidth>
              Get started
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}
