import React from 'react';


function Wrapper(props) {
  return <div className={props.shakeWrapper === "true" ? "wrapper" : "wrapper"}>{props.images}</div>;
  
}

export default Wrapper;
