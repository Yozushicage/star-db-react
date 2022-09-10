import React, { Component } from "react";

import ErrorBoundary from "../error-boundary/error-boundary";
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../row';

export default class PeoplePage extends Component {

    state = {
        itemId: 1
    };

    onItemSelect = (itemId) => {
        this.setState({
            itemId: itemId
        });
    }

    render() {
        const { itemId } = this.state;

        return (
            <ErrorBoundary>
                <Row>
                    <PersonList
                        onItemSelect={this.onItemSelect}
                        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
                    <PersonDetails itemId={itemId} />
                </Row>
            </ErrorBoundary>
        );
    }
}