import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import Section from '../Section';

import styles from './styles';

class ContactUsSection extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="intro">
        <Section headline="Product experts in the digital age" className={classes.wrapper}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="display2" color="inherit">We help you define, build and execute your projects</Typography>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsSection);
