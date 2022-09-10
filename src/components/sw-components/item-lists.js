import ItemList from "../item-list";
import { withData, withSwapiService } from '../hoc-helpers';

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = withSwapiService(withData(ItemList), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(ItemList), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(ItemList), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}