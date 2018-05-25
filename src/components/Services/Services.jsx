import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Padding from '../../components/Padding';
import YourExperts from '../../components/YourExperts';
// Data
// TODO move this somewhere else??
import serviceList from '../../data/serviceList';
import styles from './styles';

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
                      {service.firstLine}
                      <br />
                      {service.secondLine ? service.secondLine : null}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
            <Grid item xs={6} md={4} key={'experts'} className={[classes.item, classes.expertsSmallScreen]}>
              <YourExperts typographyVariant="display1"/>
            </Grid>
          </Grid>
          <div className={classes.expertsLargeScreen}>
            <YourExperts />
          </div>
        </Padding>
      </div>;
  }
}

export default withStyles(styles)(Services);
