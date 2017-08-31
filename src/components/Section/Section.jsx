import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import styles from './styles';

class Section extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    headline: PropTypes.string,
    children: PropTypes.element,
  }
  render() {
    const { classes, headline, children } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.headline}>
          <Typography type="display1">{headline}</Typography>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Section);
