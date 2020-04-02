import expect from 'expect.js';
import { palindromePermutation, palindromePermutation2 } from './palindrome-permutation';

describe('Exercises: Palindrome permutation', function() {
  let testCases = [
    ' ',
    '   ',
    'aabb',
    'ab a b',
    ' a b a b ',
    'sasadfgsadfghjk;hjk;sadfghjk;dfghjk;',
    'sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;',
  ];
  it(`returns true for permutation that is palindrome: (${testCases.length} tests)`, function() {
    testCases.forEach(arg => {
      expect(palindromePermutation(arg.split(''))).to.be(true);
      expect(palindromePermutation2(arg.split(''))).to.be(true);
    });
  });
  let testCases2 = [
    'abcadef',
    '1234567890',
    'a b',
  ];
  it(`returns false for permutation is not palindrome: (${testCases2.length} tests)`, function() {
    testCases2.forEach(arg => {
      expect(palindromePermutation(arg.split(''))).to.be(false);
      expect(palindromePermutation2(arg.split(''))).to.be(false);
    });

  });
});
