import { statementBackground } from './../../images';

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
    width: '60%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
  }
});

export default styles;
