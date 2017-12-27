import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import { emojify } from 'react-emojione';
import Layout, {
  BasicFooter,
  BasicAppBar,
  BasicDrawer,
} from 'material-ui-layout';

import theme from '../config/theme';

import { logo } from '../images';

// TODO move somewhere else
const smallMessage = `Built with
  ${emojify(':heart_eyes:', { output: 'unicode' })}
    in house`;

const bigMessage = "Let's work together!";

// TODO get from data
//
const links = [{ label: "Let's work together" }];

class TemplateWrapper extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func,
    data: PropTypes.shape({}),
  };

  render() {
    const { children, data } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content:
                  'Origen Studio is your software development agency. We help developing your projects from inception to production',
              }, // TODO improve SEO
              {
                name: 'keywords',
                content:
                  'software, development, software development, react, react-native, native, graphql, nodejs, apollo',
              }, // TODO improve SEO
            ]}
          />
          <Layout
            appBarPosition="fixed"
            appBarContent={
              <BasicAppBar
                title={data.site.siteMetadata.title}
                logo={logo}
                links={links}
              />
            }
            appBarProps={{
              color: 'default',
            }}
            leftDrawerContent={<BasicDrawer links={links} />}
            footerContent={
              <BasicFooter
                title={data.site.siteMetadata.title}
                logo={logo}
                smallMessage={smallMessage}
                bigMessage={bigMessage}
                links={links}
              />
            }
            mainGrow={false}
            stickyFooter
          >
            {children()}
          </Layout>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default TemplateWrapper;
