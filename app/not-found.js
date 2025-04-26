'use client';

import { Container } from '@mui/material';
import Image from 'next/image';
import { Menu, Footer } from './components';
import NotFoundImage from './static/images/not-found.png';

export default function NotFound() {
  return (
    <Container maxWidth="lg">
      <Menu />

      <Image
        src={NotFoundImage}
        alt="Not Found"
        width={900}
        height={600}
        style={{ width: '100%', height: 'auto', marginTop: '48px' }}
      />
      <Footer />
    </Container>
  );
}
