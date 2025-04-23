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
    alignItems: 'start',
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
    height: '100%',
    objectFit: 'cover',
  },
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  // Group band
  groupBandBox: {
    width: '49%',
    boxSizing: 'border-box',
    padding: '16px',
    marginBottom: '2rem',
    border: '1px solid #ffffff',
    borderRadius: '4px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '10px',
      marginBottom: '1rem',
    },
  },
  groupBandTitle: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: 700,
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontWeight: 600,
    },
  },
  groupBandContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  groupBandImagesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupBandImg: {
    float: 'left',
    width: '30%',
    height: '6rem',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '3.5rem',
    },
  },
}));

export default useStyles;
