import {Footer, Header, PageWrapper, Section} from '@/components';
import {alpha, Box, Typography} from '@mui/material';

function ResearchPage() {
  return (
    <main>
      <Header />
      <PageWrapper>
        <Box
          sx={{
            display: 'flex',
            height: '400px'
          }}>
          <Box
            component={'img'}
            src="/hial-web/assets/research/1.png"
            sx={{width: '33.33%', display: {xs: 'none', md: 'block'}}}
          />
          <Box
            sx={{
              width: {xs: '100%', md: '33.33%'},
              background: `url('/hial-web/assets/research/4.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <Box
              sx={{
                backgroundColor: alpha('#2E2F32', 0.7),
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2
              }}>
              <Typography variant="h2" color="white" sx={{textAlign: 'center'}}>
                Agri Photovoltic
              </Typography>
            </Box>
          </Box>
          <Box
            component={'img'}
            src="/hial-web/assets/research/3.png"
            sx={{width: '33.33%', display: {xs: 'none', md: 'block'}}}
          />
        </Box>
        <Section>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              maxWidth: '800px',
              p: {xs: 2, md: 4}
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'flex-start',
                width: '100%'
              }}>
              <Typography variant="h3">Overview</Typography>
              <Box
                sx={{
                  display: 'flex',
                  height: 10,
                  width: 60,
                  bgcolor: 'accent.main'
                }}
              />
            </Box>
            <Typography variant="body1">
              HIAL has partnered with Indian Oil Corporation Limited (IOCL) to
              develop an Agri Voltaic roadmap for Ladakh. This roadmap will
              serve as a reference document for the local and central
              government, facilitating the promotion and assurance of nutrient
              security for the region's pashmina goats. HIAL aims to prototype a
              scalable entrepreneurial model of greenhouse agrivoltaic based
              fodder production coupled with pashmina goat herding in Phyang
              village of Leh district in Ladakh. The project includes setting up
              a 40 kW Solar PV system with a greenhouse under it that creates
              the baseline data for quantification of fodder production from
              such projects; the number of goats that can be benefited, and to
              develop a economic model for such projects on a large scale.
              Through this project, HIAL and IOCL are actively working towards
              enhancing nutrient security and sustainability for the pashmina
              goat population in Ladakh while leveraging solar energy and
              promoting agricultural innovation.
            </Typography>

            <Box
              sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
              <Box
                sx={{width: {xs: '100%', md: '50%'}}}
                component={'img'}
                src="/hial-web/assets/research/2.png"
              />
              <Box
                component={'img'}
                sx={{width: {xs: '100%', md: '50%'}}}
                src="/hial-web/assets/research/1.png"
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'flex-start',
                width: '100%'
              }}>
              <Typography variant="h3">Header</Typography>
              <Box
                sx={{
                  display: 'flex',
                  height: 10,
                  width: 60,
                  bgcolor: 'accent.main'
                }}
              />
            </Box>

            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              nisi est ducimus odio. Culpa officia earum voluptatibus nam
              officiis ad non a, quisquam eum corporis eos commodi, cupiditate
              itaque obcaecati? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Distinctio rem velit corrupti atque autem, odio
              dolorem amet at sapiente a ratione architecto hic repellat quas
              quasi minus! Consequatur, ab animi.
            </Typography>
          </Box>
        </Section>
      </PageWrapper>
      <Footer />
    </main>
  );
}

export default ResearchPage;
