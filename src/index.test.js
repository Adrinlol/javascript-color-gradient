const Gradient = require("./index");
const expect = require("chai").expect;

describe("Gradient Color Library", function () {
  describe("setColorGradient", function () {
    it("should set gradient colors and return an object", function () {
      const gradient = new Gradient();
      gradient.setColorGradient("#3F2CAF", "#8BC2E3").setMidpoint(10);
      
      expect(gradient).to.be.an.instanceOf(Gradient);
      expect(gradient.getColors()).to.be.an("array").that.is.not.empty;
    });

    it("should throw error for invalid color format", function () {
      const gradient = new Gradient();

      expect(() => gradient.setColorGradient("#3F2CAF", "e9446a")).to.throw(
        Error,
        'Colors must be in hexadecimal format starting with "#"'
      );
    });
  });

  describe("getColors", function () {
    it("should return an array of strings with length 10", function () {
      const colors = new Gradient()
        .setColorGradient("#3F2CAF", "#8BC2E3")
        .setMidpoint(10)
        .getColors();

      expect(colors).to.be.an("array").that.has.lengthOf(10);
      colors.forEach(color => {
        expect(color).to.be.a("string");
      });
    });
  });

  describe("getColor", function () {
    it("should return the correct color", function () {
      const color = new Gradient()
        .setColorGradient("#3F2CAF", "#8BC2E3")
        .setMidpoint(20)
        .getColor(2);

      expect(color).to.equal("#473cb4");
    });

    it("should throw error for non-numeric input", function () {
      const gradient = new Gradient().setColorGradient("#3F2CAF", "#8BC2E3");

      expect(() => gradient.getColor("invalid")).to.throw(
        TypeError,
        "getColor requires a numeric value"
      );
    });

    it("should throw error for out of range input", function () {
      const gradient = new Gradient().setColorGradient("#3F2CAF", "#8BC2E3");

      expect(() => gradient.getColor(-1)).to.throw(
        RangeError,
        "getColor value should be greater than 0"
      );
    });
  });

  describe("setMidpoint", function () {
    it("should set the midpoint correctly", function () {
      const gradient = new Gradient().setColorGradient("#3F2CAF", "#8BC2E3");
    
      gradient.setMidpoint(15);
    
      const colors = gradient.getColors();
      expect(colors).to.have.lengthOf(15);
    });

    it("should throw error for invalid midpoint input", function () {
      const gradient = new Gradient().setColorGradient("#3F2CAF", "#8BC2E3");

      expect(() => gradient.setMidpoint("invalid")).to.throw(
        RangeError,
        "setMidpoint should be a number greater than or equal to the number of colors"
      );

      expect(() => gradient.setMidpoint(1)).to.throw(
        RangeError,
        "setMidpoint should be a number greater than or equal to the number of colors"
      );
    });
  });
});
