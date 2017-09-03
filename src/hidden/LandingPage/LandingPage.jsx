import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';

import Services from '../../components/Services';
import ContactUsSection from '../../components/ContactUsSection';

import styles from './styles';

const IndexPage = ({ classes }) => (
  <div>
    <h1>Landing page with cool info</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Services />
    <ContactUsSection />
  </div>
);

export default withStyles(styles)(IndexPage);
