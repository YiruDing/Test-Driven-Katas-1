const { expect } = require("chai");
const longestCommonPrefix = require("./longestCommonPrefix");

describe("longestCommonPrefix", () => {
  it("Returns empty string if nothing is in common ['abc'] = ''", () => {
    expect(longestCommonPrefix(["abc"])).to.equal("");
  });

  it("Returns empty string if nothing is in common ['a','b','c'] = ''", () => {
    expect(longestCommonPrefix(["a", "b", "c"])).to.equal("");
  });

  it("Returns longest prefix ['foo', 'foolish', 'foobar'] = 'foo'", () => {
    expect(longestCommonPrefix(["foo", "foolish", "foobar"])).to.equal("foo");
  });

  it("Returns longest prefix ['maybe', 'mayday', 'mama'] = 'ma'", () => {
    expect(longestCommonPrefix(["maybe", "mayday", "mama"])).to.equal("ma");
  });
});
