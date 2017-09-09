import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

class BasicNavBar extends React.PureComponent {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
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
    const { links } = this.props;
    return (
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        {this.renderLogo()}
        {_.map(links, link => (
          <Button href={link.href} color="inherit" key={link.label}>
            {link.label}
          </Button>
        ))}
      </Toolbar>
    );
  }
}

export default withStyles(styles)(BasicNavBar);
