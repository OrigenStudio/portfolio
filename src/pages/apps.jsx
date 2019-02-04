import React from 'react';
import map from 'lodash/map';

import PageTitleIterator from '../components/PageTitleIterator';
import MethodologySection from '../components/MethodologySection';
import HighlightsBackground from '../components/Highlights/HighlightsBackground';
import HighlightsBase from '../components/Highlights/HighlightsBase';
import {appsHighlightsList1, appsHighlightsList2} from '../data/appsHighlightsList';

const AppsPageTitleInfo = {
  headline: 'App Development',
  text1: 'WHETHER YOU NEED TO ',
  text2: 'WE ARE YOUR TEAM',
  list: ['Something like a phrase1', 'Something like a phrase2', 'Something like a phrase3'],
};

class AppsPage extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div style={{ width: '100%'}}>
        <PageTitleIterator {...AppsPageTitleInfo} />
        <MethodologySection />
        <HighlightsBackground >
          {map(appsHighlightsList1.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <HighlightsBackground >
          {map(appsHighlightsList2.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
      </div>
    );
  }
}

export default AppsPage;
