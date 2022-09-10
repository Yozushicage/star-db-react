import React, { Component } from "react";

import './error-indicator.css';
import icon from './death-star.png';

export default class ErrorIndicator extends Component {

    render() {
        return (
            <div className="error-indicator">
                <img src={icon} alt="error icon" />
                <div className="boom">BOOM!</div>
                <div>
                    something has gone terribly wrong
                </div>
                <div>
                    (but we already sent droids to fix it)
                </div>
            </div>
        );
    }

}