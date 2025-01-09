import {Box, Typography} from '@mui/material';

type Props = {
  title: string;
  info: string;
  image: string;
};

function Details({image, info, title}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column-reverse', md: 'row'},
        alignItems: 'center',
        gap: 3,
        p: 3
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 2,
          bgcolor: '#F1F1F2',
          px: {xs: 2, md: 3, lg: 4},
          py: {xs: 4, md: 6, lg: 8},
          borderRadius: 4,
          pr: {xs: 0, md: 20, lg: 20},
          minWidth: {xs: '354px', md: undefined}
        }}>
        <Typography variant="h3" sx={{textAlign: {xs: 'center', md: 'left'}}}>
          {title}
        </Typography>
        <Box
          sx={{
            backgroundColor: 'accent.main',
            height: 8,
            width: 72,
            alignSelf: {xs: 'center', md: 'flex-start'}
          }}
        />
        <Box sx={{maxWidth: 400}}>
          <Typography variant="body1" color="text.secondary">
            {info}
          </Typography>
        </Box>
      </Box>
      <Box
        component={'img'}
        src={image}
        sx={{
          width: {
            xs: '354px',
            sm: '354px',
            md: '440px',
            lg: '520px'
          },
          ml: {xs: 0, md: -20, lg: -20}
        }}
      />
    </Box>
  );
}

export default Details;
