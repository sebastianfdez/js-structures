import { assert } from 'chai';
import expect from 'expect.js';
import { insertInto } from './insert-into';
import { flipToWin } from './flip-bit-to-win';
import { binaryToDecimal, numOf1 } from '../bm-utils';
import { nextNumbers } from './next-number';

describe('Concepts: Bit manipulation', function() {
  it('Check if number is inserted correctly at position i', function() {
    assert.equal(insertInto(5, 3, 1, 2), 7);
    assert.equal(insertInto(32, 3, 2, 4), 44);
    assert.equal(insertInto(1024, 19, 2, 8), 1100);
  });
  it('Flip to win: change one 0 to 1 and get the maximum row of 1s', function() {
    assert.equal(flipToWin(1775), 8);
    assert.equal(flipToWin(binaryToDecimal('11101101111')), 7);
    assert.equal(flipToWin(binaryToDecimal('1111')), 4);
    assert.equal(flipToWin(binaryToDecimal('1101')), 4);
    assert.equal(flipToWin(binaryToDecimal('1101100111')), 5);
    assert.equal(flipToWin(binaryToDecimal('10100111')), 4);
    assert.equal(flipToWin(binaryToDecimal('000111111111')), 9);
    for (let i = 0; i < 100; i++) {
      let num = '';
      const a = Math.floor(Math.random() * 10) + 1;
      num += '1'.repeat(a) + '0';
      const b = Math.floor(Math.random() * 10) + 1;
      num += '1'.repeat(b) + '0';
      const c = Math.floor(Math.random() * 10) + 1;
      num += '1'.repeat(c) + '0';
      const d = Math.floor(Math.random() * 10) + 1;
      num += '1'.repeat(d);
      const expect = Math.max(a+b,b+c,c+d) + 1;
      assert.equal(flipToWin(binaryToDecimal(num)), expect);
    }
  });
  it('Get next bigger and smaller with same quantity of 1', function() {
    expect(nextNumbers(10)).to.be.eql([12, 9]);
    expect(nextNumbers(22)).to.be.eql([25, 21]);
    // 88: 1011000 -> 1100001: 97, 1010100: 84;
    expect(nextNumbers(88)).to.be.eql([97, 84]);
    for (let i = 2; i < 127; i++) {
      let smaller = null;
      let bigger = null;
      let temp = i - 1;
      while (!smaller && temp >= 0) {
        if (numOf1(temp) === numOf1(i)) {
          smaller = temp;
        }
        temp--;
      }
      temp = i + 1;
      while (!bigger && temp <= 256) {
        if (numOf1(temp) === numOf1(i)) {
          bigger = temp;
        }
        temp++;
      }
      expect(nextNumbers(i)).to.be.eql([bigger, smaller]);
    }
  });
});
