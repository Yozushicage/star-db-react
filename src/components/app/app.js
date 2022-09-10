import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorBoundary from "../error-boundary/error-boundary";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="app">
                            <Header />
                            <RandomPlanet />
                            <Routes>
                                <Route path="/" element={<h2>Welcome to Star DB!</h2>} />
                                <Route path="people" element={<PeoplePage />} />
                                <Route path="planets" element={<PlanetsPage />} />
                                <Route path="starships" element={<StarshipsPage />} />
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}