# SimpleDonut
Library for building simple, static SVG donut charts based on percentages. I built this for use in my own projects when I couldn't find anything simple that could do it for me.

## Usage
Include the simpledonut.js file in your html:
```html
<script src="simpledonut.js"></script>
```

Call the render function in your javascript as so:
```javascript
simpledonut.render(element, radius, thickness, values[], colors[], centerText);
```

**element** must be called using the standard JS getElementById. JQuery is not supported at this time.

**values** and **colors** are both arrays. If there are less colors than values, it will probably crash or at least render weird.

**centerText** is an optional field and will put whatever text you specify in the center of the donut. This can be styled using the .value class under whichever div you specified.

```
#chartSix .value {
    font-size: 150%;
    text-transform: uppercase;
    color: orange;
    font-family: "Comic Sans MS", sans-serif;
}
```

## Example
```javascript
simpledonut.render(document.getElementById("chartFive"), 100, 20, [57,57,32], ['#aae','#a7a','#7aa'], 'Values');
```

Look at the test.html file for a full, working example.