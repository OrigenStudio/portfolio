import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
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

// FIXME when calling withStyles we get the default theme
// like if the theme that we have defined is yet not set by the MuiThemeProvider
// Raise issue and investigate.

import curryStyles from './styles';
const styles = curryStyles(theme);

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
    const { children, data, classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
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
            leftDrawerContent={<BasicDrawer links={links} />}
            footerContent={
              <MinimalFooter
                title={data.site.siteMetadata.title}
                message={message}
                socialLinks={socialLinks}
              />
            }
            footerProps={{
              color: 'inherit',
              className: classes.footer,
            }}
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

export default withStyles(styles)(TemplateWrapper);
