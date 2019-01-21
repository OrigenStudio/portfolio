import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import TextLoop from 'react-text-loop';
import styles from './styles';

import Section from '../Section';

class YourExperts extends React.PureComponent {
  render() {
    const { classes, typographyVariant } = this.props;
    return (
      <Section className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <Typography
            variant={typographyVariant || 'display3'}
            color="inherit"
            className={classes.title}
          >
            <span>WE ARE YOUR EXPERTS IN </span>
            <TextLoop speed={2000}>
              <span className={classes.textLoop}>React</span>
              <span className={classes.textLoop}>React-Native</span>
              <span className={classes.textLoop}>GraphQL</span>
              <span className={classes.textLoop}>MongoDB</span>
              <span className={classes.textLoop}>MeteorJS</span>
              <span className={classes.textLoop}>ThreeJS</span>
              <span className={classes.textLoop}>WebGL</span>
            </TextLoop>
            <br />
            <span>LOREM IPSUM DOLOR SIT AMET</span>
          </Typography>
        </div>
      </Section>
    );
  }
}

export default withStyles(styles)(YourExperts);
