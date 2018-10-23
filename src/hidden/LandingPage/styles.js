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
  toolbar: {
    minHeight: '100px',
  },
  logo: {
    flex: 1,
    cursor: 'pointer',
    height: '60px',
    minWidth: '160px',
  },
  image: {
    height: '100%',
    margin: '0',
    padding: '0',
  },
});

export default styles;
