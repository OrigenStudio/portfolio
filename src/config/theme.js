// @flow weak

import { createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';

import alizarin from './colors/alizarin';

import { fontFamily } from './typography';

const palette = {
  primary: alizarin,
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
