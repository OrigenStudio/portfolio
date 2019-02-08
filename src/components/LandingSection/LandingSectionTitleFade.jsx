
import React from 'react';

export default class LandingSectionTitleFade extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
    };

    if (window) {
      window.addEventListener('scroll', this.handleScrollChange);
    }
  }

  componentDidUnmount() {
    if (window) {
      window.removeEventListener('scroll', this.handleScrollChange);
    }
  }
     
  handleScrollChange = () => {
    const scrollY = this.getScroll()[1];
    const height = window.innerHeight / 2;
    // const offset = height / 6;
    const result = 1 - (scrollY / height);

    console.log(result)
    if (result >= 0 && result <= 1) {
      this.setState({ opacity: result });
    } else if (result > 1 && this.state.opacity < 1) {
      // control upper jumps in scroll
      this.setState({ opacity: 1 });
    } else if (result < 0 && this.state.opacity > 0) {
      // control lower jumps in scroll
      this.setState({ opacity: 0 });
    }
  };

  getScroll() {
    if (!window || !document) {
      return 0;
    }
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

  render() {
    const { children } = this.props;
    return (
        <div style={{ opacity: this.state.opacity }}>
          {children}
        </div>
    );
  }
}