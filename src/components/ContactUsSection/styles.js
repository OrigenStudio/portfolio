const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.background.appBar,
    color: theme.palette.getContrastText(theme.palette.background.appBar)
  },
  button: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      background: 'none',
      color: theme.palette.secondary.main,
    },
  }, 
});

export default styles;
