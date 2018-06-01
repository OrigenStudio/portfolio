
const styles = theme => ({
  wrapper: {
    padding: '40px',
    ...theme.palette.gradients.primary,
    minHeight: '50vh', // ensures a min height if the browser doesn't support flex
    flex: 1,
  },
});

export default styles;
