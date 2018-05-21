export default theme => ({
    wrapper: {
        backgroundSize: 'cover',
        height: 'calc(100vh - 300px)',
        padding: 0,
        width: '100%',
        margin: 0,
        background: 'rgb(71, 124, 150)',
        background: 'radial-gradient(circle, rgba(47,167,205,1) 0%, rgba(51,55,132,1) 50%, rgba(13,24,34,1) 100%)',
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
        textShadow:' 2px 3px 6px rgba(247,25,142,0.50)',
    }
})