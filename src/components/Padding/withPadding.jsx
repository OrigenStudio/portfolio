import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import styles from './styles';

const withPadding = (options = {}) => Component => {
  const ComponentWithPadding = ({ classes, ...props }) => (
    <div
      className={classNames(classes.wrapper, {
        [classes.scrollingPadding]: options.scrolling,
        [classes.growingPadding]: !options.scrolling,
      })}
    >
      <Component {...props} />
    </div>
  );a
  return withStyles(styles)(ComponentWithPadding);
};

export default withPadding;
