const styles = theme => ({
  wrapper: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
  },
  [theme.breakpoints.up('sm')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 6}px`,
    },
  },
  [theme.breakpoints.up('md')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 12}px ${theme.spacing.unit * 10}px`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 16}px ${theme.spacing.unit * 12}px`,
    },
  },
});

export default styles;
