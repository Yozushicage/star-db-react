import React from "react";

import './item-list.css';

const ItemList = (props) => {

    const { data, onItemSelect, renderItem } = props;

    const items = data.map((item) => {
        return (
            <li className="item-list__item"
                key={item.id}
                onClick={() => onItemSelect(item.id)}>
                {renderItem(item)}
            </li>
        );
    });

    return (
        <ul className="item-list">
            {items}
        </ul>
    );
}

export default ItemList;