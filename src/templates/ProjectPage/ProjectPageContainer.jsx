import React from 'react';
import ProjectPage from './ProjectPage';

const ProjectPageContainer = props => <ProjectPage {...props} />;

export default ProjectPageContainer;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        project
        description
        logo {
          childImageSharp {
            responsiveSizes(maxWidth: 400) {
              src
              srcSet
              sizes
            }
          }
        }
        screenshot {
          childImageSharp {
            responsiveSizes(maxWidth: 1900) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;
