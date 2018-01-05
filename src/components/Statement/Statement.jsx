import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextLoop from 'react-text-loop';

import styles from './styles';

class Statement extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.wrapper}
      >
        <Grid item xs={12} sm={10} md={8}>
          <div className={classes.titleWrapper}>
            <Typography
              type="headline"
              color="inherit"
              className={classes.headline}
            >
              {'< The technical partners for your digital projects />'}
            </Typography>
            <Typography
              type="display2"
              color="primary"
              className={classes.title}
            >
              <span>Your experts in </span>
              <br />
              <TextLoop speed={1500}>
                <span>React</span>
                <span>React-Native</span>
                <span>GraphQL</span>
              </TextLoop>
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Statement);
