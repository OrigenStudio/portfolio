import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
        <Section
          headline="Product experts in the digital age"
          className={classes.wrapper}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="display3"
                color="inherit"
                style={{ marginBottom: '40px' }}
              >
                WE HELP YOU <span className={classes.gradient1}>DEFINE</span>,{' '}
                <span className={classes.gradient2}>BUILD</span> AND{' '}
                <span className={classes.gradient3}>EXECUTE</span> YOUR PROJECTS
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsSection);
