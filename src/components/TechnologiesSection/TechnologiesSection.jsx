import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Section from '../Section';

import styles from './styles';

import technologiesList from '../../data/technologies';

class TechnologiesSection extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
  };
  render() {
    const { classes } = this.props;
    return (
      <Section headline="We can help you with …" className={classes.wrapper}>
        <Grid container spacing={24}>
          {_.map(technologiesList, (tech, index) => (
            <Grid item xs={12} sm={6} md={4} className={classes.item} key={`technology-${index}`}>
              <Grid container justify="center">
                <img className={classes.image} src={tech.image} alt={tech.label} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Section>
    );
  }
}

export default withStyles(styles)(TechnologiesSection);
