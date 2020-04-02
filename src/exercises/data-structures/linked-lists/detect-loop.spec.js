import expect from 'expect.js';
import { listToLinkedList } from '../../../shared/single-linked-list';
import { detectLoop } from './detect-loop';

describe('Exercises (Linked List): find node that creates a loop', function() {
  const testCases2 = [
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
    Array.from({length: 3 + Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 40)),
  ];
  it(`check if the return node is the one that make the loop: (${testCases2.length} tests)`, function() {
    testCases2.forEach(args => {
      const linkedList = listToLinkedList(args);
      const node = linkedList.get(Math.floor(Math.random() * linkedList.size));
      linkedList.last.next = node;
      expect(detectLoop(linkedList)).to.be(node);
    });
  });
});
