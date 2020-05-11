const Gradient = require("./index");
const expect = require("chai").expect;

const colorGradient = new Gradient();
const firstColor = "#3F2CAF";
const secondColor = "#8BC2E3";
const numberProps = 10;

describe("javascript-color-gradient", function () {
  describe("getArray", function () {
    it("should return an array of strings", function () {
      expect(colorGradient.getArray).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings() {
        return function (item) {
          return typeof item === "string";
        };
      }
    });
  });

  describe("setGradient", function () {
    it("type should be an object", function () {
      expect(colorGradient.setGradient(firstColor, secondColor)).to.satisfy(
        isObject
      );

      function isObject(object) {
        return typeof object === "object";
      }
    });
  });

  describe("getColor", function () {
    it("should start with #", function () {
      expect(colorGradient.getColor(numberProps)).to.satisfy(isNumber);

      function isNumber(item) {
        return item.startsWith("#");
      }
    });
  });
});
