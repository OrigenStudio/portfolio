import { withStyles } from 'material-ui/styles';
import React from 'react';
import ContactUsSection from '../../components/ContactUsSection';
import LandingSection from '../../components/LandingSection';
import IntroSection from '../../components/IntroSection';
import QualitySection from '../../components/QualitySection';
import Services from '../../components/Services';
import TechnologiesSection from '../../components/TechnologiesSection';
import styles from './styles';

const IndexPage = ({ classes, data }) => (
  <div>
    <LandingSection />
    <IntroSection />
    <Services />
    <QualitySection />
    <ContactUsSection />
  </div>
);

export default withStyles(styles)(IndexPage);
