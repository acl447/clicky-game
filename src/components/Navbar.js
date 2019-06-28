import React from 'react';


function Navbar(props) {

    const styles = {

        backgroundColor: '#5133a4',
        color: 'white',
        fontSize: '20px'

    };

    const styles2 = {
        backgroundColor: '#5133a4',
        color: 'white',
        fontSize: '20px',
        margin: 5,
        padding: 5

    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={styles}>
            <ul className="navbar-nav mr-auto" style={styles2}>
            <li className="nav-item active" style={styles2}>
            <a href="/" style={styles2}><strong>Clicky Game</strong></a>
            </li>
            <li className="nav-item" style={styles2}><div>Click an image to begin!</div></li>
            <li className="nav-item" style={styles2}> Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}


export default Navbar;