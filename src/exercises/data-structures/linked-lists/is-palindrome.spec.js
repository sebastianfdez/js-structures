import expect from 'expect.js';
import { isPalindrome } from './is-palindrome';
import { listToLinkedList } from '../../../shared/single-linked-list';

describe('Exercises (Linked List): delete node in position i', function() {
  const testCases = [
    [1, 2, 1],
    [1, 1],
    [1],
    [2, 1, 3, 3, 1, 2],
    [2, 1, 3, 8, 9, 16, 16, 9, 8, 3, 1, 2],
    [2, 1, 3, 8, 9, 16, 11, 16, 9, 8, 3, 1, 2]
  ];
  it(`returns true for linked list that are palindromes: (${testCases.length} tests)`, function() {
    testCases.forEach(args => {
      expect(isPalindrome(listToLinkedList(args))).to.be(true);
    });
  });
  const testCases2 = [
    [1, 2, 2],
    [2, 1],
    [2, 1, 5, 4, 3, 2],
    [2, 4, 6, 88, 6, 2],
  ];
  it(`returns false for linked list that are not palindromes: (${testCases2.length} tests)`, function() {
    testCases2.forEach(args => {
      expect(isPalindrome(listToLinkedList(args))).to.be(false);
    });
  });
});