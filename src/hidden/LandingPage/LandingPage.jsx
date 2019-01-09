import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { LayoutActions } from 'material-ui-layout';
import OnScroll from 'react-on-scroll';
import classnames from 'classnames';

import LandingSection from '../../components/LandingSection';
import IntroSection from '../../components/IntroSection';
import Services from '../../components/Services';
import ContactUsSection from '../../components/ContactUsSection';

import { logo } from '../../images';

import styles from './styles';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparentAppBar: false,
    };
  }
  setAppBarVisibility = visible => {
    this.setState({ transparentAppBar: visible });
  };

  render() {
    const { classes, data } = this.props;

    // There are many way to improve the use of the Onscroll component
    // - The top prop is hardcoded... maybe the landing section could also accept a height prop
    return (
      <OnScroll
        triggerBase="top"
        triggers={[
          {
            top: -(window.innerHeight - 300), // This is a bit weird but I am using it to calculate the size of the <LandingSection />
            callback: this.setAppBarVisibility,
          },
        ]}
      >
        <div>
          <LayoutActions.Consumer>
            {({ toggleLeftDrawer, toggleRightDrawer }) => (
              <AppBar
                className={classnames(classes.appbar, {
                  [`${classes.transparentAppBar}`]: this.state
                    .transparentAppBar,
                })}
                color="inherit"
              >
                <Toolbar className={classes.toolbar}>
                  <div className={classes.logo}>
                    <img src={logo} className={classes.image} />
                  </div>
                </Toolbar>
              </AppBar>
            )}
          </LayoutActions.Consumer>

          <LandingSection />
          <IntroSection />
          <Services />
          <ContactUsSection />
        </div>
      </OnScroll>
    );
  }
}

export default withStyles(styles)(IndexPage);
