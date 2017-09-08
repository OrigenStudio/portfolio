import primaryGradient from '../../config/colors/primaryGradient';

const styles = {
  wrapper: {
    padding: '40px',
    backgroundImage: primaryGradient,
    minHeight: '50vh', // ensures a min height if the browser doesn't support flex
    flex: 1,
  },
};

export default styles;
