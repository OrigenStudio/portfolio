import { Widgets } from '@material-ui/icons';

export default theme => ({
  wrapper: {
    backgroundColor: theme.palette.other.lightGrey,
    color: theme.palette.getContrastText(theme.palette.other.lightGrey),
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 2,
    color: theme.palette.common.black,
  },
  decoration: {
    width: '15%',
    height: '3px',
    margin: 'auto',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 10,
    background: theme.palette.secondary.main,
  },
  item: {
    height: '475px',
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
    height: '100%',
    width: '100%',
    color: theme.palette.common.white,
    transition: 'all 0.2s ease',
    '&:hover': {
      background: theme.palette.common.black,
    },
    '&:hover $primaryText': {
      display: 'none',
    },
    '&:not(:hover) $secondaryText': {
      display: 'none',
    },
  },
  primaryText: {},
  secondaryText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    height: '100%',
    width: '100%',
    padding: theme.spacing.unit * 4,
  },
  expertsLargeScreen:{
    height: '300px',
    marginTop: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]:{
  },
  // expertsLargeScreen: {
  //   height: '300px',
  //   marginTop: theme.spacing.unit * 5,
  //   [theme.breakpoints.down('sm')]: {
  //     display: 'none',
  //   },
  // },
  // expertsSmallScreen: {
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },
});
