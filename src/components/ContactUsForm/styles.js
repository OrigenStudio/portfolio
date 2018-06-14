const styles = theme => ({ 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.other.lightGrey,
    },

    textField: {
        marginLeft: theme.spacing.unit *2,
        marginRight: theme.spacing.unit *2,
        width: '100%',
    },

    button: {
        backgroundColor: theme.palette.primary.main, 
        margin: theme.spacing.unit * 2,
    }
  });

export default styles;