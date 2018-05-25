import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout, {
    BasicFooter,
    BasicAppBar,
    BasicDrawer,
} from 'material-ui-layout';

import MinimalFooter from '../../components/MinimalFooter';


import styles from './styles';

class LandingPageLayout extends React.PureComponent{

    render(){
        const {children, classes, message, data, socialLinks, links, logo } = this.props;
        return(
            <Layout
                leftDrawerContent={<BasicDrawer links={links} />}
                footerContent={
                    <MinimalFooter
                        title={data.site.siteMetadata.title}
                        message={message}
                        socialLinks={socialLinks}
                    />
                }
                footerProps={{ color: 'inherit', className: classes.footer }}
                mainGrow={false}
                stickyFooter
            >
                {children()}
            </Layout>
        )
    }
}

export default withStyles(styles)(LandingPageLayout);