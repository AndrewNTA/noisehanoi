import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    textTransform: 'uppercase',
    borderBottom: '1px solid #fff',
    padding: '0 0.75rem 0.175rem 0.75rem',
    fontWeight: 600,
    color: '#fff',
  },
  title: {
    lineHeight: '1.25rem',
    fontStyle: 'italic',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: '1.125rem',
    paddingLeft: '0.75rem',
    borderLeft: '2px solid #1EBDD3',
    marginBottom: '2rem',
  },
  place: {
    lineHeight: '1.75rem',
    fontSize: '1rem',
    paddingLeft: '0.75rem',
    fontWeight: 700,
    cursor: 'pointer',
    color: '#fff',
    textDecorationLine: 'none',
    '&:hover': {
      color: '#1EBDD3',
    },
  },
  text: {
    lineHeight: '1.125rem',
    fontSize: '0.875rem',
    paddingLeft: '0.75rem',
    paddingRight: '4rem',
    marginBottom: '0.75rem',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
}));

export default useStyles;
