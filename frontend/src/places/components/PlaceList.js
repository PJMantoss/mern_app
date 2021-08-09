import React from 'react';
import Card from '../../shared/components/UIElements/Card';

import './PlaceList.css';

const PlaceList = props => {
    if(props.item.length === 0){
        return <div className="place-list center"></div> 
    }
} 

export default PlaceList;