import {Widgets} from '@material-ui/icons';
const hoverStyle = theme => ({
  background: 'transparent',
  color: theme.palette.common.white,
  textShadow: '0 2px 4px #056A88',
});

export default theme => ({
  wrapper: {
    backgroundColor: theme.palette.other.lightGrey,
    color: theme.palette.getContrastText(theme.palette.other.lightGrey),
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 5,
  },
  item: {
    height: '200px',
  },
  itemImage: {
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    backgroundPosition: 'center center',
  },
  itemText: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    height: '100%',
    width: '100%',
    transition: 'all 0.3s ease',
    '&:hover': {
      ...hoverStyle(theme),
    },
    [theme.breakpoints.down('sm')]: {
      ...hoverStyle(theme),
    },
  },
  expertsLargeScreen:{
    height: '300px',
    marginTop: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]:{
      display:'none',
    }
  },
  expertsSmallScreen:{
    [theme.breakpoints.up('md')]:{
      display:'none',
    }
  }
});