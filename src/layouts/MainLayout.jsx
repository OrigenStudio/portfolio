import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import theme from '../config/theme';

import NavBar from '../components/NavBar';

const TemplateWrapper = ({ children, data }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' }, // TODO add SEO
          { name: 'keywords', content: 'sample, something' }, // TODO add SEO
        ]}
      />
      <NavBar title={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  </MuiThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default TemplateWrapper;