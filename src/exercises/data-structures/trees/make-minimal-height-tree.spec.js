import { makeMinimalHeightTree } from "./make-minimal-height-tree";
import expect from 'expect.js';

describe('Exercises (Trees): Make minimum min heap', function() {
  const testCases = [
    [1,2,3,4,5,6,7],
    [1,2],
    [1],
    [-6,-1,0,4,10,11,15,22,33,106,306,555,556,557,658]
  ];
  it(`Check if the height of the tree is the minimum possible: (${testCases.length} tests)`, function() {
    testCases.forEach((test) => {
      const tree = makeMinimalHeightTree(test);
      expect(tree.getHeight(tree.root)).to.be(Math.floor(Math.log2(test.length)) + 1);
    });
  });
})