import get from 'lodash/get';

export default theme => () => ({
  footer: {
    backgroundColor: get(
      theme,
      'palette.other.veryDarkGrey',
      theme.palette.primary.main,
    ),
    color: theme.palette.getContrastText(
      get(theme, 'palette.other.veryDarkGrey', theme.palette.primary.main),
    ),
  },
});
