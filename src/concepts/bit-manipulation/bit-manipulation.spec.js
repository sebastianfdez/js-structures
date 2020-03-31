import { assert } from 'chai';
import { singleNumber } from './single-number';
import { majorityElement } from './majority-number';

describe("Concepts: Bit manipulation", function() {
  describe("1) Problem: Single number", function() {
    var tests = [
      { args: [2,2,1], expected: 1 },
      { args: [4,1,2,1,2], expected: 4},
      { args: [4,9,1,2,9,2,11,1,5,4,5], expected: 11},
      { args: [1], expected: 1 },
      { args: [], expected: 0 },
    ];
  
    it(`Verify that the lonely number is find. ${tests.length} tests`, function() {
      tests.forEach((test) => {
        var res = singleNumber(test.args);
        assert.equal(res, test.expected);
      });
    });
  }),
  describe("2) Problem: Majority number", function() {
    var tests = [
      { args: [2,2,1], expected: 2 },
      { args: [35,31,31], expected: 31 },
      { args: [167,198,198,43,198,70,198,33,198,199,199,199,198,198], expected: 198 },
      { args: [2], expected: 2 },
      { args: [0], expected: 0 },
      { args: [-2147483648], expected: -2147483648 },
      { args: [-500,-500,0], expected: -500 }
    ];
  
    it(`Verify that the majority number is find. ${tests.length} tests`, function() {
      tests.forEach((test) => {
        var res = majorityElement(test.args);
        assert.equal(res, test.expected);
      });
    });
  })
});

