'use client'

import { Skeleton, Typography } from '@mui/material'
import Spacing from './Spacing'

export default function SkeletonLoading({ length }) {
  const arr = Array.from({ length }, (v, i) => i)
  return (
    <>
      {arr.map((a) => (
        <div key={a} style={{ marginBottom: '32px', padding: '0 16px' }}>
          <Typography component="div" key="h4" variant="h4">
            <Skeleton sx={{ bgcolor: '#afafaf' }} width="30%" animation={false} />
          </Typography>
          <Spacing size={24} />
          <Skeleton sx={{ bgcolor: '#afafaf' }} width="60%" />
          <Spacing size={12} />
          <Skeleton sx={{ bgcolor: '#afafaf' }} animation="wave" />
        </div>
      ))}
    </>
  )
} 