import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { navigateTo } from 'gatsby-link';

import ProjectCard from '../../components/ProjectCard';

import sharpToImgProps from '../../utils/sharpToImgProps';

import styles from './styles';

class Projects extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({}),
    classes: PropTypes.shape({}),
  };

  goTo = (path) => {
    navigateTo(path);
  };

  render() {
    const { data, classes } = this.props;
    const projects = data.allMarkdownRemark.edges;
    return (
      <div className={classes.wrapper}>
        <Grid container align="stretch" justify="center">
          {_.map(projects, project => (
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard project={project.node} onClick={this.goTo} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
