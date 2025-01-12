import {Footer, Header, PageWrapper} from '@/components';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import CourseCard from './CourseCard';
import schools from './schoolData.json';

function Courses() {
  return (
    <main>
      <Header />
      <PageWrapper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '260px',
            bgcolor: '#FFF9F3'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '16px',
              textAlign: 'center',
              maxWidth: '600px'
            }}>
            <Typography variant="h2" color="primary.main">
              Courses and Programmes
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id feugiat purus. Quisque ut quam tempor, egestas diam et, feugiat
              metus. Nulla vitae vehicula est. Pellentesque auctor nisl leo, at
              hendrerit nibh efficitur nec. 
            </Typography>
          </Box>
        </Box>
        <Box
          component={'img'}
          src={'/hial-web/assets/schools/main.png'}
          height={480}
          width={'100%'}
        />
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}>
          <TextField
            id="keyword"
            label="Keyword"
            variant="outlined"
            size="small"
          />
          <FormControl sx={{m: 1, minWidth: 160}} size="small">
            <InputLabel id="duration-label">Duration</InputLabel>
            <Select
              labelId="duration-label"
              id="duration-select"
              value={''}
              label="Duration">
              <MenuItem value={10}>3 months</MenuItem>
              <MenuItem value={20}>6 months</MenuItem>
              <MenuItem value={30}>9 months</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">Search Courses</Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: {
                xs: '16px 0',
                sm: '24px 0',
                md: '32px 0'
              },
              gap: {
                xs: '16px',
                sm: '24px'
              },
              width: {
                xs: '320px',
                sm: '540px',
                md: '768px'
              }
            }}>
            {schools.map((school, index) => (
              <CourseCard key={index} school={school} />
            ))}
          </Box>
        </Box>
      </PageWrapper>
      <Footer />
    </main>
  );
}

export default Courses;
export {default as CoursePage} from './CoursePage';
