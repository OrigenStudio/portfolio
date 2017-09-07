import React from 'react';

import Projects from '../hidden/Projects';

const ProjectsPageContainer = props => <Projects {...props} />;

export default ProjectsPageContainer;

export const query = graphql`
  query Projects{
    allMarkdownRemark(
      sort: { fields: [frontmatter___index], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            project
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
            description
          }
          html
        }
      }
    }
  }
`;
