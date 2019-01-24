import { left } from "glamor";

export default theme => ({
    root: {
      width: '100%',
      //maxWidth: 360,
      backgroundColor: 'inherit',
      position: 'relative',
      overflow: 'auto',
      //maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
      margin: 'auto',
      width: '70%',
      padding: 10,
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    button: {
        backgroundColor: 'white',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        width: '15%',
        cursor: 'pointer',
    },
    center: {
        textAlign: 'center',
        margin: 'auto',
    },
  });