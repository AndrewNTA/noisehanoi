import { styled } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';

export const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: 'lg',
}));

export const MainGrid = styled(Grid)(({ theme }) => ({
  padding: '0 1.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
}));

export const Section = styled('div')({
  fontSize: '0.875rem',
  lineHeight: '1.125rem',
  color: '#BCBCBC',
});

export const Title = styled('div')({
  fontSize: '1.375rem',
  lineHeight: '1.75rem',
  textTransform: 'uppercase',
  borderBottom: '1px solid #fff',
  padding: '0 0.75rem 0.175rem 0.75rem',
  fontWeight: 500,
  color: '#fff',
});

export const SendEmailBtn = styled('a')({
  padding: '8px 12px',
  borderRadius: '4px',
  border: '2px solid #fff',
  cursor: 'pointer',
  marginTop: '20px',
  fontSize: '1.125rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  color: '#fff',
  textDecorationLine: 'none',
  '&:hover': {
    border: '2px solid #1EBDD3',
    color: '#1EBDD3',
  },
});
