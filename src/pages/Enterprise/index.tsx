import {Footer, Header, InfoCard, PageWrapper, Section} from '@/components';
import {Box} from '@mui/material';
import {useMemo} from 'react';
import {useParams} from 'react-router';
import Details from './Details';
import HeroSection from './HeroSection';
import {
  incubationSwitches,
  incubationSwitchesPageData,
  liveLearningLabPageData,
  liveLearningLabs
} from './data';

type ExploreType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
};

type PageData = {
  title: string;
  description: string;
  image: string;
  button?: {
    text: string;
    href?: string;
  };
  detail: {
    title: string;
    info: string;
    image: string;
  };
  explore: ExploreType[];
  sectionTitle?: string;
};

type Props = {
  type: 'live-learning-labs' | 'incubation-switches';
};

function Enterprise({type}: Props) {
  const {id} = useParams();

  const pageData = useMemo(() => {
    let pageData: PageData = {
      title: '',
      description: '',
      image: '',
      explore: [],
      detail: {
        title: '',
        info: '',
        image: ''
      },
      sectionTitle: ''
    };
    if (!id) {
      if (type === 'live-learning-labs') {
        pageData = {
          ...liveLearningLabPageData,
          explore: liveLearningLabs
        };
      } else {
        pageData = {
          ...incubationSwitchesPageData,
          explore: incubationSwitches
        };
      }
    } else {
      if (type === 'live-learning-labs') {
        const current = liveLearningLabs.find((i) => i.id === id);
        pageData = {
          title: current?.title ?? '',
          description: current?.description ?? '',
          image: current?.imageUrl ?? '',
          button: {
            text: current?.buttonText ?? ''
          },
          detail: {
            title: 'Mission',
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer id feugiat purus. Quisque ut tempor, egestas diam et,
                    feugiat metus. Nulla vitae vehicula est. Pellentesque auctor nisl leo,
                    at hendrerit nibh efficitur nec. Lorem ipsum dolor sit amet, consectetur.
                    Nulla proident magna et reprehenderit aliqua eiusmod exercitation voluptate
                    magna nisi irure eiusmod reprehenderit laboris. Ad adipisicing
                    commodo voluptate esse. Deserunt sunt culpa aute occaecat laborum.
                    `,
            image: '/hial-web/assets/enterprises/3.png'
          },
          explore: liveLearningLabs.filter((i) => i.id !== id),
          sectionTitle: 'Explore our other Live learning labs'
        };
      } else {
        const current = incubationSwitches.find((i) => i.id === id);
        pageData = {
          title: current?.title ?? '',
          description: current?.description ?? '',
          image: current?.imageUrl ?? '',
          button: {
            text: current?.buttonText ?? ''
          },
          detail: {
            title: 'Mission',
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer id feugiat purus. Quisque ut tempor, egestas diam et,
                    feugiat metus. Nulla vitae vehicula est. Pellentesque auctor nisl leo,
                    at hendrerit nibh efficitur nec. Lorem ipsum dolor sit amet, consectetur
                    `,
            image: '/hial-web/assets/enterprises/3.png'
          },
          explore: incubationSwitches.filter((i) => i.id !== id),
          sectionTitle: 'Explore our other Incubation Switches'
        };
      }
    }
    return pageData;
  }, [type, id]);

  return (
    <div>
      <Header />
      <PageWrapper>
        <HeroSection
          backgroundImg={pageData.image}
          title={pageData.title}
          description={pageData.description}
          button={pageData?.button ?? undefined}
        />
        <Section>
          <Details
            image={pageData.detail.image}
            info={pageData.detail.info}
            title={pageData.detail.title}
          />
        </Section>
        <Section title={pageData.sectionTitle}>
          <Box
            sx={{
              display: 'flex',
              gap: {xs: 2, sm: 3},
              flex: 1,
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {display: 'none'},
              overflowX: 'auto',
              overflowY: 'hidden',
              maxWidth: '100%',
              px: {xs: 3, sm: 4}
            }}>
            {pageData.explore.map((enterprise, index) => (
              <InfoCard
                key={index}
                title={enterprise.title}
                description={enterprise.description}
                backgroundImg={enterprise.imageUrl}
                button={{
                  text: enterprise.buttonText,
                  href: `/${type}/${enterprise.id}`
                }}
              />
            ))}
          </Box>
        </Section>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default Enterprise;
