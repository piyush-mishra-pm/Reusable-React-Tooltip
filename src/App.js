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
            <header className="flex-vertical">Reusable React Tooltips</header>
            <section className="section-with-boundary flex-vertical">
                <div className="text-heading">Introductory text</div>
                <div>
                    <p>
                        A simple, reusable react tooltip. Can be wrapped around any HTML / JSX entity, and given custom
                        tooltip text, position (top, down, right, left), and appearance delay. This can be by baking
                        these in code (when wrapping the elements), or using event handlers to dynamically provide these
                        values.
                    </p>
                    <p>Find below, examples of different elements using these tooltips in different ways.</p>
                </div>
            </section>
            <section className="section-with-boundary flex-vertical">
                <div className="text-heading">Static Baked tooltips</div>
                <div>
                    <p>baked tooltip text</p>
                    <div className="flex-horizontal">
                        <div className="flex-vertical section-with-boundary">
                            <Tooltip content="Tooltip Baked content" direction="top">
                                Something here
                            </Tooltip>
                        </div>
                        <div className="flex-vertical section-with-boundary">
                            <Tooltip content="Tooltip Baked content" direction="top">
                                Something here
                            </Tooltip>
                        </div>
                        <div className="flex-vertical section-with-boundary">
                            <Tooltip content="Tooltip Baked content" direction="top">
                                Something here
                            </Tooltip>
                        </div>
                        <div className="flex-vertical section-with-boundary">
                            <Tooltip content="Tooltip Baked content" direction="top">
                                Something here
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-with-boundary flex-vertical">
                <div className="text-heading">Dynamic Tooltips</div>
                <div>
                    <div>
                        <p>What tooltip to show? Leave empty for default tooltip text.</p>
                        <InputText onTextChange={onTooltipTextChange} />
                        <p>And direction</p>
                        <DropdownMenu onDirectionChange={setDirection} />
                    </div>
                    <p>Dynamic tooltip text</p>
                    <Tooltip content={tooltipText} direction={direction}>
                        <p className="hoverable">Something here</p>
                    </Tooltip>
                </div>
            </section>
        </div>
    );
}

export default App;
