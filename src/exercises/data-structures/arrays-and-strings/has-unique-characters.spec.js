import expect from 'expect.js';
import { hasUniqueCharactersSet, hasUniqueCharactersSet2 } from './has-unique-characters';

describe('Exercises (Arrays & Strings): has unique characters', function() {
  let testCases = [
    'abcdefghi',
    'jklpoiuqwerzxcvmnsadf',
    '1234567890',
    'AaBbCcDdeFg1234567890(*&^%$#@!)'
  ];
  it(`returns true for unique string: (${testCases.length} tests)`, function() {
    testCases.forEach(arg => {
      expect(hasUniqueCharactersSet(arg.split(''))).to.be(true);
      expect(hasUniqueCharactersSet2(arg.split(''))).to.be(true);
    });
  });
  let testCases2 = [
    'abcadef',
    'aaaaaaaaaa',
    'abcdefghijklmnopqrstuvwxyza',
    '1234567890asdklf1',
    '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
  ];
  it(`returns false for string with dupes: (${testCases2.length} tests)`, function() {
    testCases2.forEach(arg => {
      expect(hasUniqueCharactersSet(arg.split(''))).to.be(false);
      expect(hasUniqueCharactersSet2(arg.split(''))).to.be(false);
    });

  });
});
