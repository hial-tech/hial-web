import {NavigationLink} from '@/components';
import {alpha, Box, Typography} from '@mui/material';

type Props = {
  sectionTitle: string;
  backgroundImg: string;
  title: string;
  description: string;
  button: {
    text: string;
    href?: string;
  };
};

function Enterprise({
  sectionTitle,
  backgroundImg,
  button,
  description,
  title
}: Props) {
  return (
    <Box
      sx={{
        width: '320px',
        height: '480px',
        borderRadius: 4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <Box
        component={'img'}
        src={backgroundImg}
        alt={title}
        sx={{
          position: 'absolute',
          width: '320px',
          height: '480px',
          borderRadius: 4
        }}
      />
      <Box
        sx={{
          backgroundColor: 'accent.main',
          color: 'accent.contrastText',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}>
        <Typography variant="h4">{sectionTitle}</Typography>
      </Box>

      <Box
        sx={{
          background: alpha('#2E2F32', 0.7),
          rowGap: 0.5,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1
        }}
        color={'white'}
        rowGap={'8px'}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
        <Typography variant="body2" color="inherit">
          <NavigationLink href={button.href ?? ''}>
            {button.text}
          </NavigationLink>
        </Typography>
      </Box>
    </Box>
  );
}

export default Enterprise;
