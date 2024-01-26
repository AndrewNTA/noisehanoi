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
  },
  name: {
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
  bio: {
    lineHeight: '1.125rem',
    fontSize: '0.875rem',
    paddingLeft: '0.75rem',
    paddingRight: '4rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  photo: {
    width: '200px',
    height: '125px',
    marginRight: '1rem',
  },
  bg: {
    width: '100%',
  },
}));

export default useStyles;
