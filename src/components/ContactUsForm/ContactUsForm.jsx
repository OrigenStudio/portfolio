import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Section from '../Section';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './styles';

class ContactUsForm extends React.PureComponent {
    static propTypes = {
      classes: PropTypes.shape({}),
    };  

render() {
    const { classes } = this.props;
    return (
        <form className={classes.container}>
            <TextField
                id="with-placeholder"
                label="Email"
                placeholder="adam@gmail.com"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="multiline-static"
                label="How can we help?"
                multiline
                rows="4"
                // placeholder='hola'
                // defaultValue="Default Value"
                className={classes.textField}
                margin="normal"
            />
            <Button variant="contained" className={classes.button}>
                Submit
            </Button>
        </form>
        );
    }
}

export default withStyles(styles)(ContactUsForm);