export default theme => ({
    log: console.log(theme),
    footer: {
        backgroundColor: theme.palette.other.veryDarkGrey || theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.other.veryDarkGrey || theme.palette.primary.main),
    }
})