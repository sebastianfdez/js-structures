import expect from 'expect.js';
import { checkPermutation, checkPermutation2 } from './check-permutation';

describe('Exercises (Arrays & Strings): check string permutation', function() {
  const testCases = [
    ['abcdefghi', 'ihgfedcba'],
    ['1a1', 'a11'],
    ['1234567812345678', '8877665544332211'],
    ['icarraci', 'carcarii']
  ]
  it(`returns true for strings that are permutations: (${testCases.length} tests)`, function() {
    testCases.forEach(args => {
      expect(checkPermutation(args[0].split(''), args[1].split(''))).to.be(true);
      expect(checkPermutation2(args[0].split(''), args[1].split(''))).to.be(true);
    });
  });
  const testCases2 = [
    ['abcdefghiz', 'ihgfedcbaa'],
    ['1a1', '11'],
    ['1122334455667788', '9911223344556677'],
    ['45678', '1239']
  ];
  it(`returns false for strings that are not permutations: (${testCases2.length} tests)`, function() {
    testCases2.forEach(args => {
      expect(checkPermutation(args[0].split(''), args[1].split(''))).to.be(false);
      expect(checkPermutation2(args[0].split(''), args[1].split(''))).to.be(false); 
    });
  });

});
