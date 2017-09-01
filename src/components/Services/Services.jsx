import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Section from '../../components/Section';

import styles from './styles';

// Data
// TODO move this somewhere elese??
import serviceList from '../../data/serviceList';

class Services extends React.PureComponent {
  render() {
    const {classes} = this.props;
    return (
      <Section headline="We can help you with …" className={classes.wrapper}>
        <Grid container spacing={24}>
          {_.map(serviceList, (service, index) => (
            <Grid item xs={12} sm={6} md={4} className={classes.item} key={`service${index}`}>
              <Grid container justify="center">
                <img className={classes.image} src={service.image} alt="" />
                <div>
                  <Typography type="title" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography type="body1">{service.description}</Typography>
                </div>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Section>
    );
  }
}

export default withStyles(styles)(Services);
