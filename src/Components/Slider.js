import * as React from 'react';
import '../App.css';

export default function Slider({ handleChange, value }) {
    return (
        <input
            type="range"
            min="1"
            max="50"
            value={value}
            onChange={handleChange}
            className="slider"
            id="myRange"
        >
        </input>
    );
};
