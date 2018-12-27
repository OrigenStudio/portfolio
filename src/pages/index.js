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
        }
      }
    }
  }
`;
