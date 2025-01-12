import {Box, Typography, useMediaQuery} from '@mui/material';

function Leaders() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: {xs: 'center', lg: 'space-around'},
        flexDirection: {xs: 'column'},
        gap: '24px'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          alignItems: 'center',
          p: 3
        }}>
        <Box sx={{position: 'relative'}}>
          <img
            src={'/hial-web/assets/leaders/gitanjali.png'}
            alt="gitanjali"
            width={isMobile ? 160 : 192}
            height={isMobile ? 160 : 192}
            style={{
              zIndex: 1
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 0.5,
            bgcolor: '#F1F1F2',
            p: {xs: 2, lg: 3},
            pt: {xs: 12, lg: 3},
            pl: {xs: 2, lg: 15},
            borderRadius: 4,
            mt: {xs: -10, lg: 0},
            ml: {xs: 0, lg: -10}
          }}>
          <Typography variant="h3">Gitanjali JB</Typography>
          <Typography variant="body1">Co-Founder & CEO</Typography>
          <Box sx={{backgroundColor: 'secondary.main', height: 8, width: 72}} />
          <Box sx={{maxWidth: 340, my: 2}}>
            <Typography variant="body1" color="text.secondary">
              {`“The secrets of your splendor are not concealed in the lines of your fate, nor are
                they hidden in the wiring of your DNA. They exist firmly and definitely, in the
                infinite potential of your soul. Flowering of these, through unending education,
                is the sublime aim of life and its rare privilege!”`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{mt: {xs: 4, lg: 0}, ml: {xs: 0, lg: 4}}}>
          <iframe
            width={isMobile ? 340 : 488}
            height={isMobile ? 200 : 288}
            src="https://www.youtube.com/embed/fC4ouuOcTAM?si=D8r57ObmvEeOR6zr"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{border: 'none', borderRadius: '8px'}}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row-reverse'},
          alignItems: 'center',
          p: 3
        }}>
        <Box sx={{position: 'relative'}}>
          <img
            src={'/hial-web/assets/leaders/sonam.png'}
            alt="sonam"
            width={isMobile ? 160 : 192}
            height={isMobile ? 160 : 192}
            style={{
              zIndex: 1
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 0.5,
            bgcolor: '#F1F1F2',
            p: {xs: 2, lg: 3},
            pt: {xs: 12, lg: 3},
            pr: {xs: 2, lg: 15},
            borderRadius: 4,
            mt: {xs: -10, lg: 0},
            mr: {xs: 0, lg: -10}
          }}>
          <Typography variant="h3">Sonam Wangchuk</Typography>
          <Typography variant="body1">Founding Director</Typography>
          <Box sx={{backgroundColor: 'accent.main', height: 8, width: 72}} />
          <Box sx={{maxWidth: 340, my: 2}}>
            <Typography variant="body1" color="text.secondary">
              {`“HIAL is a collaborative exercise between learners and facilitators, and aims to
              inspire the seekers of knowledge to explore both outside and within themselves.
              Instead of solving problems with the conventional 3Rs (Reading, wRiting, and aRithmentic),
              we encourage learners to problem solve using the 3Hs: Bright Head, Kind Heart, and Skilled Hands.”`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{mt: {xs: 4, lg: 0}, mr: {xs: 0, lg: 4}}}>
          <iframe
            width={isMobile ? 340 : 488}
            height={isMobile ? 200 : 288}
            src="https://www.youtube.com/embed/E8lBXYbe7j8?si=5Bx5GzRtEZD-bdc7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{border: 'none', borderRadius: '8px'}}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Leaders;
