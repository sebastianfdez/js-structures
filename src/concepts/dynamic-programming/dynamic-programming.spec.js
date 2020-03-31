import { assert } from 'chai';
import { cherryPickup } from './cherry-pickup';
import { testCases } from './cherry-pickup-tests';

describe("Concepts: Dynamic Programming", function() {
  describe("1) Problem: Cherry pick-up", function() {
    it(`Verify if the number of cherries that can be picked is correct. ${testCases.length} tests`, function() {
      testCases.forEach((test) => {
        var res = cherryPickup(test.grid);
        assert.equal(res, test.expected);
      });
    });
  })
  describe("2) Problem: Maximum longest parentheses", function() {
    it(`Verify the longest parentheses found set is correct. ${testCases.length} tests`, function() {
      testCases.forEach((test) => {
        var res = cherryPickup(test.grid);
        assert.equal(res, test.expected);
      });
    });
  })
});
