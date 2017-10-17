// @flow weak

import { createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';

import f0b860 from './colors/f0b860';

import { fontFamily } from './typography';

const palette = {
  primary: f0b860,
  secondary: {
    ...teal,
  },
  background: {
    appBar: '#3A3A3A',
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
