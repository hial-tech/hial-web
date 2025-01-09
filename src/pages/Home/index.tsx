import {
  Footer,
  FullBleedCard,
  Header,
  InfoCard,
  PageWrapper,
  Section
} from '@/components';
import {Box, Button} from '@mui/material';
import {FaArrowRightLong} from 'react-icons/fa6';
import {useNavigate} from 'react-router';
import {coes, courses, enterprises, pillers, researches} from './data';
import Enterprise from './Enterprises';
import HeroSection from './HeroSection';
import Leaders from './Leaders';
import Piller from './Piller';
import Supporters from './Supporters';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PageWrapper>
        <HeroSection />
        <Button
          color="secondary"
          sx={{
            position: 'fixed',
            columnGap: '12px',
            bottom: {xs: '24px', sm: '48px'},
            right: {xs: '24px', sm: '48px'},
            boxShadow: '0px 4px 4px 0px #00000040',
            zIndex: 5
          }}>
          Join the cause <FaArrowRightLong />
        </Button>
        <Section title="Courses & Workshops" bgPaper>
          <Box
            sx={{
              display: 'flex',
              gap: {xs: 2, sm: 3},
              flex: 1,
              flexDirection: {
                xs: 'column',
                sm: 'row'
              },
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {display: 'none'},
              overflowX: 'auto',
              overflowY: 'hidden',
              maxWidth: '100%',
              px: {xs: 3, sm: 4}
            }}>
            {courses.map((course, index) => (
              <InfoCard
                key={index}
                backgroundImg={course.imageUrl}
                title={course.title}
                button={{text: course.buttonText, href: '/home'}}
                description={course.description}
              />
            ))}
          </Box>
          <Button
            onClick={() => {
              navigate('/courses');
            }}>
            Explore All Courses
          </Button>
        </Section>
        <Section>
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
        <Section title="Our Leaders">
          <Leaders />
        </Section>
        <Section title="Research & Innovation">
          <Box sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
            {researches.map((research, index) => (
              <FullBleedCard
                key={index}
                button={{
                  text: 'Learn more',
                  href: `/research/${research.title.replace(/\s+/g, '-').toLowerCase()}`
                }}
                description={research.description}
                imageUrl={research.imageUrl}
                title={research.title}
              />
            ))}
          </Box>
        </Section>
        <Section
          title="HIAL's Enterprises"
          subtitle="Small description of enterprises">
          <Box
            sx={{
              display: 'flex',
              gap: 5,
              flexDirection: {xs: 'column', lg: 'row'}
            }}>
            {enterprises.map((data, index) => (
              <Enterprise
                key={index}
                backgroundImg={data.imageUrl}
                button={{text: data.buttonText, href: data.buttonUrl}}
                description={data.description}
                title={data.title}
                sectionTitle={data.sectionTitle}
              />
            ))}
          </Box>
        </Section>
        <Section
          title="Centres of Excellence"
          subtitle="Small description of centres of excellence">
          <Box sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
            {coes.map((coe, index) => (
              <FullBleedCard
                key={index}
                button={{
                  text: coe.buttonText,
                  href: `/coe/${coe.title.replace(/\s+/g, '-').toLowerCase()}`
                }}
                description={coe.description}
                imageUrl={coe.imageUrl}
                title={coe.title}
              />
            ))}
          </Box>
        </Section>
        <Supporters />
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Home;
