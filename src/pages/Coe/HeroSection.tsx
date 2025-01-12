import {alpha, Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router';

type Props = {
  backgroundImg: string;
  title: string;
  description: string;
  button?: {
    text: string;
    href?: string;
  };
};

function HeroSection({backgroundImg, button, description, title}: Props) {
  const navigate = useNavigate();

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box
        sx={{
          background: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        height={460}
        flex={1}>
        <Box
          sx={{
            background: alpha('#782439', 0.7),
            height: '100%',
            width: '100%',
            color: 'white',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Box
            sx={{
              maxWidth: {
                xs: '320px',
                sm: '480px',
                md: '600px'
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              padding: {
                xs: 2,
                sm: 3
              },
              rowGap: 2
            }}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            {button && (
              <div>
                <Button
                  size="medium"
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate(button.href ?? '')}>
                  {button.text}
                </Button>
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
