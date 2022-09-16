# Re-usable Tooltip in React.

A simple, reusable react tooltip. Can be wrapped around any HTML / JSX entity, and given custom tooltip text, position (top, down, right, left), and appearance delay. This can be by baking these in code (when wrapping the elements), or using event handlers to dynamically provide these values.

Page shows usage examples too.

Made as part of CodingNinja's Full Stack Web Developer Coding Bootcamp, React module.

Deployed at: https://reusable-react-tooltip-demo.netlify.app

---

### Video Walkthrough:

> [![Video Walkthrough](https://img.youtube.com/vi/v-h_6jZicpI/maxresdefault.jpg)](https://youtu.be/v-h_6jZicpI)

---

### How to run

Clone the repo, and have NPM installed.
Then write following commands in terminal.

```bash
# go to this directory:
cd reusable-tooltip

# install react and package dependencies.
npm i

# will build the project and run in the default browser.
npm start
```

---

### Usage examples:

If you want to add a tooltip element around an HTML/JSX element (say an img), then can use following code. More examples can be found in src/App.js

```javascript
// Import the tooltip (present in src/components/Tooltip.js).

// Pass custom tooltip text, direction, and delayTimer for appearance.
// Defaults for tooltip are:
//      text: 'Tooltip',
//      direction : 'Top',
//      delay : 100ms.
<Tooltip content="Its an image tooltip" direction="right" delay={400}>
    {/*Img that needs a tooltip*/}
    <img src="img-url" />
</Tooltip>
```

---

### Code Structure:

```
reusable-tooltip
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  └─ manifest.json
├─ README.md
└─ src
    ├─ App.css              (Main CSS class for webpage)
    ├─ App.js               (Main React component, contaning Tooltip usage examples)
    ├─ components           (React Components)
    │  ├─ DropdownMenu.js   (React Component for choosing direction of tooltip)
    │  ├─ InputText.js      (React Component for text content of tooltip)
    │  ├─ Tooltip.js        (React Component for Tooltip)
    │  └─ Tooltip.css       (Styling for Tooltip)
    └─ index.js             (main js file calling the whole app).

```
