import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

class HighlightsBase extends React.PureComponent {
  render() {
    const {
      classes,
      reverseOrder = false,
      title,
      description,
      image,
    } = this.props;
    return (
      <div>
        <Grid
          container
          spacing={24}
          alignItems="center"
          direction={reverseOrder ? 'row-reverse' : 'row'}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={7} className={classes.textContainer}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography
              variant="display1"
              color="inherit"
              className={classes.description}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.imageContainer}>
            <div className={classes.imageWrapper}>
              <img src={image} className={classes.image} />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HighlightsBase);
