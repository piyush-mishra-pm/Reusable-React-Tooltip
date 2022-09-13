import React, { useState } from "react";

import Tooltip from "./components/Tooltip";
import InputText from "./components/InputText";
import DropdownMenu from "./components/DropdownMenu";

import "./App.css";

function App() {
    const [tooltipText, setTooltipText] = useState("");
    const onTooltipTextChange = (newTooltipText) => {
        setTooltipText(newTooltipText);
    };

    const [direction, setDirection] = useState("top");
    const onTooltipDirectionChange = (newTooltipDirection) => {
        setDirection(newTooltipDirection);
        console.log(direction);
    };

    return (
        <div>
            <h1>Reusable Tooltip Project</h1>
            <section>
                <p>Introductory text</p>
                <p>What tooltip to show? Leave empty for default tooltip text.</p>
                <InputText onTextChange={onTooltipTextChange} />
                <p>And direction</p>
                <DropdownMenu onDirectionChange={setDirection} />
            </section>
            <section>
                <h2>Demo Area 1</h2>
                <div>
                    <p>baked tooltip text</p>
                    <Tooltip content="Tooltip Baked content" direction="top">
                        Something here
                    </Tooltip>
                </div>
            </section>
            <section>
                <h2>Demo Area 2</h2>
                <div>
                    <p>Dynamic tooltip text</p>
                    <Tooltip content={tooltipText} direction={direction}>
                        Something here
                    </Tooltip>
                </div>
            </section>
        </div>
    );
}

export default App;
