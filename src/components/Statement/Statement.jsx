import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


import styles from './styles';

class Statement extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems="center" justify="center" className={classes.wrapper}>
        <Grid item xs={12} md={8}>
          <Typography type="display3" color="inherit" className={classes.title}>
            The technical partners for your digital projects
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Statement);
