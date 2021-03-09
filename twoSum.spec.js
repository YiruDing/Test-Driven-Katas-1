const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("Returns empty array if num array is empty", () => {
    expect(twoSum([], 10)).to.eql([]);
  });
  it("Returns the right indices twoSum([1, 2, 3], 5) = [1, 2]", () => {
    expect(twoSum([1, 2, 3], 5)).to.eql([1, 2]);
  });
  it("Returns the right indices twoSum([1, 2, 8, 9], 11) = [1, 3]", () => {
    expect(twoSum([1, 2, 8, 9], 11)).to.eql([1, 3]);
  });
  it("Returns the right indices twoSum([1, 2, 8, 9], 15) = []", () => {
    expect(twoSum([1, 2, 8, 9], 15)).to.eql([]);
  });
});
