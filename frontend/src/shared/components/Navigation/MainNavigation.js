import React from 'react';
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
            <h1 className="main-navigation__title">Places</h1>
            <nav></nav>
        </MainHeader>
    )
};

export default MainNavigation;