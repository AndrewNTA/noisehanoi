'use client'

import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import Spacing from './Spacing'
import useStyles from './styles'

export default function Footer() {
  const router = useRouter()
  const classes = useStyles()

  return (
    <div className={classes.footerWrapper}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={classes.footerLogo} onClick={() => navigate("/")}>
            Noisehanoi
          </div>
          <Spacing size={32} />
          <div>
            Email: <b>noisehanoi@gmail.com</b>
          </div>
          <Spacing size={8} />
          <div>
            Instagram:{" "}
            <a
              className={classes.footerLink}
              href={"https://www.instagram.com/noisehanoi/"}
              target="_blank"
              rel="noreferrer"
            >
              @noisehanoi
            </a>
          </div>
          <Spacing size={8} />
          <div>
            Facebook:{" "}
            <a
              className={classes.footerLink}
              href={"https://www.facebook.com/noisehanoi/"}
              target="_blank"
              rel="noreferrer"
            >
              Noise Hanoi
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.footerTitle}>Navigation</div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <div className={classes.footerItem} onClick={() => router.push("/")}>
                Home
              </div>
              <div
                className={classes.footerItem}
                onClick={() => router.push("/gigs")}
              >
                Gigs
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div
                className={classes.footerItem}
                onClick={() => router.push("/reads")}
              >
                Reads
              </div>
              <div
                className={classes.footerItem}
                onClick={() => router.push("/places")}
              >
                Places
              </div>
              <div
                className={classes.footerItem}
                onClick={() => router.push("/artists")}
              >
                Artists
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
} 