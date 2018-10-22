const styles = theme => ({
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
  }
});

export default styles;
