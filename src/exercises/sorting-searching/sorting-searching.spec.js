import { assert } from 'chai';
import { findInRotatedArray } from './search-in-sorted-array';

describe('Exercises (Sorting ans Searching)', function() {
  const lists = [
    [ 15, 16, 19, 20, 25, 26, 28, 30, 1, 3, 4, 5, 7, 10, 14 ],
    [ 15, 16, 19, 30, 1, 3, 4, 5, 6, 7, 8, 10, 14 ],
    [ 0 ],
    [],
    [ 1, 2, 3, 4, 5, 6, 7, 8 ],
    [ 30, 1, 2, 3, 4, 5, 6, 7, 8 ],
  ]
  it(`Find number in sorted and rotated list. (${lists.length} tests)`, function() {
    for (let l = 0;  l < lists.length; l++) {
      for (let i = 0; i < lists[l].length; i++) {
        assert.equal(findInRotatedArray(lists[l][i], lists[l]), i);
      }
    }
  });
});

