import MainLayout from './MainLayout';

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
