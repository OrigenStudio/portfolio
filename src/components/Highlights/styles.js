export default theme => ({
  container: {
    backgroundColor: theme.palette.other.darkBlue,
    backgroundSize: '100% auto',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      backgroundSize: 'auto 60%', 
    },
  },
  wrapper: {
    color: theme.palette.common.white,
    padding: `0px ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.up('sm')]: {
      padding: `0px ${theme.spacing.unit * 8}px`,
    },
    [theme.breakpoints.up('md')]: {
      padding: `0px ${theme.spacing.unit * 12}px`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `0px ${theme.spacing.unit * 14}px`
    },
  },
  gridContainer: {
    color: theme.palette.common.white,
    padding: `${theme.spacing.unit * 15}px 0`,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      padding: `${theme.spacing.unit * 5}px 0`,
    },
  },
  imageContainer: {
    display: 'inherit',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '80%',
  },
  image: {
    width: 'inherit',
  },
  description: {
    textTransform: 'uppercase',
  }
});
