const styles = theme => ({
  container: {},
  wrapper: {},
  title: {
    textTransform: 'uppercase',
  },
  textIntro: {
    marginBottom: theme.spacing.unit * 10,
    maxWidth: '60%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  decoration: {
    width: '8%',
    height: '3px',
    margin: 'auto',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      width: '15%',
    },
  },
  item: {
    width: '35%',
    paddingBottom: '35%',
    position: 'relative',
    display: 'inherit',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      width: '60%',
      paddingBottom: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingBottom: '100%',
    },
  },
  itemBackground: {
    width: '95%',
    height: '70%',
    position: 'absolute',
    display: 'inherit',
    flexFlow: 'column',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      height: '85%',
    },
    [theme.breakpoints.down('xs')]: {
      height: '95%',
    },
  },
  itemText: {
    paddingTop: theme.spacing.unit,
  },
});

export default styles;
