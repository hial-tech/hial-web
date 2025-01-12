import {ButtonBase, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate} from 'react-router';

type Props = {
  school: {
    slug: string;
    title: string;
    image: string;
    description: string;
  };
};

function SchoolCard({school}: Props) {
  const navigate = useNavigate();

  return (
    <ButtonBase
      onClick={() => navigate(`/school/${school.slug}`)}
      sx={{
        width: '240px',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
        }
      }}>
      <CardMedia
        component="img"
        height="200"
        image={school.image}
        alt={school.title}
      />
      <CardContent sx={{bgcolor: 'primary.main', flex: 1}}>
        <Typography variant="h6" color="primary.contrastText">
          {school.title}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: 'primary.main',
          color: '#fff',
          opacity: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          padding: '16px',
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexDirection: 'column',
          '&:hover': {
            opacity: 1
          }
        }}>
        <Typography variant="body2">{school.description}</Typography>
        <Typography variant="h6" color="primary.contrastText">
          {school.title}
        </Typography>
      </CardContent>
    </ButtonBase>
  );
}

export default SchoolCard;
