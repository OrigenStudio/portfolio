import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import Padding from '../../components/Padding';

import styles from './styles';

// Data
// TODO move this somewhere else??
import serviceList from '../../data/serviceList';

class Services extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return <div className={classes.wrapper}>
        <Padding>
          <Typography variant="display2" className={classes.title}>
            Our services
          </Typography>
          <Grid container spacing={16}>
            {_.map(serviceList, (service, index) => (
              <Grid
                item
                xs={6}
                md={4}
                key={`service${index}`}
                className={classes.item}
              >
                <div
                  className={classes.itemImage}
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                >
                <div className={classes.itemText}>
                  <Typography
                    variant="display1"
                    component="h2"
                    color="inherit"
                  >
                    {service.title}
                  </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Padding>
      </div>;
  }
}

export default withStyles(styles)(Services);
