import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import Section from '../Section';
import SharpImage from '../SharpImage';

import styles from './styles';

class ProjectsSection extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    projects: PropTypes.arrayOf(PropTypes.shape({})),
  };

  render() {
    const { classes } = this.props;
    return (
      <Section headline="We are proud of..." className={classes.wrapper}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display2" color="inherit">
              We help you define, build and execute your projects
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} style={{backgroundColor: 'red'}} className={classes.project} >Project 1</Grid>
          <Grid xs={12} sm={6} className={classes.project}>Project 2</Grid>
        </Grid>
      </Section>
    );
  }
}

export default withStyles(styles)(ProjectsSection);
