import React from 'react';
import './Loader.scss';

function Loader() {
    return (
        <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
        </div>
    );
}
export default Loader;
