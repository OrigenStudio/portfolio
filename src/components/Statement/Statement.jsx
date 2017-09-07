import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


import styles from './styles';

class Statement extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid container align="center" justify="flex-end" className={classes.wrapper}>
        <Grid item xs={12} md={8}>
          <div className={classes.titleWrapper}>
            <Typography type="display4" color="inherit" className={classes.title}>
              Your mission, <br/>
              our goal
            </Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography type="subheading" color="inherit">
              We do provide a series of product and software development services.
              We work with you in order to understand your problems
              and requirements, so that we can provide the best possible
               solutions on time and on budget.
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Statement);
