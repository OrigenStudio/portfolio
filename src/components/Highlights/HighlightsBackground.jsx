import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class HighlightsBackground extends React.PureComponent {
  render() {
    const { classes, children, background, backgroundStyle } = this.props;
    return (
      <div className={classes.container} style={{
        ...backgroundStyle,
        backgroundImage: `url(${background})`
      }}>
        <div className={classes.wrapper}>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HighlightsBackground);
