const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Returns entire string if string is shorter or equal to column number", () => {
    expect(wrap("Test driven katas!!!", 20)).to.equal("Test driven katas!!!");
  });
  it("Returns string with breakline at the end of the appropriate word", () => {
    expect(wrap("Test driven katas.", 7)).to.equal("Test\ndriven\nkatas.");
  });
  it("Return string with breakline correctly", () => {
    expect(
      wrap(
        "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
        20
      )
    ).to.equal(
      "Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula."
    );
  });
});
