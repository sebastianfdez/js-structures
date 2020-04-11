import expect from 'expect.js';
import { mergeKLists } from './merge-k-sorted-lists';
import { listToLinkedList, nodeListtoList } from '../../shared/classes/single-linked-list';

describe('Data Structures: Linked List', function() {
  describe(`3) Problem: Merge k sorted list.`, function() {
    const testCases = [
      {
        arg: [[1,3,5],[2,4,6]],
        expected: [1,2,3,4,5,6]
      },
      {
        arg: [[1,2,3], [4,5,6]],
        expected: [1,2,3,4,5,6]
      },
      {
        arg: [[1,2,3], [4,5,6], [7,8,9]],
        expected: [1,2,3,4,5,6,7,8,9]
      },
      {
        arg: [[1,2,3], [4,5,6], [1,2,3]],
        expected: [1,1,2,2,3,3,4,5,6]
      },
      {
        arg: [[-1,2,3], [-4,5,6], [-11,2,3]],
        expected: [-11,-4,-1,2,2,3,3,5,6]
      },
      {
        arg: [[1]],
        expected: [1]
      },
      {
        arg: [[]],
        expected: null
      },
      {
        arg: [[], []],
        expected: null
      },
    ];
    it(`Verify that k lists are merged correctly (${testCases.length} tests)`, function() {
      testCases.forEach((args) => {
        let linkedLists = args.arg.map((list) => listToLinkedList(list).head);
        let expected = listToLinkedList(args.expected).head;
        expect(nodeListtoList(mergeKLists(linkedLists))).to.eql(nodeListtoList(expected));
      });
    });
  })
})