const colorGradient = require("./index");
const expect = require("chai").expect;

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
      expect(colorGradient.setGradient("#3F2CAF", "#8BC2E3")).to.satisfy(
        isObject
      );

      function isObject(object) {
        return typeof object === "object";
      }
    });
  });

  describe("getArray", function () {
    it("array length should be 10", function () {
      expect(colorGradient.getArray("#3F2CAF", "#8BC2E3")).to.satisfy(isArray);

      function isArray(object) {
        return object.length === 10;
      }
    });
  });

  describe("getColor", function () {
    it("should be equal to #8bc2e3", function () {
      expect(colorGradient.getColor(10)).to.satisfy(isEqual);

      function isEqual(item) {
        return item === "#8bc2e3";
      }
    });
  });
});
