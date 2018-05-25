const styles = theme => ({
  appbar: {
    transition: 'all 400ms ease',
    backgroundColor: theme.palette.other.veryDarkGrey,
    color: theme.palette.getContrastText(theme.palette.other.veryDarkGrey),
  },
  transparentAppBar: {
    background: 'transparent',
    boxShadow: 'none',
  },
});

export default styles;
