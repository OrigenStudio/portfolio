import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import { emojify } from 'react-emojione';
import Layout, {
  BasicFooter,
  BasicAppBar,
  BasicDrawer,
} from 'material-ui-layout';

import theme from '../config/theme';
import MinimalFooter from '../components/MinimalFooter';

import socialLinks from '../data/socialLinks';
import { logo } from '../images';

// TODO move somewhere else
const message = `Built with
  ${emojify(':heart_eyes:', { output: 'unicode' })}
    in house`;

// TODO get from data
//
const links = [
  {
    label: "Let's work together",
    href: '/#contact',
    onClick: () => {
      console.log('Hello, world! One step closer!');
      window.location.href =
        'mailto:hello@origen.studio?Subject=Lets work together';
    },
  },
];

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
              },
              {
                name: 'keywords',
                content:
                  'software, development, software development, react, react-native, native, graphql, nodejs, apollo',
              },
            ] // TODO improve SEO // TODO improve SEO
            }
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
            appBarProps={{ color: 'transparent' }}
            leftDrawerContent={<BasicDrawer links={links} />}
            footerContent={
              <MinimalFooter
                title={data.site.siteMetadata.title}
                message={message}
                socialLinks={socialLinks}
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
