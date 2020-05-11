## javascript-color-gradient
![MIT License](https://img.shields.io/npm/l/javascript-color-gradient)
![GitHub stars](https://img.shields.io/github/stars/Adrinlol/javascript-color-gradient?style=social)
![Bundle size](https://img.shields.io/bundlephobia/min/javascript-color-gradient?style=flat-square)


Lightweight JavaScript library, used to generate an array of color gradients by providing start and finish colors, as well as the required number of midpoints.

## Installation
```bash
npm install javascript-color-gradient
```

## Usage
```javascript
import Gradient from "javascript-color-gradient";

const colorGradient = new Gradient();

const color1 = "#3F2CAF";
const color2 = "#8BC2E3";

colorGradient.setGradient(color1, color2);
```
## Methods

#### setGradient(color1, color2) - sets two or more hex color values. Should always be defined.

#### setMidpoint(n) - sets the number range from 0 to n. By default n is 10.

#### getArray()  - returns an array of hex colors. Requires no parameters.

#### getColor(n) - returns certain hex color, where n is a requested number of midpoint colors.

```javascript
console.log(colorGradient.getArray()) // outputs ["#4e4ab9", "#5d68c4", "#6d86ce", "#7ca4d9", "#8bc2e3"]
console.log(colorGradient.getColor(3)) // outputs #6d86ce
```

## Examples
Implementing javascript-color-gradient library into React.js application, using two gradient colors and 4 midpoints.

![image](https://user-images.githubusercontent.com/48876996/81550844-e0d7c700-9391-11ea-8222-def50638b326.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
javascript-color-gradient is [MIT licensed.](https://github.com/Adrinlol/javascript-color-gradient/blob/master/LICENSE)
