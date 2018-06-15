const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.common.black,
  },
  project:{
    // marginTop: theme.spacing.unit * 5,
    color: theme.palette.common.black,
  },

  image:{
    width: '100%',
    height: 'auto',
  },

  align:{
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
  },

  button:{
    border: '1px solid black',
  },

});

export default styles;
