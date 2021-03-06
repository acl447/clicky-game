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
        fontSize: '22px',
        padding: '0 26px',
        textAlign: 'center',  

    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={styles}>
            <ul className="navbar-nav" style={styles2}>
            <li className="nav-item active" style={styles2}>
            <a href="/" style={styles2}><strong>Clicky Game</strong></a>
            </li>
            <li className="nav-item" style={styles2}><div>{props.message}</div></li>
            <li className="nav-item float-right" style={styles2}> Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}


export default Navbar;