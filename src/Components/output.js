import * as React from 'react';
import '../App.css';

function Output({ value }) {
    return (
        <div className="general-div">
            <input className="output" value={value} readOnly></input>
        </div>
    )
}

export default Output;