import React, { useState } from "react";

/*
    Listens for direction change input and notifies parent of the same.
*/

const DropdownMenu = (props) => {
    const [direction, setDirection] = useState("top");
    const onDirectionChange = (newDirection) => {
        setDirection(newDirection);
        props.onDirectionChange(newDirection);
    };

    return (
        <label>
            {props.label || "Choose Direction"}&nbsp;
            <select name="cars" value={direction} onChange={(e) => onDirectionChange(e.target.value)}>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
                <option value="left">Left</option>
            </select>
        </label>
    );
};

export default DropdownMenu;
