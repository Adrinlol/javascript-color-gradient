class GradientColor {
  constructor(startColor = "", endColor = "", minNum = 0, maxNum = 10) {
    this.setColorGradient = (colorStart, colorEnd) => {
      startColor = getHexColor(colorStart);
      endColor = getHexColor(colorEnd);
    };

    this.setMidpoint = (minNumber, maxNumber) => {
      minNum = minNumber;
      maxNum = maxNumber;
    };

    this.getColor = (numberValue) => {
      if (numberValue) {
        return (
          "#" +
          generateHex(
            numberValue,
            startColor.substring(0, 2),
            endColor.substring(0, 2)
          ) +
          generateHex(
            numberValue,
            startColor.substring(2, 4),
            endColor.substring(2, 4)
          ) +
          generateHex(
            numberValue,
            startColor.substring(4, 6),
            endColor.substring(4, 6)
          )
        );
      }
    };

    const generateHex = (number, start, end) => {
      if (number < minNum) {
        number = minNum;
      } else if (number > maxNum) {
        number = maxNum;
      }

      const midPoint = maxNum - minNum;
      const startBase = parseInt(start, 16);
      const endBase = parseInt(end, 16);
      const average = (endBase - startBase) / midPoint;
      const finalBase = Math.round(average * (number - minNum) + startBase);
      const balancedFinalBase =
        finalBase < 16 ? "0" + finalBase.toString(16) : finalBase.toString(16);
      return balancedFinalBase;
    };

    const getHexColor = (color) => {
      return color.substring(color.length - 6, color.length);
    };
  }
}

class Gradient {
  constructor(
    colorGradients = "",
    maxNum = 10,
    colors = ["", ""],
    intervals = []
  ) {
    const setColorGradient = (gradientColors) => {
      if (gradientColors.length < 2) {
        throw new Error(
          `setColorGradient should have more than ${gradientColors.length} color`
        );
      } else {
        const increment = maxNum / (gradientColors.length - 1);
        const firstColorGradient = new GradientColor();
        const lower = 0;
        const upper = 0 + increment;
        firstColorGradient.setColorGradient(
          gradientColors[0],
          gradientColors[1]
        );
        firstColorGradient.setMidpoint(lower, upper);
        colorGradients = [firstColorGradient];
        intervals = [
          {
            lower,
            upper,
          },
        ];

        for (let i = 1; i < gradientColors.length - 1; i++) {
          const gradientColor = new GradientColor();
          const lower = 0 + increment * i;
          const upper = 0 + increment * (i + 1);
          gradientColor.setColorGradient(
            gradientColors[i],
            gradientColors[i + 1]
          );
          gradientColor.setMidpoint(lower, upper);
          colorGradients[i] = gradientColor;
          intervals[i] = {
            lower,
            upper,
          };
        }
        colors = gradientColors;
      }
    };

    this.setColorGradient = (...gradientColors) => {
      setColorGradient(gradientColors);
      return this;
    };

    this.getColors = () => {
      const gradientColorsArray = [];
      for (let j = 0; j < intervals.length; j++) {
        const interval = intervals[j];
        const start = interval.lower === 0 ? 1 : Math.ceil(interval.lower);
        const end =
          interval.upper === maxNum
            ? interval.upper + 1
            : Math.ceil(interval.upper);
        for (let i = start; i < end; i++) {
          gradientColorsArray.push(colorGradients[j].getColor(i));
        }
      }
      return gradientColorsArray;
    };

    this.getColor = (numberValue) => {
      if (isNaN(numberValue)) {
        throw new TypeError(`getColor should be a number`);
      } else if (numberValue <= 0) {
        throw new TypeError(`getColor should be greater than ${numberValue}`);
      } else {
        const toInsert = numberValue + 1;
        const segment = (maxNum - 0) / colorGradients.length;
        const index = Math.min(
          Math.floor((Math.max(numberValue, 0) - 0) / segment),
          colorGradients.length - 1
        );
        return colorGradients[index].getColor(toInsert);
      }
    };

    this.setMidpoint = (maxNumber) => {
      if (!isNaN(maxNumber) && maxNumber >= 0) {
        maxNum = maxNumber;
        setColorGradient(colors);
      } else if (maxNumber <= 0) {
        throw new RangeError(`midPoint should be greater than ${maxNumber}`);
      } else {
        throw new RangeError("midPoint should be a number");
      }
      return this;
    };
  }
}

module.exports = Gradient;
