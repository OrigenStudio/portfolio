import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';

import Services from '../../components/Services';
import ContactUsSection from '../../components/ContactUsSection';
import ProjectsSection from '../../components/ProjectsSection';
import TechnologiesSection from '../../components/TechnologiesSection';
import ThreeDSection from '../../components/ThreeDSection';
import IntroSection from '../../components/IntroSection';
import QualitySection from '../../components/QualitySection';

import styles from './styles';
import { Typography } from 'material-ui';

const IndexPage = ({ classes, data }) => (
  <div>
    {/* <ThreeDSection /> */}
    <IntroSection />
    <Services />
    <QualitySection />
    <ContactUsSection />
    <TechnologiesSection />
  </div>
);

export default withStyles(styles)(IndexPage);
