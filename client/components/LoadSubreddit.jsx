import React from "react";
import { connect } from "react-redux";
import { fetchPosts, uploadImage } from "../actions";

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadImage = e => this.props.dispatch(uploadImage(e));

  render() {
    return (
      <div className="upload-input">
        <input
          class="btn btn-primary"
          type="file"
          id="file-upload"
          onChange={this.uploadImage}
        />
        
      </div>
    );
  }
}

export default connect()(LoadSubreddit);
