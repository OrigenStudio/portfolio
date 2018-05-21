import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import compose from 'recompose/compose';

import Padding from '../Padding';

import styles from './styles';

class Section extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    headline: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
    className: PropTypes.string,
  };
  render() {
    const {
      classes,
      headline,
      children,
      className: classNameProp,
    } = this.props;
    const wrapperClassName = classNames(classes.wrapper, classNameProp);
    return (
      <div className={wrapperClassName}>
        <Padding>
          <div className={classes.headline}>
            <Typography variant="title" color="inherit">
              {headline}
            </Typography>
          </div>
          <div>{children}</div>
        </Padding>
      </div>
    );
  }
}

export default withStyles(styles)(Section);
