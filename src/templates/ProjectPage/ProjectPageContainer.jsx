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
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        screenshot {
          childImageSharp {
            fluid(maxWidth: 1900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
