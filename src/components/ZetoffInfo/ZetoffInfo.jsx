import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

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
              <Typography variant="display2" color="inherit">
                DO YOU WANT TO SELL <span className={classes.gradient1}>PERSONALIZABLE</span> OBJECTS? <span className={classes.gradient2}>ZETOFF</span> IS YOUR ANSWER 
              </Typography>
              </div>
            </Grid>
            {/* <Grid item xs={12} md={8} className={classes.project}>
              <div className={classes.link}>
              <Button>

              </Button>
              </div>
            </Grid> */}
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ZetoffInfo);
