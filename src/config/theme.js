// @flow weak

import { createMuiTheme } from 'material-ui/styles';

import { fontFamily , titlesFontFamily} from './typography';

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
    primary: {
      backgroundImage: '#340e4f',
      backgroundImage: '-moz - linear - gradient(left, #340e4f 0%, #f91275 100%)',
      backgroundImage:
        '-webkit - linear - gradient(left, #340e4f 0%, #f91275 100%)',
      backgroundImage: 'linear-gradient(to right, #340e4f 0%, #f91275 100%)',
      filter:
        "progid:DXImageTransform.Microsoft.gradient(startColorstr='#340e4f', endColorstr = '#f91275', GradientType = 1)",
    },
  },
};

const typography = {
  display4:{
    fontFamily: titlesFontFamily,
    fontWeight: 700,
  },
  display3:{
    fontFamily: titlesFontFamily,
    fontWeight: 700,
  },
  display2:{
    fontFamily: titlesFontFamily,
    fontWeight: 700,
  },
  display1:{
    fontFamily: titlesFontFamily,
    fontWeight: 700,
  },
  headline:{
    fontFamily,
    fontWeight: 300,
  },
  title:{
    fontFamily,
    fontWeight: 300,
  },
  subheading:{
    fontFamily,
    fontWeight: 300,
  },
  body1:{
    fontFamily,
    fontWeight: 300,
  },
  body2:{
    fontFamily,
    fontWeight: 300,
  },
};

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
