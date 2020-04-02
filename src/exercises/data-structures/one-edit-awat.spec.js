import expect from 'expect.js';
import { oneEditAway } from './one-edit-awat';

describe('Exercises: One string edition away', function() {
  let testCases = [
    ['pale', 'ple'],
    ['pales', 'pale'],
    ['pale', 'bale'],
    ['pale', 'pxle'],
    ['pale', 'pate'],
    ['pale', 'pald'],
    ['answers', 'answer'],
    ['technology', 'etechnology']
  ];
  it(`returns true for one string can be transformed in the other: (${testCases.length} tests)`, function() {
    testCases.forEach(arg => {
      expect(oneEditAway(arg[0].split(''),arg[1].split(''))).to.be(true);
    });
  });
  let testCases2 = [
    ['pale', 'pl'],
    ['paless', 'pale'],
    ['pale', 'bales'],
    ['abcdefghiz', 'ihgfedcbaa'],
    ['1122334455667788', '9911223344556677'],
    ['45678', '1239'],
    ['abcd', 'dcba']
  ];
  it(`returns false for one string can't be transformed in the other: (${testCases2.length} tests)`, function() {
    testCases2.forEach(arg => {
      expect(oneEditAway(arg[0].split(''),arg[1].split(''))).to.be(false);
    });

  });
});
