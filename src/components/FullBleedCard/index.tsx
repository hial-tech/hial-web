import {Box, Typography} from '@mui/material';

export type Props = {
  width?: string;
  imageUrl: string;
  title: string;
  description: string;
  button: {
    text: string;
    href?: string;
  };
};

function FullBleedCard({button, imageUrl, title, description, width}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '400px',
        height: '400px',
        flex: 1,
        flexDirection: 'column',
        width: width ?? '390px',
        background: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'flex-end'
      }}>
      <Box
        sx={{
          bgcolor: '#F1F1F2',
          rowGap: '4px',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography
          variant="body2"
          component={'a'}
          color="inherit"
          href={button.href}>
          {button.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default FullBleedCard;
