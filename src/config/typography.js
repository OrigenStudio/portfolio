// @flow weak

// TODO typography needs to be set for the Material-ui theme and for the typography theme.

import Typography from 'typography';

const fontFamily = ['Source Sans Pro', 'sans-serif'];

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.56,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['200', '400', '400i', '700'],
    },
    {
      name: 'Material Icons',
      styles: ['400'],
    },
  ],
  scaleRatio: 2.5,
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
  headerColor: 'hsla(0,0%,0%,0.85)',
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerWeight: '200',
  bodyWeight: 400,
  boldWeight: 700,
});

export { fontFamily, typography };
export default typography;
