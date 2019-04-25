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
        {/* return */}
        <h1 style={this.state.suggestionStyle}>{this.props.suggestion.name}</h1>
        <p className="wiki-snippet"style={this.state.suggestionStyle}>{this.props.suggestion.info}</p>
      </div>
    );
  }
}

export default Suggestion;
