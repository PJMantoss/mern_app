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
        </MainHeader>
    )
};

export default MainNavigation;