import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return ReactDOM.createPortal(
        <div className="backdrop"></div>, document.getElementById('backdrop-hook');
    );
}

export default Backdrop;