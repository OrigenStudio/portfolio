import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import styles from './styles';

import NavBar from '../NavBar';
import Footer from '../Footer';

class Layout extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    classes: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    navbarPostion: PropTypes.string,
    stickyFooter: PropTypes.boolean,
  };
  static defaultProps = {
    title: '',
    navbarPostion: 'default',
    stickyFooter: true,
  };
  render() {
    const { title, classes, children, navbarPostion, stickyFooter } = this.props;

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedNavbar}`]: navbarPostion === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
    );
    return (
      <div className={classes.layout}>
        <NavBar title={title} />
        <main className={mainClassnames}>{children}</main>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
