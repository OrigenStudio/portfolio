// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

import styles from './styles';

class NavBar extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    children: PropTypes.element,
    navbarPostion: PropTypes.string,
  };

  render() {
    const { children, navbarPostion, classes } = this.props;
    return (
      <AppBar position={navbarPostion} color="default">
        {children}
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
