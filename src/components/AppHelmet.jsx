import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import castArray from 'lodash/castArray';
import { injectIntl } from 'react-intl';

const AppHelmet = ({
  intl,
  title,
  description,
  keywords,
  children,
  ...props
}) => (
  <StaticQuery
    query={graphql`
      query AppHelmetQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Helmet {...props}>
        <title>
          {`${data.site.siteMetadata.title}${title ? ` - ${title}` : ''}`}
        </title>
        <html lang={intl.locale} />
        {description ? <meta name="description" content={description} /> : null}
        {keywords && castArray(keywords).length ? (
          <meta name="keywords" content={castArray(keywords).join(',')} />
        ) : null}
        {children}
      </Helmet>
    )}
  />
);

export default injectIntl(AppHelmet);
