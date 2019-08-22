import React from 'react';
import { MatchMediaHOC } from "react-match-media";

import './Navbar.style.css';

import Hamburger from "./Hamburger/Hamburger.component";
import BackButton from './BackButton/BackButton.component';

const HamburgerMobile = MatchMediaHOC(Hamburger, "(max-width: 599px)");

function Navbar(props) {
    return (
        <div className="Navbar" >
            {props.showBackButton
                &&
                <BackButton
                    handleBackButtonClick={props.handleBackButtonClick}
                    backButtonClick={props.backButtonClick}
                    showBackButton={props.showBackButton}
                />}
            <HamburgerMobile
                hamburgerClicked={props.hamburgerClicked}
                clickHamburger={props.hamburgerClick}
            />
        </div>
    )
}

export default Navbar;