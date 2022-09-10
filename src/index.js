import React from "react";
import { createRoot } from "react-dom/client";

import App from './components/app';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

//const swapi = new SwapiService();
//wapi.getAllPeople().then((res) => res.forEach(el => console.log(el.name)));
//swapi.getPerson(3).then((res) => console.log(res));
//swapi.getAllPlanet().then((res) => res.forEach(el => console.log(el.name)));
//swapi.getAllStarships().then((res) => res.forEach(el => console.log(el.name)));
