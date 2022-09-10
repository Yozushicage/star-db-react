import React, { Component } from "react";

import './row.css';

export default class Row extends Component {
    render() {
        return (
            <div className="main-content">
                {this.props.children}
            </div>
        );
    }
}