import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="logo">
                <Link className="header-menu__link" to="star-db-react/">
                    Star DB
                </Link>
            </h1>
            <nav className="header-menu">
                <ul className="header-menu__list">
                    <li className="header-menu__item">
                        <Link className="header-menu__link header-menu__link--hover"
                            to="star-db-react/people">
                            People
                        </Link>
                    </li>
                    <li className="header-menu__item">
                        <Link className="header-menu__link header-menu__link--hover"
                            to="star-db-react/planets">
                            Planets
                        </Link>
                    </li>
                    <li className="header-menu__item">
                        <Link className="header-menu__link header-menu__link--hover"
                            to="star-db-react/starships">
                            Starships
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;