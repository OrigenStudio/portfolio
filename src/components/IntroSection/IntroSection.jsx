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
        <Section headline="Product experts in the digital age" className={classes.wrapper} classes={classes}>
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
