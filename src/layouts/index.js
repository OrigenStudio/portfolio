import MainLayout from './MainLayout';
import materialUISSR from './materialUISSR';

export default MainLayout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

exports.replaceRenderer = materialUISSR;
