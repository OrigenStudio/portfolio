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
    width: '100%',
    height: '100%',
    margin: '0',
    backgroundImage: theme.palette.gradients.primary,
    color: theme.palette.other.lightGrey,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper:{
    display: 'flex',
    alignItems: 'center',
    ...makeResponsive(theme, 'width', {xs:'80%', sm:'80%', md:'70%', lg:'60%', xl:'50%'}),
    ...makeResponsive(theme, 'height', {xs:'80%', sm:'80%', md:'70%', lg:'60%', xl:'50%'})
  }
});

export default styles;
