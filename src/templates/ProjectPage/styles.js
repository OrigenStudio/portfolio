
const styles = theme => ({
  wrapper: {
    padding: '40px',
    ...theme.palette.gradients.primary,
    minHeight: '50vh', // ensures a min height if the browser doesn't support flex
    flex: 1,
  },
  paper: {
    padding: '16px 24px',
  },
  logo: {
    display: 'block',
    objectFit: 'scale-down',
    width: '100%',
    height: 'auto',
  },
  logoWrapper: {
    width: '80%',
    maxWidth: '300px',
    minHeight: '65px',
    marginRight: 'auto',
  },
  '@media (max-width: 960px)': {
    wrapper: {
      padding: '10px',
    },
    logoWrapper: {
      marginLeft: 'auto',
    },
  },
});

export default styles;
