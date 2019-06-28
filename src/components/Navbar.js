import React from 'react';
import { blockStatement } from '@babel/types';





function Navbar(props) {

    const styles = {

        backgroundColor: '#5133a4',
        color: 'white',
        fontSize: '20px',
        margin: 5,
        padding: 5

    };




    return (
        <nav className="navbar navbar-expand-lg" style={styles}>
            <ul className="navbar-nav mr-auto" style={styles}>
            <li className="nav-item active" style={styles}>
            <a href="/" style={styles}><strong>Clicky Game</strong></a>
            </li>
            <li className="nav-item" style={styles}><div>Click an image to begin!</div></li>
            <li className="nav-item" style={styles}> Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}



export default Navbar;