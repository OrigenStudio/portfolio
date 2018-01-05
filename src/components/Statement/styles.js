import { statementBackground } from './../../images';

const styles = theme => ({
  wrapper: {
    backgroundSize: 'cover',
    height: 'calc(100vh - 54px)',
    padding: '50px 30px',
    width: '100%',
    margin: '0',
  },
  titleWrapper: {
    backgroundColor: theme.palette.primary[500],
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    color: theme.palette.getContrastText(theme.palette.background.appBar),
    textAlign: 'right',
  },
  '@media (max-width: 960px)': {
    titlewrapper: {
      textAlign: 'center',
    },
    title: {
      fontSize: '50px',
    },
    subtitle: {
      textAlign: 'center',
    },
  },
});

export default styles;
