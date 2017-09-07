import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import sharpToImgProps from '../../utils/sharpToImgProps';

import styles from './styles';

class Projects extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({}),
    classes: PropTypes.shape({}),
  };
  render() {
    const { data, classes } = this.props;
    const projects = data.allMarkdownRemark.edges;
    return (
      <Grid container align="stretch" justify="center" className={classes.wrapper}>
        {_.map(projects, project => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div className={classes.logoWrapper}>
                  <img
                    {...sharpToImgProps(project.node.frontmatter.logo)}
                    alt={`logo-${project.node.frontmatter.project}`}
                    className={classes.logo}
                  />
                </div>
                <Typography type="body1">{project.node.frontmatter.description}</Typography>
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Projects);
