import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../Section';
import styles from './styles';

class ContactUsSection extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
  };

  handleClick = () => {
    console.log('Hello, world! One step closer!');
    window.location.href =
      'mailto:hello@origen.studio?Subject=Lets work together';
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="contact">
        <Section headline="Let’s make it happen" className={classes.wrapper}>
          <Typography variant="display2" color="inherit">
            WE ARE OPEN AND FUN TO WORK WITH YOU {' '}
            <a className={classes.button} onClick={this.handleClick}>
              HELLO@ORIGEN.STUDIO
            </a>
          </Typography>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsSection);
