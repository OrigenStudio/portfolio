const styles = theme => ({
  root: {
    width: '100%',
    overflow: 'auto',
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  listSection: {
    maxWidth: '60%',
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  listText: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.common.white,
    backgroundImage: 'linear-gradient(45deg,#372151,#f21d75)',
  },
});

export default styles;
