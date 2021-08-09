import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import './PlaceItem.css';

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);

    const openMap = () => setShowMap(true);

    const closeMap = () => setShowMap(false);

    return(
        <React.Fragment>
            <Modal
                show={}
                onCancel={}
                header={}
                contentClass=""
                footerClass=""
                footer={}
            >
                <div className="map-container"></div>
            </Modal>
            <Card className="place-item__content">
                <li className="place-item">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>

                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>

                    <div className="place-item__actions">
                        <Button inverse>VIEW ON MAP</Button>
                        <Button to={`places/${props.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </li>
            </Card>
        </React.Fragment>
    )
} 

export default PlaceItem;