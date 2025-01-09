import {alpha, Box, Button, Typography} from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${'/src/assets/hero-img.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: {
          xs: '48px 0px',
          sm: '24px 0px'
        }
      }}>
      <Box
        sx={{
          bgcolor: alpha('#450112', 0.85),
          width: {
            xs: '320px',
            sm: '480px'
          },
          p: {
            xs: '24px',
            sm: '48px'
          },
          borderRadius: {
            xs: '0px 16px 16px 0px',
            sm: '0px 24px 24px 0px'
          },
          rowGap: {
            xs: '16px',
            sm: '32px'
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'left'
        }}>
        <Typography variant="h2" color="primary.contrastText">
          “I support university of the future”
        </Typography>
        <Typography variant="subtitle1" color="primary.contrastText">
          {'- HH Chetsang Rinpoche'}
        </Typography>
        <Typography variant="body1" color="primary.contrastText">
          The Himalayan Institute of Alternatives, Ladakh (HIAL) is spearheading
          a pedagogical movement to foster experiential learning as the new
          holistic approach to education.
        </Typography>
        <Box>
          <Button
            variant="text"
            sx={{
              color: 'white',
              p: 0,
              textDecoration: 'underline'
            }}>
            Learn more about HIAL
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
