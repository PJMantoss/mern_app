import React, { useRef, useState } from 'react';
import Button from './Button';

import './ImageUpload.css';

const ImageUpload = props => {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();

    const pickedHandler = e => {
        let pickedFile;

        if(e.target.files && e.target.files.length === 1){
            pickedFile = e.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
        }else{
            setIsValid(false);
        }
        props.onInput(props.id, pickedFile);
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    return (
        <div className="form-control">
            <input 
                id={props.id}
                ref={filePickerRef} 
                type="file"
                style={{ display: 'none' }}
                accept=".jpg,.png,.jpeg" 
                onChange={pickedHandler}
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