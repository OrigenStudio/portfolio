export default theme => ({
  wrapper: {
    padding: `0 ${theme.spacing.unit * 10}px`,
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  socialButtonWrapper: {
    width: '45px',
    height: '45px',
    padding: 0,
    borderRadius: '50%',
    margin: theme.spacing.unit,
  },
  image: {
    margin: 0,
  },
  [theme.breakpoints.down('md')]: {
    wrapper: {
      padding: `0 ${theme.spacing.unit * 5}px`,
    },
  },
  [theme.breakpoints.down('sm')]: {
    wrapper: {
      padding: `0 ${theme.spacing.unit * 2}px`,
    },
  },
  [theme.breakpoints.down('xs')]: {
    wrapper: {
      padding: `0 ${theme.spacing.unit * 0}px`,
      flexDirection: 'column-reverse',
    },
    socialButtons: {
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
    },
  },
});
