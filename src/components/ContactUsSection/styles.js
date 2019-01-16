const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.other.darkBlue,
    color: theme.palette.getContrastText(theme.palette.other.grayBlue),
  },
  button: {
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundImage: 'linear-gradient(45deg,#2FA7CD,#98e888)',
    cursor: 'pointer',
    // '&:hover': {
    //   // background: 'none',
    //   // color: theme.palette.secondary.main,
    //   color: 'transparent',
    //   WebkitBackgroundClip: 'text',
    //   backgroundImage: 'linear-gradient(45deg,#353578,#2FA7CD)',
    // },
  },
});

export default styles;
