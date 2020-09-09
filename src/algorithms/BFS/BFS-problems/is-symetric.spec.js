import { assert } from 'chai';
import { isSymmetric } from './is-symetric';
import { listToTree } from '../../../shared/classes/binary-tree';

describe('Problems: BFS', function() {
  it('Check if binary tree is symetric or not', function() {
    const tests = [
      {
        list: [null,1,2,2,3,4,4,3], isSymmetric: true,
      },
      {
        list: [null,1,2,2,null,3,null,3], isSymmetric: false,
      },
      {
        list: [null,1], isSymmetric: true,
      },
      {
        list: [null], isSymmetric: true,
      },
      {
        list: [null,1,null,2], isSymmetric: false,
      },
    ];
    for (let i = 0; i < tests.length; i++) {
      assert.equal(isSymmetric(listToTree(tests[i].list).root), tests[i].isSymmetric);
    }
  });
});

