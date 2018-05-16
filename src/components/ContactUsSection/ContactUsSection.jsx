import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import Section from '../Section';

import styles from './styles';

class ContactUsSection extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
  };

  handleClick = () => {
    console.log('Hello, world! One step closer!');
    window.location.href = 'mailto:hello@origen.studio?Subject=Lets work together';
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="contact">
        <Section headline="We don't bite..." className={classes.wrapper}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Typography variant="headline" color="inherit">
                We are open and fun to work with. You won’t regret it.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container alignItems="center" justify="center">
                <Button
                  raised
                  color="primary"
                  className={classes.button}
                  onClick={this.handleClick}
                >
                  <Icon className={classes.icon}>forum</Icon>
                  <span className={classes.text}>Contact us!</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsSection);
