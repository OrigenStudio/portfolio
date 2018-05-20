export default theme => ({
    wrapper:{
        padding: `0 ${theme.spacing.unit * 10}px`,
    },
    socialButtons:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    socialButtonWrapper:{
        width:'45px',
        height: '45px',
        padding: 0,
        borderRadius: '50%',
        margin: theme.spacing.unit,
    },
    image:{
        margin:0,
    }
})