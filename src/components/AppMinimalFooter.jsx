import { graphql, StatcQuery, StaticQuery } from 'gatsby';
import react from 'react';
import MinimalFooter from '../components/MinimalFooter';
import castArray from 'lodash/castArray';
import { injectIntl } from 'react-intl';

const AppMinimalFooter = ({
    title,
    ...props
}) => (
    <StaticQuery
        query={graphql`
            query AppMinimalFooterQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <MinimalFooter {...props}
                title={data.site.siteMetadata.title}
            />

        )}
    />
);

export default injectIntl(AppMinimalFooter);
