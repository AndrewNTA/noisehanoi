import React from 'react';
import { Skeleton, Typography } from '@mui/material';
import { Spacing } from 'components';

function SkeletonReadLoading({ length }) {
  const arr = Array.from({ length }, (v, i) => i);
  return (
    <>
      <Typography component="div" key="h2" variant="h2">
        <Skeleton sx={{ bgcolor: '#afafaf' }} width="100%" animation="false" />
      </Typography>
      <Spacing size={24} />
      <Skeleton
        sx={{ bgcolor: '#afafaf' }}
        variant="rectangular"
        width="100%"
        height={300}
      />
      {arr.map((a) => (
        <div key={a} style={{ marginBottom: '18px', padding: '0 16px' }}>
          <Spacing size={24} />
          <Skeleton sx={{ bgcolor: '#afafaf' }} width="60%" />
          <Spacing size={12} />
          <Skeleton sx={{ bgcolor: '#afafaf' }} animation="wave" />
          <Spacing size={12} />
          <Skeleton sx={{ bgcolor: '#afafaf' }} width="60%" />
          <Spacing size={12} />
          <Skeleton sx={{ bgcolor: '#afafaf' }} animation="wave" />
        </div>
      ))}
    </>
  );
}

export default SkeletonReadLoading;
