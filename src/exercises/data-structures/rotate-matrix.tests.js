export var testCases = [
  {
    arg: [
      [ 1,  2,  3,  4],
      [ 5,  6,  7,  8],
      [ 9, 10, 11, 12],
      [13, 14, 15, 16]
    ],
    expected: [
      [13,  9,  5,  1],
      [14, 10,  6,  2],
      [15, 11,  7,  3],
      [16, 12,  8,  4]
    ]
  },
  {
    arg: [
      [13,  9,  5,  1],
      [14, 10,  6,  2],
      [15, 11,  7,  3],
      [16, 12,  8,  4]
    ],
    expected: [
      [16, 15, 14, 13],
      [12, 11, 10,  9],
      [ 8,  7,  6,  5],
      [ 4,  3,  2,  1]
    ]
  },
  {
    arg: [
      [16, 15, 14, 13],
      [12, 11, 10,  9],
      [ 8,  7,  6,  5],
      [ 4,  3,  2,  1]
    ],
    expected: [
      [ 4,  8, 12, 16],
      [ 3,  7, 11, 15],
      [ 2,  6, 10, 14],
      [ 1,  5,  9, 13]
    ]
  },
  {
    arg: [[0]],
    expected: [[0]]
  },
  {
    arg: [ [1, 2], [3, 4] ],
    expected: [ [3, 1], [4, 2] ],
  },
  {
    arg: [ [3, 1], [4, 2] ],
    expected: [ [4, 3], [2, 1] ],
  },
  {
    arg: [ [4, 3], [2, 1] ],
    expected: [ [2, 4], [1, 3] ],
  },
  {
    arg: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ],
    expected: [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ],
  },
  {
    arg: [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ],
    expected: [ [9, 8, 7], [6, 5, 4], [3, 2, 1] ],
  },
  {
    arg: [ [9, 8, 7], [6, 5, 4], [3, 2, 1] ],
    expected: [ [3, 6, 9], [2, 5, 8], [1, 4, 7] ],
  }
]
