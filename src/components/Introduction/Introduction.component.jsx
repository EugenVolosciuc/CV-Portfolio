import React from 'react';
import './Introduction.style.css';

function Introduction() {
    return (
        <div className="Introduction">
            <div className="Introduction-hello">
                <h1>Hello.</h1>
                <h1>I am</h1>
                <h1>Valerie</h1>
            </div>
            <div className="Introduction-description">
                <p>Self-taught UI Designer<br />passionate about Web & Mobile Applications Design</p>
            </div>
        </div>
    )
}

export default Introduction;