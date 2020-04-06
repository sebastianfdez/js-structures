import expect from 'expect.js';
import { testCases } from './rotate-matrix.tests';
import { rotateMatrix } from './rotate-matrix';

describe('Exercises (Arrays & Strings): Rotate Matrix', function() {
  it(`returns true for second matrix is rotation of the first: (${testCases.length} tests)`,
  function() {
    testCases.forEach(test => {
      expect(rotateMatrix(test.arg)).to.eql(test.expected);
    });
  });
});
