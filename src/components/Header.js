import React from 'react';




function Header() {

    const styles = {

        backgroundColor: 'slategray',
    
    };

    const styles2 = {

        color: 'white',
        fontSize: '60px',
        textAlign: 'center'
    };

    const styles3 = {

        color: 'white',
        fontSize: '32px',
        textAlign: 'center'
    };

   
    return (
        <header className="header" style={styles}>
            <h1 style={styles2}><strong>Clicky Game!</strong></h1>
            <h2 style={styles3}>Click on an image to earn points, but don't click on any more than once!</h2>
            
        </header>
    );
}


export default Header;