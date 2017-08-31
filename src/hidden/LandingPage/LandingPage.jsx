import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';

import Section from '../../components/Section';

import styles from './styles';

const IndexPage = ({ classes }) => (
  <div>
    <h1>Landing page with cool info</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Section className={classes.services} headline="Services">
      Hola
    </Section>
  </div>
);

export default withStyles(styles)(IndexPage);
