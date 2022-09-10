import React, { Component } from "react";

import ErrorBoundary from "../error-boundary/error-boundary";
import { StarshipList, StarshipDetails } from '../sw-components';
import Row from '../row';

export default class StarshipsPage extends Component {

    state = {
        itemId: 10
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
                    <StarshipList
                        itemId={itemId}
                        onItemSelect={this.onItemSelect}
                        renderItem={({ name, model }) => `${name} (${model})`} />
                    <StarshipDetails itemId={itemId} />
                </Row>
            </ErrorBoundary>
        );
    }
}