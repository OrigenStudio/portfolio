import React from 'react';

const SvgComponent = props => (
  <svg
    viewBox="0 0 64 64"
    aria-labelledby="title"
    aria-describedby="desc"
    {...props}
  >
    <title>Indicator Down</title>
    <path
      data-name="layer1"
      d="M16.879 36.878l13.994 13.994.012.012L33 53l16.121-16.122a3 3 0 0 0-4.242-4.242L36 41.516V11.999a3 3 0 0 0-6 0v29.515l-8.879-8.878a3 3 0 0 0-4.242 4.242z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgComponent;
