import {createTheme, responsiveFontSizes} from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: {
        fontSize: '3rem',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 'bold'
      },
      h5: {
        fontFamily: '1.125rem',
        fontWeight: 'bold'
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 'bold'
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 'normal'
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 'normal'
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 'normal'
      },
      button: {
        textTransform: 'none'
      }
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#5E0118'
      },
      secondary: {
        main: '#46B2B0',
        contrastText: '#ffffff'
      },
      accent: {
        main: '#FCC017',
        contrastText: '#000000'
      },
      background: {
        default: '#ffffff',
        paper: '#FFF9F3'
      },
      text: {
        primary: '#363636',
        disabled: '#74767C'
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained'
        },
        styleOverrides: {
          root: {
            borderRadius: '48px'
          }
        }
      }
    }
  })
);

export default theme;
