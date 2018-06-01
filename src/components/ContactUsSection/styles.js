const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.other.grayBlue,
    color: theme.palette.getContrastText(theme.palette.other.grayBlue)
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
