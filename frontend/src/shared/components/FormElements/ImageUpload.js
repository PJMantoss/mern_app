import React from 'react';

import './ImageUpload.css';

const ImageUpload = props => {
    return (
        <div>
            <input 
                id={props.id} 
                type="file"
                style={{ display: none }}
                accept=".jpg,.png,.jpeg" 
            />
        </div>
    )
};

export default ImageUpload;