import React from 'react';

import PageTitleIterator from '../components/PageTitleIterator';
import ProjectsOngoing from '../components/ProjectsOngoing';
import projectsList from '../data/projectsList';

const CommercialWeb = {
  headline: 'Commercial Web',
  text1: 'YOUR NEXT ',
  text2: 'WEBSITE WILL BE RESPONSIVE, FAST, SCALABLE AND SAFE',
  list: ['Something1', 'Something2', 'Something3'],
};

class CommercialWebPage extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div style={{ width: '100%'}}>
        <PageTitleIterator {...CommercialWeb} />
        <ProjectsOngoing {...projectsList} />
      </div>
    );
  }
}

export default CommercialWebPage;
