export default theme => ({
  wrapper: {
    backgroundColor: theme.palette.other.lightGrey,
    color: theme.palette.getContrastText(theme.palette.other.lightGrey),
  },
  title:{
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3,
  },
  item: {
    height: '200px',
  },
  itemImage:{
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  },
  itemText:{
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    height: '100%',
    width: '100%',
    transition: 'all 0.5s ease',
    '&:hover':{
      background: 'transparent',
      color: theme.palette.common.white,
    }
  }

});
