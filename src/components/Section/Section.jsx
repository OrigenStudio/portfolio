import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

import styles from './styles';

class Section extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    headline: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    className: PropTypes.string,
  };
  render() {
    const { classes, headline, children, className: classNameProp } = this.props;
    const wrapperClassName = classNames(classes.wrapper, classNameProp);
    return (
      <div className={wrapperClassName}>
        <div className={classes.headline}>
          <Typography type="display1">{headline}</Typography>
        </div>
        <div>{children}</div>
      </div>

    );
  }
}

export default withStyles(styles)(Section);
