import expect from 'expect.js';
import { quickSort } from './quick-sort/quick-sort';
import { mergeSort } from './merge-sort/merge-sort';

const tests = [
  {
    list: [2,1,3,5,4],
    sorted: [1,2,3,4,5],
  },
  {
    list: [2,9,10,1,8,3,13,12,7,11,5,4,6,14,15],
    sorted: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  },
  {
    list: [ 14, 22, 26, 28, 39, 40, 41, 51, 61, 7, 79 ],
    sorted: [ 7, 14, 22, 26, 28, 39, 40, 41, 51, 61, 79 ],
  }, {
    list: [
      92, 89,  2, 74, 98, 34,
      64, 53,  6, 67, 80, 27,
       1, 98, 13, 62
    ],
    sorted: [ 1, 2, 6, 13, 27, 34, 53, 62, 64, 67, 74, 80, 89, 92, 98, 98 ],
  }
];

describe('Algorithms: Quick-sort', function() {
  it(`Sort custom lists using quicksort. Tests: ${tests.length}`, function() {
    for (let i = 0; i < tests.length; i++) {
      expect(quickSort(tests[i].list)).eql(tests[i].sorted);
    }
  });
  it(`Generate 100 random lists, with random lengths and random values`, function() {
    for (let i = 0; i < 100; i++) {
      const array = Array.from({
        length: Math.floor(Math.random() * 100)
      }, () => Math.floor(Math.random() * 100));
      expect(quickSort(array)).eql(array.slice().sort((a , b) => a - b));
    }
  });
  it(`Sort a big one`, function() {
    const array = Array.from({
      length: 10000
    }, () => Math.floor(Math.random() * 100));
    expect(quickSort(array)).eql(array.slice().sort((a , b) => a - b));
  });
});

describe('Algorithms: Merge-sort', function() {
  it(`Sort custom lists using mergeSort. Tests: ${tests.length}`, function() {
    for (let i = 0; i < tests.length; i++) {
      expect(mergeSort(tests[i].list)).eql(tests[i].sorted);
    }
  });
  it(`Generate 100 random lists, with random lengths and random values`, function() {
    for (let i = 0; i < 100; i++) {
      const array = Array.from({
        length: Math.floor(Math.random() * 100)
      }, () => Math.floor(Math.random() * 100));
      expect(mergeSort(array)).eql(array.slice().sort((a , b) => a - b));
    }
  });
  it(`Sort a big one`, function() {
    const array = Array.from({
      length: 10000
    }, () => Math.floor(Math.random() * 100));
    expect(mergeSort(array)).eql(array.slice().sort((a , b) => a - b));
  });
});

