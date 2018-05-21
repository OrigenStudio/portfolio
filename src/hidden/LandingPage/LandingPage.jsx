import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';

import Services from '../../components/Services';
import ContactUsSection from '../../components/ContactUsSection';
import ProjectsSection from '../../components/ProjectsSection';
import TechnologiesSection from '../../components/TechnologiesSection';
import TypographyTest from '../../components/TypographyTest/TypographyTest';
;

import styles from './styles';

const IndexPage = ({ classes, data }) => (
  <div>
    <TypographyTest />
    <Services />
    <ContactUsSection />
    <TechnologiesSection />
  </div>
);

export default withStyles(styles)(IndexPage);
