import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RightArrow from '@material-ui/icons/KeyboardArrowRight';

import Section from '../Section';

import styles from './styles';

class ZetoffInfo extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="intro">
        <Section className={classes.wrapper}>
          <Grid container>
            <Grid item xs={12} className={classes.project}>
              <div className={classes.text}>
                <Typography variant="title" color="inherit">
                  The future is customizable
                </Typography>
                <Typography variant="display2" color="inherit" style={{ marginBottom: '40px' }}>
                  WE'RE THE CREATORS OF{' '}
                  <span className={classes.gradient2}>ZETOFF</span>, A PLATFORM
                  THAT ALLOW US TO{' '}
                  <span className={classes.gradient1}>PERSONALIZE</span> YOUR
                  PRODUCTS
                </Typography>
                <Button
                  variant="outlined"
                  color="default"
                  className={classes.button}
                  href=""
                  onClick={this.handleNavigation}
                >
                  <Typography variant="button" color="inherit">
                    Discover more
                  </Typography>
                  <RightArrow style={{ marginLeft: 15 }} />
                </Button>
              </div>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ZetoffInfo);
