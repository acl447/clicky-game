import React from 'react';




function Main(props) {

    const styles = {

        backgroundColor: 'white',
    
    };

  
   
    return (
        <main className="container" style={styles}>
            {props.imageArray}
        </main>
    );
}


export default Main;