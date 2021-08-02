import React from 'react';

import './Avatar.css';

const Avatar = () => {
    return (
        <div className={`avatar ${props.className}`} style={props.style}>
            <img />
        </div>
    )
}

export default Avatar;