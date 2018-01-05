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
    padding: '20px',
  },
  headline: {
    marginBottom: '20px',
  },
  '@media (max-width: 960px)': {
    title: {
      fontSize: '2.4em',
    },
  },
  '@media (min-width: 961px)': {
    headline: {
      whiteSpace: 'nowrap',
    },
  },
  '@media (min-width: 1601px)': {
    headline: {
      fontSize: '2.5em',
    },
    title: {
      fontSize: '4em',
    },
  },
});

export default styles;
