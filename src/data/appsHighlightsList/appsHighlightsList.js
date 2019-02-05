import images from './images';
import backgrounds from './backgrounds';

export const appsHighlightsList1= {
  background: backgrounds.back01,
  backgroundStyle: {
    // backgroundPositionY: '20%',
  },
  items: [
  {
    image: images.quality,
    title: 'Quality title',
    description:
      'We strive for code quality, your app will not only be cutting-edge but also solid in the long term.',
    reverseOrder: false,
  },
  {
    image: images.webApp,
    title: 'Web App title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi iaculis neque vestibulum tincidunt ut ac orci. Nam dolor libero, ullamcorper sed blandit ut, efficitur a odio. Praesent consequat leo urna, mollis rhoncus augue dignissim eu.',
    reverseOrder: true,
  },
]};

export const appsHighlightsList2= {
  background: backgrounds.back02,
  backgroundStyle: {
    backgroundPositionY: 'bottom',
  },
  items: [
  {
    image: images.methods,
    title: 'Methods title',
    description:
      'We use different tools and methodologies to always keeping you in the loop. Stand-ups meetings - virtual as well-, Slack, Jira, Trello, etc.',
    reverseOrder: false,
  },
  {
    image: images.financial,
    title: 'Financial title',
    description:
      'No huge up-front payments, we’ll adapt development to your needs.',
    reverseOrder: true,
  },
]};
