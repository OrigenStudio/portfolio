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
    width: '100%',
    height: 'auto',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      height: '235px',
    },
  },
  itemBackground: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
