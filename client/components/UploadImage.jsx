import React from "react";
import { connect } from "react-redux";
import { uploadImage } from "../actions";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadImage = e => this.props.dispatch(uploadImage(e));


  dropHandler = (ev) => {
    console.log('File(s) dropped', ev, ev.dataTransfer.files);
    // Prevent default behavior (Prevent file from being opened)
    let image = ev.dataTransfer.files[0];
    ev.preventDefault();
    this.uploadImage(image);



  }

  dragOverHandler = (ev) => {
    console.log('File(s) in drop zone');

    ev.preventDefault();
  }


  render() {
    return (
      <div>
        <div className="upload-input" onDrop={this.dropHandler} onDragOver={this.dragOverHandler}>
          <div className="dropzone">
            <input
              className="btn-primary"
              type="file"
              id="file-upload"
              onChange={this.uploadImage}
            />
          </div>
        </div>
        {/* <div onDrop={this.dropHandler} onDragOver={this.dragOverHandler}>Hello</div> */}
      </div>
    );
  }
}

export default connect()(UploadImage);
