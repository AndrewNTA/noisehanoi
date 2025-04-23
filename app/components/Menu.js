'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import Logo from '../static/images/logo.png'

const MenuWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '12px',
  paddingTop: '4rem',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    paddingTop: '12px',
  },
}))

const MenuItemGroup = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
})

const MenuItem = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.375rem',
  textTransform: 'uppercase',
  padding: '4px 2rem',
  width: '6rem',
  fontWeight: 600,
  borderBottom: '2px solid black',
  textAlign: 'center',
  '&:hover': {
    color: '#1EBDD3',
    borderBottom: '2px solid #1EBDD3',
  },
  [theme.breakpoints.down('md')]: {
    padding: '4px 1.25rem',
    width: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    width: 'unset',
    padding: '4px 0',
  },
}))

const MenuLogoWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}))

const MenuLogo = styled(Image)(({ theme }) => ({
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  paddingRight: '5rem',
  paddingLeft: '5rem',
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: '1rem',
  },
}))

export default function Menu() {
  const router = useRouter()

  return (
    <MenuWrapper>
      <MenuLogoWrapper onClick={() => router.push('/')}>
        <MenuLogo 
          src={Logo}
          alt="noisehanoi" 
          width={40}
          height={40}
        />
      </MenuLogoWrapper>
      <MenuItemGroup>
        <MenuItem onClick={() => router.push('/gigs')}>
          Gigs
        </MenuItem>
        <MenuItem onClick={() => router.push('/reads')}>
          Reads
        </MenuItem>
        <MenuItem onClick={() => router.push('/places')}>
          Places
        </MenuItem>
        <MenuItem onClick={() => router.push('/artists')}>
          Artists
        </MenuItem>
      </MenuItemGroup>
    </MenuWrapper>
  )
} 