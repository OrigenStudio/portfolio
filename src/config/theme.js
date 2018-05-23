// @flow weak
import each from 'lodash/each';
import { createMuiTheme } from 'material-ui/styles';

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
  background: {
    appBar: '#3A3A3A',
  },
  common: {
    black: '#0C1821',
  },
  other: {
    darkBlue: '#333784',
    lightGrey: '#F0F0F0',
    darkGrey: '#18232B',
    veryDarkGrey: '#0C1821',
  },
  gradients: {
    primary:  'linear-gradient(to right, #340e4f 0%, #f91275 100%)',
  },
};

const typography = {
  display4: {
    fontFamily: titlesFontFamily,
    fontWeight: 700,
  },
  display3: {
    fontFamily: titlesFontFamily,
    fontWeight: 700,
  },
  display2: {
    fontFamily: titlesFontFamily,
    fontWeight: 700,
  },
  display1: {
    fontFamily: titlesFontFamily,
    fontWeight: 700,
    fontSize: 1.6,
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
    fontSize: modifyRem(variant.fontSize, -coef * 5),
    [theme.breakpoints.up('sm')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 2.5),
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

export default theme;
