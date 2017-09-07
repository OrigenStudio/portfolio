const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  main: { paddingTop: '0px' },
  mainFixedNavbar: {
    marginTop: '64px',
  },
  mainStickyFooter: {
    flex: 1,
  },
  '@media (max-width: 960px)': {
    mainFixedNavbar: {
      marginTop: '56px',
    },
  },
};

export default styles;
