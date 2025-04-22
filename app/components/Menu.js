'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Menu() {
  const router = useRouter()

  return (
    <div className="menu-wrapper">
      <div className="menu-logo-wrapper" onClick={() => router.push('/')}>
        <Image 
          src="/images/logo.png" 
          alt="noisehanoi" 
          className="menu-logo"
          width={40}
          height={40}
        />
      </div>
      <div className="menu-item-group">
        <div className="menu-item" onClick={() => router.push('/gigs')}>
          Gigs
        </div>
        <div className="menu-item" onClick={() => router.push('/reads')}>
          Reads
        </div>
        <div className="menu-item" onClick={() => router.push('/places')}>
          Places
        </div>
        <div className="menu-item" onClick={() => router.push('/artists')}>
          Artists
        </div>
      </div>
    </div>
  )
} 