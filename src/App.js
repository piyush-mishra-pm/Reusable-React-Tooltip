import React, { useState } from "react";

import Tooltip from "./components/Tooltip";
import InputText from "./components/InputText";

import "./App.css";

function App() {
    const [tooltipText, setTooltipText] = useState("");
    const onTooltipTextChange = (newTooltipText) => {
        setTooltipText(newTooltipText);
    };

    return (
        <div>
            <h1>Reusable Tooltip Project</h1>
            <section>
                <p>Introductory text</p>
                <p>What tooltip to show? Leave empty for default tooltip text.</p>
                <InputText onTextChange={onTooltipTextChange} />
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
                    <Tooltip content={tooltipText} direction="bottom">
                        Something here
                    </Tooltip>
                </div>
            </section>
        </div>
    );
}

export default App;
