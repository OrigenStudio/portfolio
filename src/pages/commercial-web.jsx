import React from 'react';
import map from 'lodash/map';

import PageTitleIterator from '../components/PageTitleIterator';
import HighlightsBackground from '../components/Highlights/HighlightsBackground';
import HighlightsBase from '../components/Highlights/HighlightsBase';
import {commercialWebList1, commercialWebList2} from '../data/commercialWebList';

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
        <HighlightsBackground>
          {map(commercialWebList1, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
        <HighlightsBackground>
          {map(commercialWebList2, item => <HighlightsBase {...item} />)}
        </HighlightsBackground>
      </div>
    );
  }
}

export default CommercialWebPage;
