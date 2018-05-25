import _ from 'lodash';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

class MinimalFooter extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    classes: PropTypes.shape({}),
    socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
  };
  static defaultProps = {
    title: 'Brand',
  };

  render() {
    const { classes, title, message, socialLinks } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        justify="space-around"
        spacing={16}
        className={classes.wrapper}
      >
        <Grid item xs={12} sm={6} className={classes.text}>
          <Typography variant="body1" color="inherit">
            {message}
          </Typography>
          <Typography variant="caption" color="inherit">
            {title} © {new Date().getFullYear()}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.socialButtons}>
          {_.map(socialLinks, link => (
            <ButtonBase href={link.url} className={classes.socialButtonWrapper}>
              <img src={link.image} className={classes.image} />
            </ButtonBase>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MinimalFooter);
