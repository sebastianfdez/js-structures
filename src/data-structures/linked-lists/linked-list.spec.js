import { assert } from 'chai';
import expect from 'expect.js';
import { ListNode, listToLinkedListNode } from '../../shared/classes/single-linked-list';
import { isSubPath } from './linked-list-in-binary-tree';
import { nextLargerNodes } from './next-greater-node-in-linked-list';
import { listToTree, BinaryTree } from '../../shared/classes/binary-tree';

describe("Data Structures: Linked List", function() {
  describe("1) Problem: Linked List in Binary Tree", function() {
    var list = new ListNode();
    var tree = new BinaryTree();
    function isListInBinaryTree(head, root) {
      list = listToLinkedListNode(head);
      tree = listToTree([null].concat(root));
      return isSubPath(list, tree.root);
    }
    var tests = [
      { args: {
          head: [4,2,8],
          root: [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],
        }, expected: true },
      { args: {
        head: [1,4,2,6],
        root: [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],
      }, expected: true },
      { args: {
        head: [1,4,2,6,8],
        root: [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],
      }, expected: false},
    ];
  
    it(`Verify if linked list is in tree node. ${tests.length} tests`, function() {
      tests.forEach((test) => {
        var res = isListInBinaryTree(test.args.head, test.args.root);
        assert.equal(res, test.expected);
      });
    });
  }),

  describe("2) Problem: Next greater node in linked list", function() {

    function nextGreaterNode(head) {
      const root = listToLinkedListNode(head);
      return nextLargerNodes(root);
    }
    var testCases = [
      [2,1,5],
      [2,7,4,3,5],
      [1,7,5,1,9,2,5,1],
      [],
      [1],
      [1,2],
      [2,1],
      [9,7,6,7,6,9],
    ];
    var expectedList = [
      [5,5,0],
      [7,0,5,5,0],
      [7,9,9,9,0,5,0,0],
      [],
      [0],
      [2,0],
      [0,0],
      [0,9,7,9,9,0]
    ];
  
    it(`Get next greater node in a linked list. ${testCases.length} tests`, function() {
      testCases.forEach((test, i) => {
        expect(nextGreaterNode(test)).to.eql(expectedList[i]);
      });
    });
  })
});

