import React from 'react';
import Typography from 'material-ui/Typography';

class TypographyTest extends React.PureComponent {
  render() {
    return (
      <div>
        <Typography variant="display4">display4</Typography>
        <Typography variant="display3">display3</Typography>
        <Typography variant="display2">display2</Typography>
        <Typography variant="display1">display1</Typography>
        <Typography variant="headline">headline</Typography>
        <Typography variant="title">title</Typography>
        <Typography variant="subheading">subheading</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="body1">body1</Typography>
      </div>
    );
  }
}

export default TypographyTest;