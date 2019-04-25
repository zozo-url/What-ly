import React from "react";

import ErrorMessage from "./ErrorMessage";
import UploadImage from "./UploadImage";
import SubredditList from "./SubredditList";
import WaitIndicator from "./WaitIndicator";
import { connect } from "react-redux";
import Image from "./Image";
import Header from "./Header"

const App = (props) => (
  <div className="app">
    <Header />
    <ErrorMessage />
    
    {props.uploadPage && <UploadImage />}
    {props.imagePage && <Image />}
    <WaitIndicator />

  </div>
);

const mapStateToProps = state => {
  return {
    uploadPage: state.uploadPage,
    imagePage:state.imagePage
  };
};

export default connect(mapStateToProps)(App);
