import React from 'react';
import './BackButton.style.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BackButton(props) {
    return (
        <FontAwesomeIcon
            icon={'arrow-left'}
            size="lg"
            onClick={() => {
                props.history.goBack();
                return props.showBackButton ? props.handleBackButtonClick() : null;
            }}
            className="BackButton" />
    )
}

export default withRouter(BackButton);