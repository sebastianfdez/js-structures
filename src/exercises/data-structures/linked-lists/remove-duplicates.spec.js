import expect from 'expect.js';
import { removeDuplicates } from './remove-duplicates';
import { listToLinkedList, linkedListtoList } from '../../../shared/classes/single-linked-list';

describe('Exercises (Linked List): delete duplicates', function() {
  const testCases = [
    {
      list: null,
      expected: null
    },
    {
      list: [5],
      expected: [5]
    },
    {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      list: [5, 5, 5, 5, 5],
      expected: [5]
    },
    {
      list: [2, 4, 5, 4, 5, 4, 6, 7, 6, 8],
      expected: [2, 4, 5, 6, 7, 8]
    },
    {
      list: [8, 6, 8, 6],
      expected: [8, 6]
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      expected: [8, 9, 6, 4, 2, 3, 1]
    }
  ];
  it(`returns true if returned list has no duplicates: (${testCases.length} tests)`, function() {
    testCases.forEach(args => {
      let answer = removeDuplicates(listToLinkedList(args.list));
      expect(linkedListtoList(answer)).to.eql(args.expected);
    });
  });
});

describe('Exercises (Linked List): delete node in position i', function() {
  const testCases = [
    {
      list: [5, 8],
      node: 0,
      expected: [8]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 8,
      expected: [5, 8, 3, 2, 7, 1, 4, 9, 30]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 4,
      expected: [5, 8, 3, 2, 1, 4, 9, 15, 30]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 1,
      expected: [5, 3, 2, 7, 1, 4, 9, 15, 30]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 2,
      expected: [5, 8, 2, 7, 1, 4, 9, 15, 30]
    }
  ];
  it(`returns true if node was correctly deleted: (${testCases.length} tests)`, function() {
    testCases.forEach(args => {
      let answer = (listToLinkedList(args.list));
      answer = answer.remove(args.node);
      expect(linkedListtoList(answer)).to.eql(args.expected);
    });
  });
});