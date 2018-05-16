const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  headline:{
    bottomMargin: '5px',
  },
  button: {
    fontSize: '30px',
    textTransform: 'none',
    // color: theme.palette.grey[50],
    padding: '20px',
  },
  text: {
    marginLeft: '5px',
  },
  icon: {
    fontSize: '35px',
  },
});

export default styles;
