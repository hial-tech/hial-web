import {Footer, Header, PageWrapper, Section} from '@/components';
import {alpha, Box, Typography} from '@mui/material';
import Leaders from '../Home/Leaders';
import Piller from '../Home/Piller';
import {pillers} from '../Home/data';

const values = [
  {
    img: '/hial-web/assets/about/1.png',
    title: 'Igniting young minds',
    body: 'HIAL aims to break away from conventional thinking and encourage every student to explore their potential and entrepreneurial capacity.'
  },
  {
    img: '/hial-web/assets/about/2.png',
    title: 'Leveraging traditional knowledge',
    body: 'HIAL will embrace traditional wisdom and cultural knowledge to facilitate sustainable development in mountain communities.'
  },
  {
    img: '/hial-web/assets/about/3.png',
    title: 'Sustainability',
    body: 'All innovation and research will be aimed at transforming lives in the mountain ecosystem. Additionally, the campus will be eco-friendly and self-sufficient with zero-waste, zero-energy, and almost zero outside food dependency.'
  },
  {
    img: '/hial-web/assets/about/4.png',
    title: 'Collaboration',
    body: 'HIAL will adopt a collaborative approach in research and will facilitate learning through partnerships with diverse institutions and individuals.'
  }
];

function About() {
  return (
    <main>
      <Header />
      <PageWrapper>
        <Box
          sx={{
            width: '100%',
            height: '460px',
            background: `url('/hial-web/assets/about/header.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px'
          }}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              padding: 2
            }}>
            <Typography
              variant="h1"
              color="white"
              sx={{fontSize: {xs: '36px !important', md: '64px !important'}}}>
              HIAL’s Purpose
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            mt: {xs: 16, sm: 24, md: 8},
            p: 4,
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
          <Box
            sx={{
              position: {xs: 'absolute', md: 'absolute', lg: 'relative'},
              left: {xs: 20, md: 0},
              mt: {xs: -30, sm: -40, md: 0}
            }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {xs: 64, sm: 120, md: 150},
                maxWidth: {xs: 300, sm: 500, md: 600},
                fontWeight: '700',
                textAlign: 'left',
                color: alpha('#e8e8e8', 0.7),
                lineHeight: {xs: '64px', sm: '120px', md: '150px'}
              }}>
              {`OUR VISION`}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              fontSize: {xs: 20, sm: 28},
              zIndex: 1,
              textAlign: 'right'
            }}>
            HIAL aims to develop Ladakh into a benchmark for a sustainable
            economic living for the mountain world, where all children receive a
            meaningful education that prepares them for a life of dignity in
            harmony with nature
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            mt: {xs: 16, sm: 24, md: 12},
            p: 4,
            alignItems: 'center'
          }}>
          <Typography
            variant="body1"
            sx={{maxWidth: 600, fontSize: {xs: 20, sm: 28}, zIndex: 1}}>
            Create a transformative educational experience for students by
            inculcating in them the practice of learning via the practical
            application of knowledge. Foster an environment of responsible
            entrepreneurship. Establish Centers of Excellence to showcase
            innovative approaches to education and the environment. Enable
            sustainable and locally embedded development within mountain
            societies.
          </Typography>
          <Box
            sx={{
              position: {xs: 'absolute', md: 'absolute', lg: 'relative'},
              right: {xs: 20, md: 0},
              mt: {xs: -50, sm: -40, md: 0}
            }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {xs: 64, sm: 120, md: 150},
                maxWidth: {xs: 400, sm: 500, md: 600},
                fontWeight: '700',
                textAlign: 'right',
                color: alpha('#e8e8e8', 0.7),
                lineHeight: {xs: '64px', sm: '120px', md: '150px'}
              }}>
              {`OUR MISSION`}
            </Typography>
          </Box>
        </Box>
        <Section>
          <Typography variant="h2" textAlign={'center'} color="primary.main">
            Our Values
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: '40px',
              gap: 2,
              flexWrap: 'wrap',
              rowGap: 8
            }}>
            {values.map((value, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: '#FFF3E5',
                  width: {xs: 240, sm: 240},
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  rowGap: 2,
                  borderRadius: 4,
                  p: 2
                }}>
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: '-40px'
                  }}>
                  <Box component={'img'} src={value.img} />
                </Box>
                <Typography variant="h5" sx={{textAlign: 'center'}}>
                  {value.title}
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'center'}}>
                  {value.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Section>
        <Section>
          <Typography variant="h2" textAlign={'center'} color="primary.main">
            Our Philosophy
          </Typography>
          <Leaders />
        </Section>
        <Section>
          <Typography variant="h2" textAlign={'center'} color="primary.main">
            5 Key Pillars
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: {xs: 2, sm: 3},
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              maxWidth: '100%',
              px: {xs: 3, sm: 4}
            }}>
            {pillers.map((piller, index) => (
              <Piller
                key={index}
                imageComponent={
                  <img
                    src={piller.imageUrl}
                    alt={piller.title}
                    height={piller.height}
                    width={piller.width}
                  />
                }
                title={piller.title}
                description={piller.description}
              />
            ))}
          </Box>
        </Section>
        <Section>
          <Typography variant="h2" textAlign={'center'} color="primary.main">
            Guiding Principle
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              flexDirection: {xs: 'column', md: 'row'},
              gap: 6
            }}>
            <Box
              component={'img'}
              src="/hial-web/assets/about/5.png"
              sx={{width: {xs: 360, md: 440}}}
            />
            <Box
              component={'img'}
              src="/hial-web/assets/about/6.png"
              sx={{width: {xs: 360, md: 500}}}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              gap: 2,
              flexWrap: 'wrap'
            }}>
            <Box
              sx={{
                border: '1px solid #e8e8e8',
                width: {xs: 240, sm: 280},
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: 2,
                borderRadius: 4,
                p: 2
              }}>
              <Typography variant="h5" sx={{textAlign: 'center'}}>
                {'Learn By Doing'}
              </Typography>
              <Typography variant="body1" sx={{textAlign: 'center'}}>
                Well-planned and uniquely assessed experiential learning
                programs stimulate intellectual curiosity, reflection,
                compassion, creativity and skilfulness. Therefore, HIAL
                encourages learner development through Live Learning Labs that
                supplement the traditional academic setting. These opportunities
                instil qualities of leadership, cultural awareness, and
                entrepreneurship.
              </Typography>
            </Box>

            <Box
              sx={{
                border: '1px solid #e8e8e8',
                width: {xs: 240, sm: 280},
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: 2,
                borderRadius: 4,
                p: 2
              }}>
              <Typography variant="h5" sx={{textAlign: 'center'}}>
                {'Collaborative Learning'}
              </Typography>
              <Typography variant="body1" sx={{textAlign: 'center'}}>
                HIAL is building a network of collaborative partners that
                support its efforts in research, teaching, and exchange
                programs. Guest lectures by visiting faculty and industry
                experts is facilitated on a regular basis and
                learner-facilitator collaborations are encouraged. Programs are
                designed to create a space for learners where they share and
                reflect on their experiences.
              </Typography>
            </Box>

            <Box
              sx={{
                border: '1px solid #e8e8e8',
                width: {xs: 240, sm: 280},
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: 2,
                borderRadius: 4,
                p: 2
              }}>
              <Typography variant="h5" sx={{textAlign: 'center'}}>
                {'Research Innovations'}
              </Typography>
              <Typography variant="body1" sx={{textAlign: 'center'}}>
                Research and innovation drives every aspect of HIAL. Learners of
                all academic levels are encouraged to undertake research and
                creative endeavours in collaboration with facilitators. These
                projects encourage free thinking and help in evolving solutions
                to address some of the key challenges experienced by mountain
                communities.
              </Typography>
            </Box>
          </Box>
        </Section>
      </PageWrapper>
      <Footer />
    </main>
  );
}

export default About;
