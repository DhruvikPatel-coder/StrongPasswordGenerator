import * as React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Output from '../Components/output'
import TextField from '../Components/TextField'
import Slider from '../Components/Slider'
import CheckBox from '../Components/CheckBox'
import SubmutButton from '../Components/SubmitButton'
import axios from 'axios';
import { useState } from 'react';

export default function FormContainer() {
    let [state, setState] = useState({
        output: "",
        length: 10,
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true,
        excludeSimilarCharacters: true,
        exclude: true
    });


    function handleSliderChange(e) {
        let temp = {};
        Object.assign(temp, state, { length: e.target.value });
        setState(temp);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`https://my-project-9894-281203.nn.r.appspot.com/passwords`, { state })
            .then(res => {
                let data = res.data
                let temp = {};
                Object.assign(temp, state, { output: data['password'] });
                setState(temp);
            })
    }

    function handleCheckboxChange(e) {
        let temp = {}
        let which_box = e.target.id

        if (which_box === 'numbers') {
            Object.assign(temp, state, { numbers: !state.numbers });
        } else if (which_box === 'uppercase') {
            Object.assign(temp, state, { uppercase: !state.uppercase });
        } else if (which_box === 'lowercase') {
            Object.assign(temp, state, { lowercase: !state.lowercase });
        } else if (which_box === 'symbols') {
            Object.assign(temp, state, { symbols: !state.symbols });
        } else {
            Object.assign(temp, state, { excludeSimilarCharacters: !state.excludeSimilarCharacters });
        }
        setState(temp);
    }

    return (
        <form className="form-div" onSubmit={handleSubmit}>
            <div className="output-div">
                <Output value={state.output} />
            </div>
            <div className="row">
                <TextField value={"Length of password { " + state.length + " }: "} />
                <Slider handleChange={handleSliderChange} value={state.length} />
            </div>

            <div className="row">
                <TextField value="Include numbers:" />
                <CheckBox isChecked={handleCheckboxChange} value={state.numbers} label="numbers" />
            </div>

            <div className="row">
                <TextField value="Include Upper-case:" />
                <CheckBox isChecked={handleCheckboxChange} value={state.uppercase} label="uppercase" />
            </div>

            <div className="row">
                <TextField value="Include lower-case:" />
                <CheckBox isChecked={handleCheckboxChange} value={state.lowercase} label="lowercase" />
            </div>

            <div className="row">
                <TextField value="Include symbols:" />
                <CheckBox isChecked={handleCheckboxChange} value={state.symbols} label="symbols" />
            </div>

            <div className="row">
                <TextField value="Exclude similar characters:" />
                <CheckBox isChecked={handleCheckboxChange} value={state.excludeSimilarCharacters} label="excludeSimilarCharacters" />
            </div>

            <div className="btn-div">
                <SubmutButton />
            </div>
        </form>
    );
}
