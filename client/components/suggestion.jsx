import React, { Component } from "react";

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionStyle: {
        position: "absolute",
        top: `${Math.floor(Math.random() * 1000)}px`,
        left: `${Math.floor(Math.random() * 1000)}px`,
        color: "orange"
      }
    };
  }
  render() {
    return (
      <div>
        <h1 style={this.state.suggestionStyle}>{this.props.suggestion.name}</h1>
        <div className="done" style={this.state.suggestionStyle} dangerouslySetInnerHTML={{ __html: this.props.suggestion.info }}></div>
      </div>
    );
  }
}

export default Suggestion;
