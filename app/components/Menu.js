'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '../static/images/logo.png'
import useStyles from './styles'

export default function Menu() {
  const router = useRouter()
  const classes = useStyles()

  return (
    <div className={classes.menuWrapper}>
      <div className={classes.menuLogoWrapper} onClick={() => router.push('/')}>
        <Image 
          src={Logo}
          alt="noisehanoi" 
          className={classes.menuLogo}
          width={40}
          height={40}
        />
      </div>
      <div className={classes.menuItemGroup}>
        <div className={classes.menuItem} onClick={() => router.push('/gigs')}>
          Gigs
        </div>
        <div className={classes.menuItem} onClick={() => router.push('/reads')}>
          Reads
        </div>
        <div className={classes.menuItem} onClick={() => router.push('/places')}>
          Places
        </div>
        <div className={classes.menuItem} onClick={() => router.push('/artists')}>
          Artists
        </div>
      </div>
    </div>
  )
} 