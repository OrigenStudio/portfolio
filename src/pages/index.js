import React from 'react';
import LandingPage from '../hidden/LandingPage';

const LandingPageContainer = props => <LandingPage {...props} />;

export default LandingPageContainer;

export const query = graphql`
  query HighlightedProjects {
    allMarkdownRemark(
      sort: { fields: [frontmatter___index], order: ASC }
      filter: { frontmatter: { highlight: { eq: true } } }
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
        }
      }
    }
  }
`;
