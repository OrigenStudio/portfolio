// @flow weak

import { createMuiTheme } from 'material-ui/styles';
import createTypography from 'material-ui/styles/typography';
import createPalette from 'material-ui/styles/palette';
import teal from 'material-ui/colors/teal';

import f0b860 from './colors/f0b860';

import { fontFamily } from './typography';

const palette = createPalette({
  primary: f0b860,
  accent: {
    ...teal,
  },
});

palette.background.appBar = '#393939';

const typography = createTypography(palette, {
  fontFamily,
});

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
