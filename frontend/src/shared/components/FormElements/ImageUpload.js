import React from 'react';
import Button from './Button';

import './ImageUpload.css';

const ImageUpload = props => {
    const pickImageHandler = () => {};

    return (
        <div className="form-control">
            <input 
                id={props.id} 
                type="file"
                style={{ display: 'none' }}
                accept=".jpg,.png,.jpeg" 
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview">
                    <img src="" alt="Preview" />
                </div>
                <Button type="button" onClick={pickImageHandler}>
                    Pick Image
                </Button>
            </div>
        </div>
    )
};

export default ImageUpload;