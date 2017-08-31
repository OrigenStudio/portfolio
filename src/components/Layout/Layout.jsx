import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import styles from './styles';

import NavBar from '../NavBar';
import Footer from '../Footer';

// TODO create Layout Library

class Layout extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    classes: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    navbarPostion: PropTypes.string,
    stickyFooter: PropTypes.bool,
    footerContent: PropTypes.element,
  };

  static defaultProps = {
    title: '',
    navbarPostion: 'default',
    stickyFooter: false,
  };
  render() {
    const {
      title,
      logo,
      classes,
      children,
      navbarPostion,
      stickyFooter,
      footerContent,
    } = this.props;

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedNavbar}`]: navbarPostion === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
    );
    return (
      <div className={classes.layout}>
        <NavBar title={title} logo={logo} />
        <main className={mainClassnames}>{children}</main>
        {footerContent ? <Footer>{footerContent}</Footer> : null}
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
