import { assert } from 'chai';
import { listToTree } from '../../../shared/classes/binary-tree';
import { levelOrder } from './levelOrder';

describe('Problems: BFS', function() {
  it('Get levels list from a binary tree', function() {
    const tests = [
      {
        list: [null,3,9,20,null,null,15,7], levels: [
          [3],
          [9,20],
          [15,7]
        ],
      },
      {
        list: [null,3,9,20,null,null,15,7,null,null,null,null, 1, 45, 6, null],
        levels: [[3],[9,20],[15,7],[1,45,6]],
      },
      {
        list: [null,3],
        levels: [[3]],
      },
      {
        list: [null],
        levels: [],
      },
      {
        list: [null,1,1,1,1,1,1,1,1,1,1,1],
        levels: [[1],[1,1],[1,1,1,1],[1,1,1,1]],
      },
    ];
    for (let i = 0; i < tests.length; i++) {
      assert.deepEqual(levelOrder(listToTree(tests[i].list).root), tests[i].levels);
    }
  });
});

