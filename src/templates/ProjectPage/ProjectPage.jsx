import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import SharpImage from '../../components/SharpImage';

import styles from './styles';

class ProjectPage extends React.PureComponent {
  render() {
    const { data, classes } = this.props;
    const project = data.markdownRemark;
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container direction="column">
            <Grid item xs>
              <SharpImage
                image={project.frontmatter.logo}
                alt={`logo-${project.frontmatter.project}}`}
                wrapperClassName={classes.logoWrapper}
              />
            </Grid>
            <Grid item xs>
              <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectPage);
