import React from "react";

import ErrorMessage from "./ErrorMessage";
import UploadImage from "./UploadImage";
import WaitIndicator from "./WaitIndicator";
import { connect } from "react-redux";
import Image from "./Image";
import Header from "./Header"
import Wikipedia from "./Wikipedia";

const App = (props) => (
  <div className="app">
    <Header />
    <ErrorMessage />

    {props.uploadPage && <UploadImage />}
    {props.imagePage && !props.changeView && <Image />}
    {props.changeView && <Wikipedia/>}
    <WaitIndicator />
  </div>
);

const mapStateToProps = state => {
  return {
    uploadPage: state.uploadPage,
    imagePage:state.imagePage,
    changeView:state.changeView
  };
};

export default connect(mapStateToProps)(App);
