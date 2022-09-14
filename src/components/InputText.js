import React, { useState } from "react";

/*
    Listens for text (or number) change input and notifies parent of the changed text input.
*/

const InputText = (props) => {
    const [text, setText] = useState("");

    const onTextChange = (newText) => {
        setText(newText);
        props.onTextChange(newText);
    };

    return (
        <>
            <label>
                {props.label || "Write Tooltip text"}&nbsp;
                <input type={props.type || "text"} value={text} onChange={(e) => onTextChange(e.target.value)} />
            </label>
        </>
    );
};

export default InputText;
