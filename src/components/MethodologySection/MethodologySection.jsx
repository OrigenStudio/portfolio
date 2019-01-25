import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import _ from 'lodash';

import styles from './styles';
import Section from '../Section';
import methodology from '../../data/methodology';

class MethodologySection extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Section className={classes.wrapper}>
          <div className={classes.textIntro}>
            <Typography
              variant="display2"
              color="inherit"
              align="center"
              className={classes.title}
            >
              Our methodology
            </Typography>
            <Divider className={classes.decoration} />
            <Typography
              variant="subheading"
              color="inherit"
              align="center"
              className={classes.description}
            >
              We can be your turn-key technical development team or we can work
              along with your team to deliver a great product.
            </Typography>
          </div>
          <Grid container>
            {_.map(methodology, (methods, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={`methods${index}`}
                className={classes.item}
              >
                <div
                  className={classes.itemBackground}
                  style={{ ...methods.gradient }}
                >
                  <div className={classes.itemIcon}>
                    <img src={methods.icon} className={classes.image} />
                  </div>
                  <div className={classes.itemText}>
                    <Typography
                      variant="display1"
                      color="inherit"
                      className={classes.primaryText}
                    >
                      {methods.firstLine}
                      <br />
                      {methods.secondLine}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(MethodologySection);
