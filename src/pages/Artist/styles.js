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
  wrapper: {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'flex-start',
    marginBottom: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  name: {
    lineHeight: '1rem',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    color: '#fff',
    textDecorationLine: 'none',
    '&:hover': {
      color: '#1EBDD3',
    },
  },
  bio: {
    lineHeight: '1.125rem',
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      marginTop: '0.125rem',
    },
  },
  photo: {
    width: '200px',
    height: '125px',
    paddingRight: '1.25rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      marginBottom: '12px',
      paddingRight: 0,
    },
  },
  bg: {
    width: '100%',
  },
}));

export default useStyles;
