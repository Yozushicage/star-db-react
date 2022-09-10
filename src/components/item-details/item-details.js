import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import './item-details.css';

export default class ItemDetails extends Component {

    state = {
        item: null,
        isLoaded: false,
        hasError: false
    }

    componentDidMount() {
        this.updateState();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateState();
        }
    }

    updateState() {
        const { itemId, getData } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError);
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            isLoaded: true
        });
    }

    onError = (error) => {
        this.setState({
            isLoaded: true,
            hasError: true
        });
    }

    render() {
        const { item, isLoaded, hasError } = this.state;
        const { getImageUrl, children } = this.props;
        const hasContent = isLoaded && !hasError;

        const errorMessage = hasError ? <ErrorIndicator /> : null;
        const spinner = !isLoaded ? <Spinner /> : null;
        const itemView = hasContent
            ? <ItemView
                item={item}
                getImageUrl={getImageUrl}
                records={children} />
            : null;

        return (
            <div className="item-details">
                {errorMessage}
                {spinner}
                {itemView}
            </div>
        );
    }
}

const ItemView = ({ item, getImageUrl, records }) => {

    const { id, name } = item;

    return (
        <React.Fragment>
            <div className="item-details__avatar">
                <img className="item-details__img"
                    src={getImageUrl(id)}
                    alt="Item" width="150px" />
            </div>
            <div className="item-details__info">
                <h2>{name}</h2>
                <ul className="item-details__list">
                    {React.Children.map(records, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
}

const Record = ({ item, field, label }) => {
    return (
        <li className="item-details__item">
            {label}: {item[field]}
        </li>
    );
}

export { Record };