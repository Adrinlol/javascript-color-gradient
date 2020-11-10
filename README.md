<img align="right" src="https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg" width="300"/>

## javascript-color-gradient

![MIT License](https://img.shields.io/npm/l/javascript-color-gradient)
![Version](https://img.shields.io/github/package-json/v/adrinlol/javascript-color-gradient)
![Issue tracking](https://img.shields.io/github/issues-raw/adrinlol/javascript-color-gradient)
![GitHub stars](https://img.shields.io/github/stars/Adrinlol/javascript-color-gradient?style=social)

Lightweight JavaScript library, used to generate an array of color gradients by providing start and finish colors, as well as the required number of midpoints.

## Demo

See [Live Preview on CodeSandbox](https://codesandbox.io/s/javascript-color-gradient-csgfd).

**Note:** All the examples are using ES6, be sure is supported in your browser or modify as needed, Chrome recommended.

## Installation

```bash
npm install javascript-color-gradient
```

or

```bash
yarn add javascript-color-gradient
```

## Usage

Using two color gradients

```javascript
import Gradient from "javascript-color-gradient";

const colorGradient = new Gradient();

const color1 = "#3F2CAF";
const color2 = "#8BC2E3";

colorGradient.setGradient(color1, color2);
```

Or more:

```javascript
import Gradient from "javascript-color-gradient";

const colorGradient = new Gradient();

const color1 = "#3F2CAF";
const color2 = "#e9446a";
const color3 = "#edc988";
const color4 = "#607D8B";

colorGradient.setMidpoint(20);

colorGradient.setGradient(color1, color2, color3, color4);
```

## Methods

To set two or more hex color values. Should always be defined.

```javascript
setGradient(color1, color2);
```

To set the number range to n. By default n is 10.

```javascript
setMidpoint(n);
```

To return an array of hex colors. Requires no parameters.

```javascript
getArray();
```

To return certain hex color corresponding to the number.

```javascript
getColor(n);
```

Let's see them in action:

```javascript
console.log(colorGradient.getArray());
// outputs ["#4e4ab9", "#5d68c4", "#6d86ce", "#7ca4d9", "#8bc2e3"]

console.log(colorGradient.getColor(3));
// outputs #6d86ce
```

## Example

Implementing javascript-color-gradient library into React.js application, using two gradient colors and 10 midpoints.

![1](https://user-images.githubusercontent.com/48876996/98634350-9c2ae980-233c-11eb-91f5-8c97b2194191.png)

The following example is using four gradient colors and 20 midpoints.

![1](https://user-images.githubusercontent.com/48876996/98633966-e8c1f500-233b-11eb-8b86-26a39c12b7d0.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

javascript-color-gradient is [MIT licensed.](https://github.com/Adrinlol/javascript-color-gradient/blob/master/LICENSE)

## Contributors

Special thanks to all the contributors who have contributed for this project.

[![](https://avatars2.githubusercontent.com/u/48876996?s=60&u=56a4865489e47ec29133e8792094ae83d8a9952c&v=4)](https://github.com/adrinlol)
[![](https://avatars2.githubusercontent.com/u/29488727?s=60&u=a25b4053dc78f359299c3b700cb13ff2554b92d7&v=4)](https://github.com/Saspect-IO)
