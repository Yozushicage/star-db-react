import React from "react";

import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="diameter" label="Diameter" />
            <Record field="gravity" label="Gravity" />
            <Record field="orbital_period" label="Orbital Period" />
            <Record field="population" label="Population" />
            <Record field="terrain" label="Terrain" />
            <Record field="climate" label="Climate" />
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);