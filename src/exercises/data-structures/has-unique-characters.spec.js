import expect from 'expect.js';
import { hasUniqueCharactersSet, hasUniqueCharactersSet2 } from './has-unique-characters';

describe('Exercises: has unique characters', function() {
  it(`returns true for unique string:`, function() {
    [
      'abcdefghi',
      'jklpoiuqwerzxcvmnsadf',
      '1234567890',
      'AaBbCcDdeFg1234567890(*&^%$#@!)'
    ].forEach(arg => {
      expect(hasUniqueCharactersSet(arg.split(''))).to.be(true);
      expect(hasUniqueCharactersSet2(arg.split(''))).to.be(true);
    });
  });
  it(`returns false for string with dupes:`, function() {
    [
      'abcadef',
      'aaaaaaaaaa',
      'abcdefghijklmnopqrstuvwxyza',
      '1234567890asdklf1',
      '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
    ].forEach(arg => {
      expect(hasUniqueCharactersSet(arg.split(''))).to.be(false);
      expect(hasUniqueCharactersSet2(arg.split(''))).to.be(false);
    });

  });

});
