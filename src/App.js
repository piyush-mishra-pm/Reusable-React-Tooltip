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
    };

    const [delay, setDelay] = useState(100);
    const onTooltipDelayChange = (newDelay) => {
        setDelay(newDelay);
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
                        (as shown for below 4 elements), and appearance delays.
                    </p>
                    <div className="flex-horizontal">
                        <div className="section-with-boundary">
                            <p>Around text element (pos:top, delay:100ms)</p>
                            <Tooltip content="Text element with tooltip" direction="top" delay={100}>
                                <span className="hoverable">Hover me!</span>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around button (pos:left, delay:500ms)</p>
                            <Tooltip content="This button wont do anything" direction="left" delay={500}>
                                <button>Click Me Not</button>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around image (pos:right, delay:900ms)</p>
                            <Tooltip content="Thats a tree image on Pexels.com" direction="right" delay={900}>
                                <img src="https://images.pexels.com/photos/13272658/pexels-photo-13272658.jpeg?auto=compress&cs=tinysrgb&h=130" />
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around JSX: A Text Input (pos:bottom)</p>
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
                        tooltip text, direction and appearance below, to create a common tooltip for the following
                        elements. Defaults are text content as 'Tooltip', direction as 'Top' and delay as 100 ms.
                    </p>
                    <div className="flex-vertical section-with-boundary">
                        <InputText onTextChange={onTooltipTextChange} />
                        <DropdownMenu onDirectionChange={setDirection} />
                        <InputText label="Appearance delay (millisec)" onTextChange={setDelay} type="number" />
                    </div>
                </div>
                <div>
                    <p>
                        Now see the above set tooltip text, direction and appearance delay being applied to all the
                        different elements below.
                    </p>
                    <div className="flex-vertical">
                        <div className="section-with-boundary">
                            <p>Around text element</p>
                            <Tooltip content={tooltipText} direction={direction} delay={delay}>
                                <span className="hoverable">Hover me!</span>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around button</p>
                            <Tooltip content={tooltipText} direction={direction} delay={delay}>
                                <button>Click Me Not</button>
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around image</p>
                            <Tooltip content={tooltipText} direction={direction} delay={delay}>
                                <img src="https://images.pexels.com/photos/13272658/pexels-photo-13272658.jpeg?auto=compress&cs=tinysrgb&h=130" />
                            </Tooltip>
                        </div>
                        <div className="section-with-boundary">
                            <p>Around JSX: A Text Input</p>
                            <Tooltip content={tooltipText} direction={direction} delay={delay}>
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
