import React from 'react';




function Main(props) {

    const styles = {

        backgroundColor: 'white'
    };
   
    return (
        <div className="container my-5 mx-auto" style={styles}>
      {props.children}
    </div>
    );
}


export default Main;