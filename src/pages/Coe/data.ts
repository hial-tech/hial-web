import {coes} from '../Home/data';

export const liveLearningLabs = coes.map((i) => {
  return {
    id: i.title.replace(/\s+/g, '-').toLowerCase(),
    title: i.title,
    description: i.description,
    imageUrl: i.imageUrl,
    buttonText: i.buttonText
  };
});

export const incubationSwitches = [
  {
    id: 'himalayan-farm-stays',
    title: 'Himalayan Farm Stays',
    description: 'Small description comes here',
    imageUrl: '/src/assets/enterprises/1.png',
    buttonText: 'Learn more'
  },
  {
    id: 'sheshyon-innovations',
    title: 'Sheshyon Innovations',
    description: 'Small description comes here',
    imageUrl: '/src/assets/enterprises/2.png',
    buttonText: 'Learn more'
  },
  {
    id: 'pride-of-ladakh',
    title: 'Pride of Ladakh (PoL)',
    description: 'Small description comes here',
    imageUrl: '/src/assets/enterprises/3.png',
    buttonText: 'Learn more'
  }
];

export const liveLearningLabPageData = {
  title: 'HIAL’s Centres of Excellence',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id feugiat purus.
  Quisque ut quam tempor, egestas diam et, feugiat metus. Nulla vitae vehicula est.
  Pellentesque auctor nisl leo, at hendrerit nibh efficitur nec. `,
  image: '/src/assets/enterprises/header-1.png',
  detail: {
    title: 'What are our Centres of Excellence?',
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id feugiat purus. Quisque ut tempor, egestas diam et, feugiat metus. Nulla vitae vehicula est. Pellentesque auctor nisl leo, at hendrerit nibh efficitur nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id feugiat purus. Quisque tempor, egestas diam et, feugiat metus. Nulla vitae vehicula est. Pellentesque auctor nisl leo, at hendrerit nibh efficitur nec. `,
    image: '/src/assets/coe/4.png'
  },
  sectionTitle: 'Explore our Centres of Excellence'
};

export const incubationSwitchesPageData = {
  title: 'Incubation Switches',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      id feugiat purus. Quisque ut quam tempor, egestas diam et, feugiat
      metus. Nulla vitae vehicula est.`,
  image: '/src/assets/enterprises/header-1.png',
  detail: {
    title: 'What are our Incubation Switches?',
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer id feugiat purus. Quisque ut tempor, egestas diam et,
            feugiat metus. Nulla vitae vehicula est. Pellentesque auctor nisl leo,
            at hendrerit nibh efficitur nec. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer id feugiat purus. Quisque tempor, egestas diam et,
            feugiat metus. Nulla vitae vehicula est. Pellentesque auctor nisl leo, at
            hendrerit nibh efficitur nec.`,
    image: '/src/assets/enterprises/3.png'
  },
  sectionTitle: 'Explore our Incubation Switches'
};
