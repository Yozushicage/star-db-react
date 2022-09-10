import React, { Component } from "react";

import ErrorBoundary from "../error-boundary/error-boundary";
import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends Component {

    state = {
        itemId: 2
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
                    <PlanetList
                        itemId={itemId}
                        onItemSelect={this.onItemSelect}
                        renderItem={({ name, terrain }) => `${name} (${terrain})`} />
                    <PlanetDetails itemId={itemId} />
                </Row>
            </ErrorBoundary>
        );
    }
}