'use client'

import { useState, useEffect } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="scroll-top-btn" onClick={scrollToTop}>
      <KeyboardArrowUpIcon />
    </div>
  )
} 