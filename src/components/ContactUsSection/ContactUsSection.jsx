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

  render() {
    const { classes } = this.props;
    return (
      <Section headline="We don't bite..." className={classes.wrapper}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography type="headline">
              We are open and fun to work with. You won’t regret it.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container alignItems="center" justify="center">
              <Button raised color="primary" className={classes.button}>
                <Icon className={classes.icon}>forum</Icon>
                <span className={classes.text}>Contact us!</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Section>
    );
  }
}

export default withStyles(styles)(ContactUsSection);
