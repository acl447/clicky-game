import React from 'react';


function Footer() {

    const styles = {

        backgroundColor: '#5133a4',
        color: 'white',
        fontSize: '16px',
    };

    const styles2 = {

        backgroundColor: '#6956af',
        paddingTop: 5
    }

    return (
        <footer className="footer fixed-bottom" style={styles2}>
            <div className="bottom" style={styles}>Clicky Game!</div>
            
        </footer>
    );
}


export default Footer;