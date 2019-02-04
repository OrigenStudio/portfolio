import React from 'react';
import map from 'lodash/map';

import PageTitleIterator from '../components/PageTitleIterator';
import HighlightsBackground from '../components/Highlights/HighlightsBackground';
import HighlightsBase from '../components/Highlights/HighlightsBase';
import {commercialWebList1, commercialWebList2, commercialWebList3} from '../data/commercialWebList';
import ProjectsOngoing from '../components/ProjectsOngoing';
import projectsList from '../data/projectsList';
import MethodologySection from '../components/MethodologySection';

const CommercialWebTitleInfo = {
  headline: 'Commercial Web',
  text1: 'YOUR NEXT ',
  text2: 'WEBSITE WILL BE RESPONSIVE, FAST, SCALABLE AND SAFE',
  list: ['Something1', 'Something2', 'Something3'],
};

class CommercialWebPage extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <PageTitleIterator {...CommercialWebTitleInfo} />
        <HighlightsBackground background={commercialWebList1.background} backgroundStyle={commercialWebList1.backgroundStyle}>
          {map(commercialWebList1.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <HighlightsBackground background={commercialWebList2.background} backgroundStyle={commercialWebList2.backgroundStyle}>
          {map(commercialWebList2.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <HighlightsBackground background={commercialWebList3.background} backgroundStyle={commercialWebList3.backgroundStyle}>
          {map(commercialWebList3.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <ProjectsOngoing {...projectsList} />
        <MethodologySection />
      </div>
    );
  }
}

export default CommercialWebPage;
