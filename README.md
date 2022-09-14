# Re-usable Tooltip in React.

A simple, reusable react tooltip. Can be wrapped around any HTML / JSX entity, and given custom tooltip text, position (top, down, right, left), and appearance delay. This can be by baking these in code (when wrapping the elements), or using event handlers to dynamically provide these values.

Page shows usage examples too.

---

### Video Walkthrough:

---

### How to run

Clone the repo, and have NPM installed.
Then write following commands in terminal.

```bash
# go to this directory:
cd reusable-tooltip

# install react and package dependencies.
npm i

# default browser will open the webpage.
```

### Usage examples:

If you want to add a tooltip element around an HTML/JSX element (say an img), then can use following code.

```javascript
// Import the tooltip (present in src/components/Tooltip.js).

// Pass custom tooltip text, direction, and delayTimer for appearance.
// Defaults for tooltip are:
//      text: 'Tooltip',
//      direction : 'Top',
//      delay : 400ms.
<Tooltip content="Its an image tooltip" direction="right" delay=400>
    {/*Img that needs a tooltip*/}
    <img src="img-url" />
</Tooltip>
```
