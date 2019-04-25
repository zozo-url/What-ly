import React from "react";

import ErrorMessage from "./ErrorMessage";
import LoadSubreddit from "./LoadSubreddit";
import SubredditList from "./SubredditList";
import WaitIndicator from "./WaitIndicator";
import { connect } from "react-redux";
import Image from "./Image";

const App = (props) => (
  <div className="app">
    <ErrorMessage />
    
    {props.uploadPage && <LoadSubreddit />}
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
