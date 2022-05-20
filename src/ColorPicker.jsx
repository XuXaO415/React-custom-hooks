import React from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";

const ColorPicker = () => {
    const [color, setColor] = useLocalStorageState('color', 'pink');
    const changeColor = e => {
        setColor(e.target.value)
    }
    return (
        <div>
            <h1 style={{color}}>You Color is {color}</h1>
            <select value={color} onChange={changeColor}>
                <option value="red">red</option>
                <option value="teal">teal</option>
                <option value="pink">pink</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>
        </div>
    )
}

export default ColorPicker;