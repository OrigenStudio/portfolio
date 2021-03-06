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

  renderInfo = (project, justifyProp) => {
    const { classes } = this.props;
    return (
      <Grid item xs={12} md={5}>
        <Grid container justify={justifyProp} className={classes.projectInfoWrapper}>
          <Grid container justify="center" className={classes.projectInfo}>
            <SharpImage
              image={project.logo}
              alt={`logo-${project.project}`}
              wrapperClassName={classes.logoWrapper}
            />
            <Typography type="body1" className={classes.description}>
              {project.description}
            </Typography>
            <Button raised color="primary" className={classes.button}>
              <Icon className={classes.icon}>arrow_forward</Icon>
              <span className={classes.text}>Learn more</span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  renderScreenshot = (project) => {
    const { classes } = this.props;

    return (
      <Grid item xs={12} sm>
        <Grid container justify="center" className={classes.screenshotWrapper}>
          <SharpImage
            image={project.screenshot}
            alt={`screenshot-${project.project}`}
            imgClassName={classes.screenshot}
          />
        </Grid>
      </Grid>
    );
  };

  renderProjects = () => {
    const { classes, projects } = this.props;
    return _.map(projects, (project, index) => {
      if (index % 2 !== 0) {
        return (
          <Grid
            item
            xs={12}
            className={classes.project}
            key={`project-${project.node.frontmatter.project}`}
          >
            <Grid container alignItems="center" className={classes.oddProject}>
              {this.renderInfo(project.node.frontmatter, 'flex-start')}
              {this.renderScreenshot(project.node.frontmatter)}
            </Grid>
          </Grid>
        );
      }
      return (
        <Grid
          item
          xs={12}
          className={classes.project}
          key={`project-${project.node.frontmatter.project}`}
        >
          <Grid container alignItems="center" className={classes.evenProject}>
            {this.renderInfo(project.node.frontmatter, 'flex-end')}
            {this.renderScreenshot(project.node.frontmatter)}
          </Grid>
        </Grid>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Section headline="We are proud of..." className={classes.wrapper}>
        <div>
          <Grid container>{this.renderProjects()}</Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography type="headline">We have been working a lot...</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container alignItems="center" justify="center">
                <Button raised color="primary" className={classes.button}>
                  <Icon className={classes.icon}>web</Icon>
                  <span className={classes.text}>Check our portfolio</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Section>
    );
  }
}

export default withStyles(styles)(ProjectsSection);
