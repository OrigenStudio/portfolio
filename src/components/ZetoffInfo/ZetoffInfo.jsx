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
            <Grid item xs={12} md={8} className={classes.project}>
              <div className={classes.text}>
              <Typography variant="title" color="inherit">
                OWN PROJECT
              </Typography>
              <Typography variant="display2" color="inherit">
                ZETOFF
              </Typography>
              <Typography variant="body2" color="inherit">
                Project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              </div>
              <Paper className={classes.image} elevation={2}>
                <img
                  className={classes.img}
                  alt="zetoff"
                  src="http://imprimalia3d.com/sites/default/files/blog/admin/zetoff.jpg"
                />
              </Paper>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ZetoffInfo);
