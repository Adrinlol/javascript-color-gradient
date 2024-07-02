class GradientColor {
  constructor() {
    this.minNum = 0;
    this.maxNum = 10;
    this.startHex = "";
    this.endHex = "";
  }

  setColorGradient(colorStart, colorEnd) {
    if (!colorStart.startsWith("#") || !colorEnd.startsWith("#")) {
      throw new Error('Colors must be in hexadecimal format starting with "#"');
    }

    this.startHex = this.validateAndExpandHex(colorStart);
    this.endHex = this.validateAndExpandHex(colorEnd);
  }

  validateAndExpandHex(hex) {
    if (hex.length === 4) {
      return "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    } else if (hex.length === 7) {
      return hex;
    } else {
      throw new Error(
        "Invalid color format. Please use full hex color values (e.g., #3f2caf) instead of abbreviated formats",
      );
    }
  }

  setMidpoint(minNumber = 0, maxNumber = 10) {
    this.minNum = minNumber;
    this.maxNum = maxNumber;
  }

  getColor(numberValue) {
    if (numberValue === undefined) return;

    return (
      "#" +
      this.generateHex(
        numberValue,
        this.startHex.substring(1, 3),
        this.endHex.substring(1, 3),
      ) +
      this.generateHex(
        numberValue,
        this.startHex.substring(3, 5),
        this.endHex.substring(3, 5),
      ) +
      this.generateHex(
        numberValue,
        this.startHex.substring(5, 7),
        this.endHex.substring(5, 7),
      )
    );
  }

  generateHex(number, start, end) {
    if (number < this.minNum) number = this.minNum;
    else if (number > this.maxNum) number = this.maxNum;

    const midPoint = this.maxNum - this.minNum;
    const startBase = parseInt(start, 16);
    const endBase = parseInt(end, 16);
    const average = (endBase - startBase) / midPoint;
    const finalBase = Math.round(average * (number - this.minNum) + startBase);
    return finalBase.toString(16).padStart(2, "0");
  }
}

class Gradient {
  constructor() {
    this.maxNum = 10;
    this.colors = [];
    this.colorGradients = [];
    this.intervals = [];
  }

  setColorGradient(...gradientColors) {
    if (gradientColors.length < 2) {
      throw new RangeError(`setColorGradient requires at least 2 colors`);
    }

    const increment = (this.maxNum - 1) / (gradientColors.length - 1);
    this.colorGradients = [];
    this.intervals = [];

    for (let i = 0; i < gradientColors.length - 1; i++) {
      const gradientColor = new GradientColor();
      const lower = increment * i;
      const upper = increment * (i + 1);
      gradientColor.setColorGradient(gradientColors[i], gradientColors[i + 1]);
      gradientColor.setMidpoint(lower, upper);
      this.colorGradients.push(gradientColor);
      this.intervals.push({ lower, upper });
    }
    this.colors = gradientColors;
    return this;
  }

  getColors() {
    const gradientColorsArray = [];
    const numColors = this.maxNum + 1;

    for (let j = 0; j < this.intervals.length; j++) {
      const { lower, upper } = this.intervals[j];
      const start = j === 0 ? 0 : Math.ceil(lower);
      const end = j === this.intervals.length - 1 ? Math.ceil(upper) : Math.floor(upper);

      for (let i = start; i < end; i++) {
        gradientColorsArray.push(this.colorGradients[j].getColor(i));
      }
    }

    gradientColorsArray.push(this.colors[this.colors.length - 1]);
    return gradientColorsArray.slice(0, numColors);
  }

  getColor(numberValue) {
    if (isNaN(numberValue)) {
      throw new TypeError(`getColor requires a numeric value`);
    }
    if (numberValue <= 0) {
      throw new RangeError(`getColor value should be greater than 0`);
    }

    const segment = (this.maxNum + 1) / this.colorGradients.length;
    const index = Math.min(Math.floor(numberValue / segment), this.colorGradients.length - 1);
    return this.colorGradients[index].getColor(numberValue);
  }

  setMidpoint(maxNumber = 10) {
    if (isNaN(maxNumber) || maxNumber < this.colors.length) {
      throw new RangeError(
        `setMidpoint should be a number greater than or equal to the number of colors`,
      );
    }

    this.maxNum = maxNumber ;
    this.setColorGradient(...this.colors);
    return this;
  }
}

module.exports = Gradient;