import {alpha, Box, Card, CardContent, Typography} from '@mui/material';

type Props = {
  width?: string;
  height?: string;
  backgroundImg: string;
  title: string;
  description: string;
  button: {
    text: string;
    href?: string;
  };
};
function InfoCard({
  width,
  height,
  backgroundImg,
  title,
  description,
  button
}: Props) {
  return (
    <Card
      sx={{
        position: 'relative',
        width: width ?? 300,
        height: height ?? 400,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flexShrink: 0
      }}>
      <Box
        component="img"
        src={backgroundImg}
        alt={title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          zIndex: 1
        }}
      />
      <CardContent
        sx={{
          zIndex: 3,
          color: 'white',
          background: alpha('#2E2F32', 0.7),
          rowGap: 0.5,
          display: 'flex',
          flexDirection: 'column'
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
      </CardContent>
    </Card>
  );
}

export default InfoCard;
