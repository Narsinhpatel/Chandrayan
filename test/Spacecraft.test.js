const chai = require("chai");
const assert = chai.assert;
const { Spacecraft } = require("../src/Spacecraft");

describe("Spacecraft", function () {
  it("should move forward", function () {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommands(["f"]);
    assert.deepEqual(spacecraft.getPosition(), { x: 0, y: 1, z: 0 });
  });

  it("should turn left", function () {
    const spacecraft = new Spacecraft(0, 0, 0, "N");
    spacecraft.executeCommands(["l"]);
    assert.equal(spacecraft.getDirection(), "W");
  });

  // Add more test cases for other commands
});