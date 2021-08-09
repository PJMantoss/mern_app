import React from 'react';
import Card from '../../shared/components/UIElements/Card';

import './PlaceList.css';

const PlaceList = props => {
    if(props.item.length === 0){
        return (
        <div className="place-list center">
            <Card>
                <h2>No Places Found. Maybe Create One?</h2>
                <button>Share Place</button>
            </Card>
        </div>);
    }

    return 
} 

export default PlaceList;