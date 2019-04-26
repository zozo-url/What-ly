import React, { Component } from "react";

class Wikipedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionStyle: {
        position: "absolute",
        top: `100px`,
        left: `8px`,
        color: "orange"
      }
    };
  }
  render() {
    return (
      <div>
        <div className="done" style={this.state.suggestionStyle} dangerouslySetInnerHTML={{ __html: this.props.suggestion.info }}></div>
      </div>
    );
  }
}

export default Wikipedia