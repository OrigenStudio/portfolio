// @flow weak

import { createMuiTheme } from 'material-ui/styles';
import createTypography from 'material-ui/styles/typography';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

import { fontFamily } from './typography';

const palette = createPalette({
  primary: purple, // Purple and green play nicely together.
  accent: {
    ...green,
    A400: '#00e677',
  },
  error: red,
});

const typography = createTypography(palette, {
  fontFamily: fontFamily,
});


const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
