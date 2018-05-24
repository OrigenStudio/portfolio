import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { BasicAppBar } from 'material-ui-layout';
import OnScroll from 'react-on-scroll';

import ContactUsSection from '../../components/ContactUsSection';
import LandingSection from '../../components/LandingSection';
import IntroSection from '../../components/IntroSection';
import QualitySection from '../../components/QualitySection';
import Services from '../../components/Services';
import TechnologiesSection from '../../components/TechnologiesSection';

import { logo } from '../../images';

import styles from './styles';

class IndexPage extends React.Component {
  setAppBarVisibility = visible => {
    console.log(visible);

    this.setState({ appBarVisibility: visible });
  };

  render() {
    const { classes, data } = this.props;

    return (
      <OnScroll
        triggerBase="top"
        triggers={[
          { top: 500, bottom: -50, callback: visible => { console.log(visible
          
          Z)} },
        ]}
      >
        <div>
          <AppBar className={classes.appbar}>
            <BasicAppBar title="Origen" logo={logo} />
          </AppBar>
          <LandingSection />
          <IntroSection />
          <Services />
          <QualitySection />
          <ContactUsSection />
        </div>
      </OnScroll>
    );
  }
}

export default withStyles(styles)(IndexPage);
