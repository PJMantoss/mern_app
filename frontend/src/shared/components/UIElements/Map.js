import React from 'react';

const Map = props => {
    const map = window.google.maps.Map();
    return(
        <div className={`map ${props.className}`} style={props.style}></div>
    )
};

export default Map;
//API key- AIzaSyAs1ttmZ1WP1iJbtpwFoPHEYvhBXN7K7mA