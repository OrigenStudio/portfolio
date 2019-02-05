import get from 'lodash/get';

export default theme => () => ({
  footer: {
    backgroundColor: get(
      theme,
      'palette.other.darkBlue',
      theme.palette.primary.main,
    ),
  },
});
