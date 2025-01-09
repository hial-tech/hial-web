import {styled} from '@mui/material/styles';

const PageWrapper = styled('main')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  maxWidth: '1366px',
  margin: '0 auto',
  marginTop: '48px',
  [theme.breakpoints.up('sm')]: {
    marginTop: '64px'
  }
}));

export default PageWrapper;
