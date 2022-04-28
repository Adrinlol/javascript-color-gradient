const Gradient = require("./index");
const expect = require("chai").expect;

describe("javascript-color-gradient", function () {
  describe("getArray", function () {
    it("should return an array of strings", function () {
      expect(
        new Gradient().setColorGradient("#3F2CAF", "#8BC2E3").getColors()
      ).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings() {
        return function (item) {
          return typeof item === "string";
        };
      }
    });
  });

  describe("setColorGradient", function () {
    it("type should be an object", function () {
      expect(new Gradient().setColorGradient("#3F2CAF", "#8BC2E3")).to.satisfy(
        isObject
      );

      function isObject(object) {
        return typeof object === "object";
      }
    });
  });

  describe("getColors", function () {
    it("array length should be 10", function () {
      expect(
        new Gradient()
          .setColorGradient("#3F2CAF", "e9446a")
          .getColors("#3F2CAF", "#8BC2E3")
      ).to.satisfy(isArray);

      function isArray(object) {
        return object.length === 10;
      }
    });
  });

  describe("getColor", function () {
    it("should be equal to #8bc2e3", function () {
      expect(
        new Gradient()
          .setColorGradient("#3F2CAF", "e9446a")
          .setMidpoint(20)
          .getColor(2)
      ).to.satisfy(isEqual);

      function isEqual(item) {
        return item === "#5930a5";
      }
    });
  });
});
