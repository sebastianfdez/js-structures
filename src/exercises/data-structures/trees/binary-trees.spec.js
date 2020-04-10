import { makeMinimalHeightTree } from "./make-minimal-height-tree";
import expect from 'expect.js';
import { generateAutoTree } from "../../../shared/functions/generate-auto-tree";
import { listToTree } from "../../../shared/classes/binary-tree";

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
      expect(tree.getHeight()).to.be(Math.floor(Math.log2(test.length)) + 1);
    });
  });
  const testCases2 = [
    [1,2,3,4,5,6,7],
    [1,2],
    [-6,-1,0,4,10,11,15,22,33,106,306,555,556,557,658]
  ];
  it(`Return false if the trees are not a search tree: (${testCases2.length} tests)`, function() {
    testCases2.forEach((test) => {
      const tree = listToTree([null].concat(test));
      expect(tree.isSearchTree()).to.be(false);
    });
  });
})

describe('Exercises (Trees): Check if tree is balanced', function() {
  const testCases = [
    [1,2,3,4,5,6,7],
    [1,2],
    [1],
    [-6,-1,0,4,10,11,15,22,33,106,306,555,556,557,658]
  ];
  it(`Return true if the tree is balanced: (${testCases.length} tests)`, function() {
    testCases.forEach((test) => {
      const tree = makeMinimalHeightTree(test);
      expect(tree.isBalanced()).to.be(true);
    });
  });
  const tree = generateAutoTree(10000);
  it(`Return true if the tree is balanced for automatic created tree`, function() {
    expect(tree.isBalanced()).to.be(true);
  });
  it(`Return true if the generated tree is a search tree`, function() {
    expect(tree.isSearchTree()).to.be(true);
  });
})