import { possibleWaysToRunUp } from "./triple-step"
import expect from "expect.js";
import { allPermutation } from "./all-permutations-string";

describe("Exercises: Dynamic Programming", function() {
  describe("Triple step problem: Find how many ways are to run up a stair. Doing 3,2 or 1 step", function() {
    it("Verify base cases: 1, 2, 3, 4", function() {
      expect(possibleWaysToRunUp(1)).to.be(1);
      expect(possibleWaysToRunUp(2)).to.be(2);
      expect(possibleWaysToRunUp(3)).to.be(4);
      expect(possibleWaysToRunUp(4)).to.be(7);
    });
    it("Verify border cases: -1, 0", function() {
      expect(possibleWaysToRunUp(-1)).to.be(0);
      expect(possibleWaysToRunUp(0)).to.be(0);
    });
    it("Verify big cases", function() {
      expect(possibleWaysToRunUp(20)).to.be(121415);
      expect(possibleWaysToRunUp(30)).to.be(53798080);
    });
  });

  describe("All possible permutation in a string with unique characters", function() {
    expect(allPermutation('bac')).to.eql(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    expect(allPermutation('wep')).to.eql(['epw', 'ewp', 'pew', 'pwe', 'wep', 'wpe']);
    expect(allPermutation('a')).to.eql(['a']);
    expect(allPermutation('bc')).to.eql(['bc', 'cb']);
    expect(allPermutation('1234').length).to.eql(24);
  })
})