import MainLayout from './MainLayout';
import materialUISSR from './materialUISSR';
import materialUIClientRender from './materialUIClientRender';

export default MainLayout;

// eslint-disable-next-line no-undef
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
exports.onInitialClientRender = materialUIClientRender;
