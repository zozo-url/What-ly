import React, { Component } from "react";
import { connect } from 'react-redux'
import { changeView } from '../actions'

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionStyle: {
        position: "absolute",
        top: `${Math.floor(Math.random() * 800)}px`,
        left: `${Math.floor(Math.random() * 1000)}px`,
        color: "orange",
        fontSize: `${700 / (parseInt(props.index) + 9)}px`
      }
    };
    
  }
  changeView = (e) => this.props.dispatch(changeView())
  render() {
    return (
      <div>
        <h1 onClick={this.changeView} style={this.state.suggestionStyle}>{this.props.suggestion.name}</h1>
        {/* <div className="done" style={this.state.suggestionStyle} dangerouslySetInnerHTML={{ __html: this.props.suggestion.info }}></div> */}
      </div>
    );
  }
}

export default connect()(Suggestion);