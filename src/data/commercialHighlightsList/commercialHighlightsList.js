import images from './images';
import backgrounds from './backgrounds';

export const commercialHighlightsList1= {
  background: backgrounds.back01,
  backgroundStyle: {
    backgroundPositionY: 'top',
  },
  items: [
  {
    image: images.design,
    title: 'Design title',
    description:
      'It all starts with a good design. We work along with you and your brand to grasp your essence. We’ll create a design that will resonate with your brand and audience.',
    reverseOrder: false,
  },
  {
    image: images.responsive,
    title: 'Responsive title',
    description:
      'Your website will truly work on any device. Your website, in fact, will be a compliant Progressive Web App. Google will also like it and it will treat your with better rankings.',
    reverseOrder: true,
  },
]};

export const commercialHighlightsList2= {
  background: backgrounds.back02,
  backgroundStyle: {
    // backgroundPositionY: '-50%',
  },
  items: [
  {
    image: images.fast,
    title: 'Fast title',
    description:
      'It will load in no time. This will increase your user engagement and satisfaction as well as increasing your search engine - aka. Google - position.',
    reverseOrder: false,
  },
  {
    image: images.scalable,
    title: 'Scalable title',
    description:
      'Thanks to our technologies your website will scale instantly for traffic spikes while maintaining your server cost low.',
    reverseOrder: true,
  },
]};

export const commercialHighlightsList3= {
  background: backgrounds.back03,
  backgroundStyle: {
    backgroundPositionY: 'bottom',
  },
  items: [
  {
    image: images.safety,
    title: 'Safety title',
    description:
      'You’ll be shielded from traditional CMS vulnerabilities and flaws. No need to worry about your information and services being hacked.',
    reverseOrder: false,
  },
  {
    image: images.friendly,
    title: 'Data friendly title',
    description:
      'We can build this your blazing fast new website using the data sources you currently have. Wordpress, Drupal, Prestashop, Shopify, you name it.',
    reverseOrder: true,
  },
]};

