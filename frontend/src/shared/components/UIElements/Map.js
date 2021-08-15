import React, { useRef, useEffect } from 'react';

const Map = props => {
    const mapRef = useRef();

    const {center, zoom} = props;

    useEffect(() => {
        const map = window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });
    
        new window.google.maps.Marker({ position: props.center, map: map });
    }, [center, zoom]);

    return(
        <div 
            ref={mapRef} 
            className={`map ${props.className}`} 
            style={props.style}
        ></div>
    )
};

export default Map;
//API key- AIzaSyAs1ttmZ1WP1iJbtpwFoPHEYvhBXN7K7mA