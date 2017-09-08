import React from 'react';
import Grid from 'material-ui/Grid';

class ProjectPage extends React.PureComponent {
  render() {
    const { data } = this.props;
    const project = data.markdownRemark;
    return (
      <Grid container>
        <Grid item xs>
          {project.frontmatter.project}
           <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </Grid>
      </Grid>
    );
  }
}

export default ProjectPage;
