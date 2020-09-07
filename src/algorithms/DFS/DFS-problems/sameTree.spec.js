import { assert } from 'chai';
import { listToTree } from '../../../shared/classes/binary-tree';
import { isSameTree } from './sameTree';

describe('Problems: BFS', function() {
  it('Check if two trees has the same values', function() {
    const tests = [
      {
        list1: [null,1,2,3],
        list2: [null,1,2,3],
        areSame: true,
      },
      {
        list1: [null,1,2,4],
        list2: [null,1,2,3],
        areSame: false,
      },
      {
        list1: [null,1],
        list2: [null,1],
        areSame: true,
      },
      {
        list1: [null,1],
        list2: [null,2],
        areSame: false,
      },
      {
        list1: [null],
        list2: [null],
        areSame: true,
      },
      {
        list1: [null,1,2,null,3,4,null,null],
        list2: [null,1,2,null,3,4,null,null],
        areSame: true,
      },
      {
        list1: [null,1,2,null,3,4,null,null,null],
        list2: [null,1,2,null,3,4,null,null],
        areSame: true,
      },
      {
        list1: [null,1,null,2,null,null,4,5,null],
        list2: [null,1,null,2,null,null,4,5,null],
        areSame: true,
      },
      {
        list1: [null,1,null,2,null,null,4,5,null],
        list2: [null,1,null,2,null,null,4,6,null],
        areSame: false,
      },
    ];
    for (let i = 0; i < tests.length; i++) {
      assert.equal(
        isSameTree(listToTree(tests[i].list1).root, listToTree(tests[i].list2).root),
        tests[i].areSame,
      );
    }
  });
});

