const styles = theme => ({
  container:{
    marginTop: '100vh',
  },
  wrapper: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  gradient1: {
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundImage: 'linear-gradient(45deg,#EC414B,#FEDF60)',
  },
  gradient2: {
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundImage: 'linear-gradient(45deg,#34ADE1,#8EC86E)',
  },
  center: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
  },
  button: {
    border: '1px solid black',
  }
});

export default styles;
