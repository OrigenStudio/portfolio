// @flow weak

import { createMuiTheme } from 'material-ui/styles';

import { fontFamily } from './typography';

const palette = {
  primary: {
    main: '#2FA7CD',
  },
  secondary: {
    main: '#E72476',
  },
  background: {
    appBar: '#3A3A3A',
  },
  other: {
    darkBlue: '#333784',
    lightGrey: '#F0F0F0',
    darkGrey: '#18232B',
    veryDarkGrey: '#0C1821',
  },
  gradients: {
    primary: {
      background: '#340e4f',
      background: '-moz - linear - gradient(left, #340e4f 0 %, #f91275 100 %)',
      background:
        '-webkit - linear - gradient(left, #340e4f 0 %, #f91275 100 %)',
      background: 'linear - gradient(to right, #340e4f 0 %, #f91275 100 %)',
      filter:
        "progid:DXImageTransform.Microsoft.gradient(startColorstr='#340e4f', endColorstr = '#f91275', GradientType = 1)",
    },
  },
};

const typography = {
  fontFamily,
};

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
