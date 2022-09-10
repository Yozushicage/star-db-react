export default class SwapiService {

    _baseURL = 'https://swapi.dev/api';
    _baseImageURL = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const responce = await fetch(`${this._baseURL}${url}`);

        if (!responce.ok) {
            throw new Error(`Could not fetch ${responce.url}, received ${responce.status}`);
        }

        return await responce.json();
    }

    getAllPeople = async () => {
        const responce = await this.getResource('/people/');
        const result = responce.results.map(this._mapPerson);
        return result;
    }

    getPerson = async (id) => {
        const responce = await this.getResource(`/people/${id}`);
        const result = this._mapPerson(responce);
        return result;
    }

    getPersonImage = (id) => {
        return `${this._baseImageURL}/characters/${id}.jpg`;
    }

    getAllPlanets = async () => {
        const responce = await this.getResource('/planets/');
        const result = responce.results.map(this._mapPlanet);
        return result;
    }

    getPlanet = async (id) => {
        const responce = await this.getResource(`/planets/${id}`);
        return this._mapPlanet(responce);
    }

    getPlanetImage = (id) => {
        return `${this._baseImageURL}/planets/${id}.jpg`;
    }

    getAllStarships = async () => {
        const responce = await this.getResource('/starships/');
        const result = responce.results.map(this._mapStarship);
        return result;
    }

    getStarship = async (id) => {
        const responce = await this.getResource(`/starships/${id}`);
        const result = this._mapStarship(responce);
        return result;
    }

    getStarshipImage = (id) => {
        return `${this._baseImageURL}/starships/${id}.jpg`;
    }

    _parseIdFromUrl(url) {
        const regex = /\/(\d*)\/$/;
        const found = url.match(regex);
        return found[1];
    }

    _mapPerson = (person) => {
        return {
            id: this._parseIdFromUrl(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    }

    _mapPlanet = (planet) => {
        return {
            id: this._parseIdFromUrl(planet.url),
            name: planet.name,
            population: planet.population,
            orbitalPeriod: planet.orbital_period,
            diameter: planet.diameter,
            gravity: planet.gravity,
            terrain: planet.terrain,
            climate: planet.climate
        };
    }

    _mapStarship = (starship) => {
        return {
            id: this._parseIdFromUrl(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    }
}