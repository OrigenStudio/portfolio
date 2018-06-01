import React from "react";
import threeEntryPoint from "./threejs/threeEntryPoint";

export default class ThreeContainer extends React.Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }
  render() {
    return (
      <div
      style={{
        width: '100%',
        height: '100%',
      }}
        ref={element => {
          this.threeRootElement = element;
        }}
      />
    );
  }
}
