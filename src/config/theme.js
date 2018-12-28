// @flow weak
import each from 'lodash/each';
import { createMuiTheme } from '@material-ui/core/styles';

import { fontFamily, titlesFontFamily } from './typography';
import { isObject } from 'util';

const palette = {
  primary: {
    main: '#2FA7CD',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#E72476',
  },
  common: {
    black: '#0C1821',
  },
  other: {
    darkBlue: '#0a121a',
    lightGrey: '#e8e8e8',
    grayBlue: '#18232B',
    veryDarkGrey: '#0C1821',
    middleBlue: '#3f4b7b',
  },
  gradients: {
    primary:  'linear-gradient(45deg, #340e4f 0%, #f91275 100%)',
  },
};

const typography = {
  display4: {
    fontFamily: titlesFontFamily,
    fontWeight: 900,
    fontSize: '9rem',
  },
  display3: {
    fontFamily: titlesFontFamily,
    fontWeight: 900,
  },
  display2: {
    fontFamily: titlesFontFamily,
    fontWeight: 900,
  },
  display1: {
    fontFamily: titlesFontFamily,
    fontWeight: 700,
    fontSize: 1.7,
  },
  headline: {
    fontFamily,
    fontWeight: 300,
  },
  title: {
    fontFamily,
    fontWeight: 300,
  },
  subheading: {
    fontFamily,
    fontWeight: 300,
  },
  body1: {
    fontFamily,
    fontWeight: 300,
  },
  body2: {
    fontFamily,
    fontWeight: 300,
  },
};

const theme = createMuiTheme({
  palette,
  typography,
});

// Further customize the outcome of the theme
const coef = 0.1;
const modifyRem = (value, coef) => {
  return `${parseFloat(value) * (1 + coef)}rem`;
};

each(theme.typography, (variant, variantName) => {
  if (typeof variant !== 'object') {
    return variant;
  }
  theme.typography[variantName] = {
    ...variant,
    fontSize: modifyRem(variant.fontSize, -coef * 3),
    [theme.breakpoints.up('sm')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 2),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 1),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: modifyRem(variant.fontSize, 0),
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: modifyRem(variant.fontSize, coef),
    },
  };
});

// Make change to display2 variant for xs screen size.
theme.typography.display2 = {
  ...theme.typography.display2,
  fontSize: '1.5rem',
}

export default theme;

// TODO move somewhere else as useful snippet
const makeResponsive = (theme, jssHandle, values) => {
  return {
    [jssHandle]: values['xs'],
    [theme.breakpoints.up('sm')]: {
      [jssHandle]: values['sm'],
    },
    [theme.breakpoints.up('md')]: {
      [jssHandle]: values['md'],
    },
    [theme.breakpoints.up('lg')]: {
      [jssHandle]: values['lg'],
    },
    [theme.breakpoints.up('xl')]: {
      [jssHandle]: values['xl'],
    },
  };
};