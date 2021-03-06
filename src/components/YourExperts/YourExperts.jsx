import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import TextLoop from 'react-text-loop';
import styles from './styles';

class YourExperts extends React.PureComponent {
  render() {
    const { classes, typographyVariant } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <Typography
            variant={typographyVariant || "display2"}
            color="inherit"
            className={classes.title}
          >
            <span>WE ARE YOUR <br/> EXPERTS IN </span>
            <TextLoop speed={1500}>
              <span>React</span>
              <span>React-Native</span>
              <span>GraphQL</span>
              <span>MongoDB</span>
              <span>MeteorJS</span>
              <span>ThreeJS</span>
              <span>WebGL</span>
            </TextLoop>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(YourExperts);
