import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import AppBar from '@material-ui/core/AppBar';
import { BasicAppBar } from 'material-ui-layout'; 

import ContactUsSection from '../../components/ContactUsSection';
import LandingSection from '../../components/LandingSection';
import IntroSection from '../../components/IntroSection';
import QualitySection from '../../components/QualitySection';
import Services from '../../components/Services';
import TechnologiesSection from '../../components/TechnologiesSection';
import styles from './styles';

import { logo } from '../../images'; 


class IndexPage extends React.Component {
  setAppBarVisibility = () => {
    console.log('entered');

    this.setState({ appBarVisibility: true });
  };

  render() {
    const { classes, data } = this.props;

    return <div>
        <AppBar className={classes.appbar}>
          <BasicAppBar title="Origen" logo={logo} />
        </AppBar>
        <LandingSection />
          <IntroSection />
          <Services />
        <ScrollTrigger onEnter={this.setAppBarVisibility} triggerOnLoad={false}>
          <QualitySection />
          <ContactUsSection />
        </ScrollTrigger>
      </div>;
  }
}
export default withStyles(styles)(IndexPage);
