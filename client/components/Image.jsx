import React, { Component } from "react";
import { connect } from "react-redux";
import Suggestion from "./suggestion";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          class="main-image"
          src={this.props.images[this.props.images.length - 1]}
        />
        {this.props.suggestions.map(suggestion => (
          <Suggestion key={suggestion.name} suggestion={suggestion} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    suggestions: state.suggestions
  };
};

export default connect(mapStateToProps)(Image);