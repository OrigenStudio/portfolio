const styles = theme => ({
  wrapper: {
    padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 4}px`,
  },
  [theme.breakpoints.up('sm')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 10}px`,
    },
  },
  [theme.breakpoints.up('md')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 15}px ${theme.spacing.unit * 25}px`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 25}px ${theme.spacing.unit * 35}px`,
    },
  },
  grow:{
    height:'100%',
  }
});

export default styles;
