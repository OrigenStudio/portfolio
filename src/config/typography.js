// @flow weak

// TODO typography needs to be set for the Material-ui theme and for the typography theme.

import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Work Sans',
      styles: ['300'],
    },
    {
      name: 'Montserrat',
      styles: ['700'],
    },
    {
      name: 'Material Icons',
      styles: ['400'],
    },
  ],
});

const fontFamily = ['Work Sans', 'sans-serif'];
const  titlesFontFamily = ['Montserrat', ...fontFamily];

export { fontFamily, titlesFontFamily, typography };
export default typography;
