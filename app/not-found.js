'use client';

import { Container } from '@mui/material';
import Image from 'next/image';
import { Menu, Footer } from './components';

export default function NotFound() {
  return (
    <Container maxWidth="lg">
      <Menu />

      <Image
        src="/images/not-found.png"
        alt="Not Found"
        width={900}
        height={600}
        style={{ width: '100%', height: 'auto', marginTop: '48px' }}
      />
      <Footer />
    </Container>
  );
}
