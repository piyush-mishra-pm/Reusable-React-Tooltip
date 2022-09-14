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
                    <p>
                        Tooltip can be wrapped around HTML or JSX elements, and given custom tooltip text and directions
                        (as shown for below 4 elements).
                    </p>
                    <div className="flex-horizontal">
                        <div className="section-with-boundary">
                            <p>Around text element</p>
                            <Tooltip content="Tooltip Baked content" direction="top">
                                <span className="hoverable">Hover me!</span>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around button</p>
                            <Tooltip content="This button wont do anything" direction="left">
                                <button>Click Me Not</button>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around image</p>
                            <Tooltip content="Thats a tree image on Pexels.com" direction="right">
                                <img src="https://images.pexels.com/photos/13272658/pexels-photo-13272658.jpeg?auto=compress&cs=tinysrgb&h=130" />
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around JSX: A Text Input</p>
                            <Tooltip content="Idle Text Input element" direction="bottom">
                                <InputText label="Write" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-with-boundary flex-vertical">
                <div className="text-heading">Dynamic Tooltips</div>
                <div>
                    <p>
                        Can also dynamically change tooltips on elements, using exposed props to event handlers. Change
                        tooltip text and direction below, to create a common tooltip for all the different elements
                        below. Defaults are text content as 'Tooltip' and direction as 'Top'.
                    </p>
                    <div className="flex-vertical section-with-boundary">
                        <InputText onTextChange={onTooltipTextChange} />
                        <DropdownMenu onDirectionChange={setDirection} />
                    </div>
                </div>
                <div>
                    <p>
                        Now see the above set tooltip text and direction being applied to all the different elements
                        below.
                    </p>
                    <div className="flex-vertical">
                        <div className="section-with-boundary">
                            <p>Around text element</p>
                            <Tooltip content={tooltipText} direction={direction}>
                                <span className="hoverable">Hover me!</span>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around button</p>
                            <Tooltip content={tooltipText} direction={direction}>
                                <button>Click Me Not</button>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around image</p>
                            <Tooltip content={tooltipText} direction={direction}>
                                <img src="https://images.pexels.com/photos/13272658/pexels-photo-13272658.jpeg?auto=compress&cs=tinysrgb&h=130" />
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around JSX: A Text Input</p>
                            <Tooltip content={tooltipText} direction={direction}>
                                <InputText label="Write" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </section>
            <footer></footer>
        </div>
    );
}

export default App;
