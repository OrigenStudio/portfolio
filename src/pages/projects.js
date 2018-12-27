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
            description
          }
          fields{
            slug
          }
          html
        }
      }
    }
  }
`;
