import {Footer, Header, PageWrapper} from '@/components';
import {Box, Typography} from '@mui/material';
import SchoolCard from './SchoolCard';
import schools from './schoolData.json';

function SchoolPage() {
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
            <Typography variant="h2">HIAL’s Nine Schools</Typography>
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
          src={'/src/assets/schools/main.png'}
          height={480}
          width={'100%'}
        />
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
              <SchoolCard key={index} school={school} />
            ))}
          </Box>
        </Box>
      </PageWrapper>
      <Footer />
    </main>
  );
}

export default SchoolPage;
export {default as SchoolPage} from './SchoolPage';
