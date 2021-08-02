import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';

import './MainNavigation.css';

const MainNavigation = props => {
    return(
        <MainHeader>
            <button className="main-navigattion__menu-btn">
                <Span />
                <Span />
                <Span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/" >Places</Link>
            </h1>
            <nav></nav>
        </MainHeader>
    )
};

export default MainNavigation;