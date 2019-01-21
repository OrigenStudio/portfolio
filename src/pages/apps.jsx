import React from 'react';

import PageTitleIterator from '../components/PageTitleIterator';

const AppDevelopment = {
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
        <PageTitleIterator {...AppDevelopment} />
      </div>
    );
  }
}

export default AppsPage;
