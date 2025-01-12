import {
  Box,
  ButtonBase,
  CardContent,
  CardMedia,
  Chip,
  Typography
} from '@mui/material';
import {useNavigate} from 'react-router';

type Props = {
  school: {
    slug: string;
    title: string;
    image: string;
    description: string;
  };
};

function CourseCard({school}: Props) {
  const navigate = useNavigate();

  return (
    <ButtonBase
      onClick={() => navigate(`/courses/${school.slug}`)}
      sx={{
        width: '240px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          width: '100%'
        }}>
        <CardMedia
          component="img"
          image={school.image}
          alt={school.title}
          sx={{
            objectFit: 'cover',
            height: '120px',
            borderRadius: 1
          }}
        />
      </Box>
      <CardContent sx={{flex: 1}}>
        <Typography variant="h6">{school.title}</Typography>
        <Box sx={{display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap'}}>
          <Chip
            label="Tags"
            size="small"
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="Tags"
            size="small"
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="Tags"
            size="small"
            color="secondary"
            variant="outlined"
          />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', mt: 1}}>
          <Typography variant="caption" color="text.secondary">
            Starts : 24th November 2024
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Ends : 24th November 2024
          </Typography>
        </Box>
        <Box sx={{mt: 1}}>
          <Typography variant="body2">
            Course Description - could be a two liner description of what to
            expect or learn out of the course.
          </Typography>
        </Box>
      </CardContent>
    </ButtonBase>
  );
}

export default CourseCard;
