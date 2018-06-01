export default theme => ({
    wrapper: {
        backgroundSize: 'cover',
        height: 'calc(100vh)',
        padding: 0,
        width: '100%',
        margin: 0,
        background: 'rgb(11, 16, 21)',
        background: 'radial-gradient(circle, rgba(45,167,205,1) 2%, rgba(13,49,73,1) 30%, rgba(11,16,21,1) 100%)',
    },
    textArea:{
        width: '100%',
        height: '100%',
        position: 'relative',
        top: '-100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: theme.palette.common.white,
    },
    iconWrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
        top: '-200%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: theme.spacing.unit
    }
})