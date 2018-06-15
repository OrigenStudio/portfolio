import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import styles from './styles';

const ComponentWithPadding = ({ classes, children, ...props }) => (
  <div className={classNames(classes.wrapper, {[classes.grow]: props.grow})}>
    {children}
  </div>
);

export default withStyles(styles)(ComponentWithPadding);
