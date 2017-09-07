import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { emojify } from 'react-emojione';

import theme from '../config/theme';

import Layout from '../components/Layout';
import BasicFooter from '../components/FooterTemplates/BasicFooter';
import { logo } from '../images';

// TODO move somewhere else
const smallMessage = `Built with
  ${emojify(':heart_eyes:', { output: 'unicode' })}
    in house`;

const bigMessage = "Let's work together!";

// TODO get from data
const links = [
  { label: 'Services', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Projects', href: '#' },
];

// TODO convert to class
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
      <Layout
        title={data.site.siteMetadata.title}
        logo={logo}
        navbarPostion="fixed"
        footerContent={
          <BasicFooter
            title={data.site.siteMetadata.title}
            logo={logo}
            smallMessage={smallMessage}
            bigMessage={bigMessage}
            links={links}
          />
        }
        stickyFooter
      >
        <div>
          {children()}
        </div>
      </Layout>
    </div>
  </MuiThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default TemplateWrapper;
