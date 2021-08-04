import React from 'react';

const Backdrop = () => {
    return ReactDOM.createPortal(
        <div></div>, document.getElementById('backdrop-hook');
    )
}

export default Backdrop;