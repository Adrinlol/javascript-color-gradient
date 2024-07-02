<div>
    <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg" height="140">
    <h1>JavaScript Color Gradient</h1>
    <p>Lightweight JavaScript library, used to generate an array of color gradients by providing start and finish colors, as well as the required number of midpoints.</p>
</div>

![MIT License](https://img.shields.io/npm/l/javascript-color-gradient)
[![](https://img.shields.io/npm/dm/javascript-color-gradient)](https://www.npmjs.com/package/javascript-color-gradient)
![Version](https://img.shields.io/github/package-json/v/adrinlol/javascript-color-gradient)
![Size](https://img.shields.io/bundlephobia/min/javascript-color-gradient)

## Installation

For Node.js: Install the `javascript-color-gradient` npm module:

```bash
npm install javascript-color-gradient
```

Then import the module into your JavaScript:

```javascript
import Gradient from "javascript-color-gradient";
```

## Demo

[A demo is worth a thousand words](https://codesandbox.io/s/javascript-color-gradient-csgfd).

**Note:** All the examples are using ES6, be sure is supported in your browser or modify as needed, Chrome recommended.

## Methods

| Method               |     | Description                                                                           |
| -------------------- | --- | ------------------------------------------------------------------------------------- |
| `setColorGradient()` |     | Initializes `{Gradient}` with two or more hex color values. Should always be defined. |
| `setMidpoint(n)`     |     | Defines number of midpoints. Defaults to 10.                                          |
| `getColors()`        |     | Returns an array of hex color values .                                                |
| `getColor(n)`        |     | Returns single hex color value corresponding to the provided index.                   |

## Usage

Using 2 colors and default (10) midpoints to generate an array of hex color values:

```javascript
import Gradient from "javascript-color-gradient";

const gradientArray = new Gradient()
  .setColorGradient("#3F2CAF", "#e9446a")
  .getColors();

console.log(gradientArray);

[
  '#3f2caf', '#522fa7',
  '#6531a0', '#783498',
  '#8b3790', '#9d3989',
  '#b03c81', '#c33f79',
  '#d64172', '#e9446a'
]
```

Using 4 colors and 20 midpoints to generate an array of hex color values :

```javascript
import Gradient from "javascript-color-gradient";

const gradientArray = new Gradient()
  .setColorGradient("#3F2CAF", "#e9446a", "#edc988", "#607D8B")
  .setMidpoint(20)
  .getColors();

console.log(gradientArray);

[
  '#3f2caf', '#5a30a4',
  '#753499', '#90378e',
  '#aa3b83', '#c53f79',
  '#e9526d', '#ea6772',
  '#eb7c77', '#eb917b',
  '#eca680', '#e6c588',
  '#cfb989', '#b9ad89',
  '#a3a18a', '#8d958a',
  '#76898b', '#607D8B'
]
```

Using two colors and default (10) midpoints to return single hex color value corresponding to the provided index:

```javascript
import Gradient from "javascript-color-gradient";

const colorAtIndexTwo = new Gradient()
  .setColorGradient("#3F2CAF", "#e9446a")
  .getColor(2);

console.log(colorAtIndexTwo);

#6531a0
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

`javascript-color-gradient` is [MIT licensed.](https://github.com/Adrinlol/javascript-color-gradient/blob/master/LICENSE)

## Contributors

Special thanks to all the contributors who have contributed for this project.

[![](https://avatars2.githubusercontent.com/u/48876996?s=60&u=56a4865489e47ec29133e8792094ae83d8a9952c&v=4)](https://github.com/adrinlol)
[![](https://avatars2.githubusercontent.com/u/29488727?s=60&u=a25b4053dc78f359299c3b700cb13ff2554b92d7&v=4)](https://github.com/Saspect-IO)
