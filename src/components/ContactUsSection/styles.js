const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.background.appBar,
    color: theme.palette.getContrastText(theme.palette.background.appBar)
  },
  button: {
    textTransform: 'none',
    padding: '0px',
    '&:hover': {
      background: 'none',
      color: theme.palette.secondary.main,
    },
  }, 
});

export default styles;
