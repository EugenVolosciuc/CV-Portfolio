import React from 'react';

import './hamburgers.css';
import './Hamburger.style.css';

function Hamburger(props) {
    return (
        <button 
            className={`${props.hamburgerClicked ? 'is-active' : null} Hamburger hamburger hamburger--spin`} 
            type="button"
            onClick={props.clickHamburger}
        >
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Hamburger;