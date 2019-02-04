import React from 'react';
import map from 'lodash/map';

import PageTitleIterator from '../components/PageTitleIterator';
import HighlightsBackground from '../components/Highlights/HighlightsBackground';
import HighlightsBase from '../components/Highlights/HighlightsBase';
import {commercialHighlightsList1, commercialHighlightsList2, commercialHighlightsList3} from '../data/commercialHighlightsList';
import ListInfoSection from '../components/ListInfoSection';
import auditList from '../data/auditList';
import ProjectsOngoing from '../components/ProjectsOngoing';
import projectsList from '../data/projectsList';

const CommercialWebPageTitleInfo = {
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
        <PageTitleIterator {...CommercialWebPageTitleInfo} />
        <HighlightsBackground background={commercialHighlightsList1.background} backgroundStyle={commercialHighlightsList1.backgroundStyle}>
          {map(commercialHighlightsList1.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <HighlightsBackground background={commercialHighlightsList2.background} backgroundStyle={commercialHighlightsList2.backgroundStyle}>
          {map(commercialHighlightsList2.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <HighlightsBackground background={commercialHighlightsList3.background} backgroundStyle={commercialHighlightsList3.backgroundStyle}>
          {map(commercialHighlightsList3.items, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <ProjectsOngoing {...projectsList} />
        <ListInfoSection {...auditList}/>
      </div>
    );
  }
}

export default CommercialWebPage;
