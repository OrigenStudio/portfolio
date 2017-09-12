import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import controllable from 'react-controllables';

import styles from './styles';

import NavBar from '../NavBar';
import Footer from '../Footer';

// TODO create Layout Library

class Layout extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    classes: PropTypes.shape({}),
    children: PropTypes.element.isRequired,
    navbarPostion: PropTypes.string,
    stickyFooter: PropTypes.bool,
    footerContent: PropTypes.element,
    navBarContent: PropTypes.element,
    drawerOpen: PropTypes.bool.isRequired,
    onDrawerOpenChange: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    navbarPostion: 'default',
    stickyFooter: false,
    drawerOpen: false,
  };

  handleDrawerClose = () => {
    if (!this.props.onDrawerOpenChange) return;

    this.props.onDrawerOpenChange(false);
  };

  toggleDrawer = () => {
    if (!this.props.onDrawerOpenChange) return;

    this.props.onDrawerOpenChange(!this.props.drawerOpen);
  };

  render() {
    const {
      title,
      logo, // TODO what kind of logo can we expect?.....
      classes = {},
      children,
      navbarPostion,
      stickyFooter,
      footerContent,
      navBarContent,
      drawerOpen,
    } = this.props;

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedNavbar}`]: navbarPostion === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
    );

    return (
      <div className={classes.layout}>
        <NavBar title={title} logo={logo} onIconClick={this.toogleDrawer}>
          {navBarContent}
        </NavBar>
        <Drawer open={drawerOpen} onRequestClose={this.handleDrawerClose}>
          <div>dolor</div>
        </Drawer>
        <main className={mainClassnames}>{children}</main>
        {footerContent ? <Footer>{footerContent}</Footer> : null}
      </div>
    );
  }
}

export default controllable(Layout, ['drawerOpen', 'color']);
