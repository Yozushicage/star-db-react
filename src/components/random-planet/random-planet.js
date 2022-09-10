import React, { Component } from "react";

import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service.js';
import './random-planet.css';

export default class RandomPlaner extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        isLoaded: false,
        hasError: false
    };

    componentDidMount() {
        this.intervalId = setInterval(this.updateState, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    updateState = () => {
        const id = Math.floor(Math.random() * 18) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    onPlanetLoaded = (planet) => {
        this.setState(
            {
                planet,
                isLoaded: true
            });
    }

    onError = (error) => {
        this.setState(
            {
                isLoaded: true,
                hasError: true
            });
    }

    render() {
        const { planet, isLoaded, hasError } = this.state;
        const hasContent = isLoaded && !hasError;

        const errorMessage = hasError ? <ErrorIndicator /> : null;
        const spinner = !isLoaded ? <Spinner /> : null;
        const planetView = hasContent ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet">
                {errorMessage}
                {spinner}
                {planetView}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="random-planet__img"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="Planet" width="200px" />
            <div className="random-planet__description">
                <h2 className="random-planet__header">{name}</h2>
                <ul className="random-planet__details">
                    <li className="random-planet__property">
                        Population: {population}
                    </li>
                    <li className="random-planet__property">
                        Rotation Period: {rotationPeriod}
                    </li>
                    <li className="random-planet__property">
                        Diameter: {diameter}
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}