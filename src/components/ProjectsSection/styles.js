const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.grey[200],
  },
  button: {
    fontSize: '30px',
    textTransform: 'none',
    // color: theme.palette.grey[50],
  },
  text: {
    marginLeft: '5px',
  },
  icon: {
    fontSize: '35px',
  },
  project: {
    marginBottom: '50px',
  },
  projectInfo: {
    width: '80%',
    maxWidth: '450px',
    marginBottom: '20px',
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
  },
  screenshot: {
    display: 'block',
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
  screenshotWrapper: {
  },
  description: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  '@media (max-width: 960px)': {
    projectInfoWrapper: {
      justifyContent: 'center',
    },
  },
  '@media (min-width: 960px)': {
    evenProject: {
      flexDirection: 'row',
    },
    oddProject: {
      flexDirection: 'row-reverse',
    },
  },
});

export default styles;
