const styles = theme => ({ 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.other.lightGrey,
        
    },

    textField: {
        marginLeft: theme.spacing.unit *4,
        marginRight: theme.spacing.unit *4,
        width: '100%',
    },

    button: {
        backgroundColor: theme.palette.primary.main, 
        margin: theme.spacing.unit * 4,
    }
  });

export default styles;