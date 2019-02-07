const styles = theme => ({
  appbar: {
    transition: 'all 400ms ease',
    background: 'transparent',
    boxShadow: 'none',
    color: theme.palette.getContrastText(theme.palette.other.veryDarkGrey),
    opacity: 0,
  },
  transparentAppBar: {
    opacity: 1,
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
