import React from "react";
import { connect } from "react-redux";
import { uploadImage } from "../actions";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadImage = file => {
    this.props.dispatch(uploadImage(file))

  };

  //e.target.files[0];

  dropHandler = (ev) => {
    console.log('File(s) dropped', ev, ev.dataTransfer.files);
    // Prevent default behavior (Prevent file from being opened)
    let file = ev.dataTransfer.files[0];
    ev.preventDefault();
    this.uploadImage(file);



  }

  handleOnChange = e => {
    let file = e.target.files[0];
    e.preventDefault();
    this.uploadImage(file);

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
            <div>
              <h1>DRAG AND DROP or CLICK TO UPLOAD</h1>
              <input
                className="btn-primary"
                type="file"
                id="file-upload"
                onChange={this.handleOnChange}
              />
            </div>
          </div>
        </div>
        {/* <div onDrop={this.dropHandler} onDragOver={this.dragOverHandler}>Hello</div> */}
      </div>
    );
  }
}

export default connect()(UploadImage);
