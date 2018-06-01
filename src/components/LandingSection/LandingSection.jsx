import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ThreeDSection from '../ThreeDSectionTest2';
import DownArrow from './DownArrow';

import styles from './styles';

class LandingSection extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <ThreeDSection />
        <div className={classes.textArea}>
          <Typography
            variant="display4"
            color="inherit"
            className={classes.text}
          >
            HELLO
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <DownArrow style={{ height: '36px', width: 'auto' }} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingSection);
