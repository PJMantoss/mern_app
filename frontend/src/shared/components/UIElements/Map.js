import React, { useRef } from 'react';

const Map = props => {
    const mapRef = useRef();

    const map = window.google.maps.Map(mapRef.current, {
        center: props.center,
        zoom: props.zoom
    });

    return(
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
    )
};

export default Map;
//API key- AIzaSyAs1ttmZ1WP1iJbtpwFoPHEYvhBXN7K7mA