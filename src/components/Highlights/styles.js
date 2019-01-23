export default theme => ({
  container: {
    backgroundColor: 'blue',
  },
  wrapper: {
    color: theme.palette.common.white,
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
    maxWidth: '70%',
  },
  image: {
    width: 'inherit',
  },
});
