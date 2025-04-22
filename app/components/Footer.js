'use client'

import { Container, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Noise Hanoi. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="footer-links">
              <Typography
                variant="body2"
                color="text.secondary"
                onClick={() => router.push('/about')}
                style={{ cursor: 'pointer' }}
              >
                About
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                onClick={() => router.push('/contact')}
                style={{ cursor: 'pointer' }}
              >
                Contact
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
} 