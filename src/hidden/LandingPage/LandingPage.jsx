import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';

import Statement from '../../components/Statement';
import Services from '../../components/Services';
import ContactUsSection from '../../components/ContactUsSection';
import ProjectsSection from '../../components/ProjectsSection';
import TechnologiesSection from '../../components/TechnologiesSection';

import styles from './styles';

const IndexPage = ({ classes, data }) => (
  <div>
    <Statement />
    <Services />
    <ContactUsSection />
    <TechnologiesSection />
  </div>
);

export default withStyles(styles)(IndexPage);
