import * as React from 'react';
import '../App.css';

export default function CheckBox({ isChecked, value, label }) {
    return (
        <input
            type="checkbox"
            className="my-checkbox"
            id={label}
            onChange={isChecked}
            checked={value}
        />
    )
}
