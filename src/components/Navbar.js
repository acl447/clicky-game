import React from 'react';



function Navbar(props) {

   

  
        return (<div className="navbar">

            <ul>

                <li className="back-to-top">
                    <a href="/">Clicky Game</a>
                </li>

                <li className="">
                    Click an image to begin!
            </li>

                <li className="score">
                    Score: {props.score} | Top Score: {props.topScore}
                </li>

            </ul>
        </div>
        );
    }



export default Navbar;