const styles = theme => ({
  wrapper: {
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`,
  },
  [theme.breakpoints.up('sm')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 12}px ${theme.spacing.unit * 8}px`,
    },
  },
  [theme.breakpoints.up('md')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 18}px ${theme.spacing.unit * 12}px`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    wrapper: {
      padding: `${theme.spacing.unit * 20}px ${theme.spacing.unit * 14}px`,
    },
  },
});

export default styles;
