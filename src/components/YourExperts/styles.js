const makeResponsive = (theme, jssHandle, values) => {
  return ({
    [jssHandle]: values['xs'],
    [theme.breakpoints.up('sm')]: {
      [jssHandle]: values['sm'],
    },
    [theme.breakpoints.up('md')]: {
      [jssHandle]: values['md'],
    },
    [theme.breakpoints.up('lg')]: {
      [jssHandle]: values['lg'],
    },
    [theme.breakpoints.up('xl')]: {
      [jssHandle]: values['xl'],
    },
  })
}

const styles = theme => ({
  wrapper: {
    backgroundImage: theme.palette.gradients.primary,
    color: theme.palette.common.white,
  },
  textWrapper:{
    display: 'flex',
    alignItems: 'center',
    ...makeResponsive(theme, 'width', {xs:'80%', sm:'100%'}),
    ...makeResponsive(theme, 'height', {xs:'80%', sm:'100%'})
  },
  textLoop: {
    opacity: 0.6,
  },
});

export default styles;
