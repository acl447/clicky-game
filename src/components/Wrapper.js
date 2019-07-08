import React from 'react';
import "./Wrapper.css";

function Wrapper(props) {
  return <div className={props.shakeWrapper === "true" ? "wrapperShake" : "wrapper"}>{props.images}</div>;
  
}

export default Wrapper;
