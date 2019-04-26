import React, { Component } from "react";
import {connect} from 'react-redux'

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
    console.log('state: ', this.props.wikiSuggestion);
    return (
      <div>
        <h2>{this.props.wikiSuggestion.name}</h2>
        <div className="done" style={this.state.suggestionStyle} 
        dangerouslySetInnerHTML={{ __html: this.props.wikiSuggestion.info}}>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wikiSuggestion: state.wikiSuggestion
  };
};

export default connect(mapStateToProps)(Wikipedia);