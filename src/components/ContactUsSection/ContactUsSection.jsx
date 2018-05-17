import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
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
          <span>
            <Typography variant="display2" color="inherit">
              We are open and fun to work with
            </Typography>
            <Button
              color="primary"
              className={classes.button}
              onClick={this.handleClick}
            >
              <Typography
                variant="display2"
                color="inherit"
                className={classes.contactLink}
              >
                hello@origen.studio
              </Typography>
            </Button>
          </span>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsSection);
