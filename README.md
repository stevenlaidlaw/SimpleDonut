# SimpleDonut
Library for building simple, static SVG donut charts based on percentages. I built this for use in my own projects when I couldn't find anything simple that could do it for me.

## Usage
Include the simpledonut.js file in your html:
```html
<script src="simpledonut.js"></script>
```

Call the render function in your javascript as so:
```javascript
simpledonut.render(element, radius, thickness, bgColor, fgColor, value);
```

**element** must be called using the standard JS getElementById. JQuery is not supported at this time.

**value** must be a value out of 100%. Non-percentage values and multiple sub-sections of the donut are not supported, and are unlikely to ever be.

## Example
```javascript
simpledonut.render(document.getElementById("chartOne"), 50, 20, '#eee', '#aaa', 35);
```

Look at the test.html file for further clarification.