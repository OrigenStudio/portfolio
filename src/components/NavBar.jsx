// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  flex: {
    flex: 1,
  },
  logo: {
    flex: 1,
    cursor: 'pointer',
    height: '45px',
    minWidth: '160px',
  },
  image: {
    height: '100%',
    margin: '0',
    padding: '0',
  },
};

class NavBar extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    logo: PropTypes.string,
  };

  renderLogo = () => {
    const { classes, title, logo } = this.props;
    if (logo) {
      return (
        <div className={classes.logo}>
          <img src={logo} alt={title} className={classes.image} />
        </div>
      );
    }
    return (
      <Typography type="title" color="inherit" className={classes.flex}>
        {title}
      </Typography>
    );
  };

  render() {
    const { classes, navbarPostion } = this.props;
    return (
      <AppBar position={navbarPostion} color="default">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          {this.renderLogo()}
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Projects</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
