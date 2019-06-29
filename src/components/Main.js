import React from 'react';




function Main(props) {

    const styles = {

        backgroundColor: 'white'
    };
   
    return (
        <div className="container" style={styles}>
      {props.children}
    </div>
    );
}


export default Main;