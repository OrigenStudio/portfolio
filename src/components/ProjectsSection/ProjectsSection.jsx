import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Section from '../Section';
import ImgTest from '../../images/deployment02.jpg';

import styles from './styles';

class ProjectsSection extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    projects: PropTypes.arrayOf(PropTypes.shape({})),
  };

  render() {
    const { classes } = this.props;
    return (
      <Section headline="Product experts in the digital age" className={classes.wrapper}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display2" color="inherit">
              We help you define, build and execute your projects
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} className={classes.project}>
            <Paper elevation={4}>
              <img src={ImgTest} className={classes.image}/>
            </Paper>
            <Typography variant="title" color="inherit" style={{ paddingTop: 15 }}>
              Project type
            </Typography>
            <Typography variant="display1" color="inherit">
              Project name
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} className={classes.project}>
            <Paper elevation={4}>
              <img src={ImgTest} className={classes.image}/>
            </Paper>
            <Typography variant="title" color="inherit" style={{ paddingTop: 15 }}>
              Project type
            </Typography>
            <Typography variant="display1" color="inherit">
              Project name
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} className={classes.align}>
          <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
            <Typography variant="body1" color="inherit">
              Discover more
            </Typography>
          </Button>
        </Grid>
      </Section>
    );
  }
}

export default withStyles(styles)(ProjectsSection);
