import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import classNames from 'classnames';

import ThreeDSectionBigScreen from '../ThreeDSectionBigScreen';
import ThreeDSectionSmallScreen from '../ThreeDSectionSmallScreen';
import DownArrow from './DownArrow';
import LandingSectionTitleFade from './LandingSectionTitleFade';

import styles from './styles';

class LandingSection extends React.PureComponent {
  render() {
    const { classes, width } = this.props;
    
    return (
      <div className={classes.wrapper}>
        {isWidthDown('sm', width) ? (
          <ThreeDSectionSmallScreen />
        ) : (
          <ThreeDSectionBigScreen />
        )}
        <div className={classNames(classes.textArea, classes.textFade)}>
          <LandingSectionTitleFade>
            <Typography
              variant="display4"
              color="inherit"
              className={classes.text}
            >
              HELLO
            </Typography>
          </LandingSectionTitleFade>
        </div>
        <div className={classes.iconWrapper}>
          <DownArrow style={{ height: '36px', width: 'auto' }} />
        </div>
      </div>
    );
  }
}

export default compose(withStyles(styles), withWidth())(LandingSection);
