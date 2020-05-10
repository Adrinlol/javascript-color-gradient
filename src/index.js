class Gradient {
    constructor(gradients = '', maxNum = 10, colors = ['', '']) {

        const setColors = props => {
            if (props.length < 2) {
                throw new Error(`setGradient should have more than ${props.length} color`);
            } else {
                let increment = maxNum / (props.length - 1);
                let firstGradient = new GradientColor();
                firstGradient.setGradient(props[0], props[1]);
                firstGradient.setMidpoint(0, 0 + increment);
                gradients = [firstGradient];

                for (let i = 1; i < props.length - 1; i++) {
                    let gradientColor = new GradientColor();
                    gradientColor.setGradient(props[i], props[i + 1]);
                    gradientColor.setMidpoint(0 + increment * i, 0 + increment * (i + 1));
                    gradients[i] = gradientColor;
                }
                colors = props;
            }
        }

        this.setGradient = (...props) => {
            setColors(props);
            return this;
        }

        this.getArray = () => {
            let gradientArray = [];
            for (let i = 1; i < maxNum + 1; i++) {
                gradientArray.push(gradients[0].getColor(i))
            }
            return gradientArray;
        }

        this.getColor = props => {
            if (isNaN(props)) {
                throw new TypeError(`getColor should be a number`);
            } else if (props <= 0) {
                throw new TypeError(`getColor should be greater than ${props}`);
            } else {
                let segment = (maxNum - 0) / (gradients.length);
                let index = Math.min(Math.floor((Math.max(props, 0) - 0) / segment), gradients.length - 1);
                return gradients[index].getColor(props);
            }
        }

        this.setMidpoint = (maxNumber) => {
            if (!isNaN(maxNumber) && maxNumber >= 0) {
                maxNum = maxNumber;
                setColors(colors);
            } else if (maxNumber <= 0) {
                throw new RangeError(`midPoint should be greater than ${maxNumber}`);
            } else {
                throw new RangeError('midPoint should be a number');
            }
            return this;
        }
    }
}

class GradientColor {
    constructor(startColor = '', endColor = '', minNum = 0, maxNum = 10) {
        this.setGradient = (colorStart, colorEnd) => {
            startColor = getHexColor(colorStart);
            endColor = getHexColor(colorEnd);
        }

        this.setMidpoint = (minNumber, maxNumber) => {
            minNum = minNumber;
            maxNum = maxNumber;
        }

        this.getColor = props => {
            if (props) {
                return '#' + generateHex(props, startColor.substring(0, 2), endColor.substring(0, 2)) +
                    generateHex(props, startColor.substring(2, 4), endColor.substring(2, 4)) +
                    generateHex(props, startColor.substring(4, 6), endColor.substring(4, 6));
            }
        }


        const generateHex = (number, start, end) => {
            if (number < minNum) {
                number = minNum;
            } else if (number > maxNum) {
                number = maxNum;
            }

            let midPoint = maxNum - minNum;
            let startBase = parseInt(start, 16);
            let endBase = parseInt(end, 16);
            let average = (endBase - startBase) / midPoint;
            let finalBase = Math.round(average * (number - minNum) + startBase);
            return (finalBase.toString(16));
        }
        const getHexColor = props => {
            return props.substring(props.length - 6, props.length);
        }
    }
}

module.exports = Gradient;