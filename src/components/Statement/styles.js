import { statementBackground } from './../../images';

const styles = theme => ({
  wrapper: {
    background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9) ), url(${statementBackground})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    minHeight: '500px',
    height: '40%',
    padding: '50px 30px',
    width: '100%',
    margin: '0',
  },
  titleWrapper: {
    backgroundColor: theme.palette.primary[500],
    padding: '20px',
    textAlign: 'right',
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
