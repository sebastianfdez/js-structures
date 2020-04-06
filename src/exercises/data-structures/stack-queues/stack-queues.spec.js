import expect from 'expect.js';
import { TripleStack } from './triple-stack';

describe('Exercises (Stacks & Queues): triple stack', function() {
  const tripleStack = new TripleStack();
  const stacks = [[], [], []];
  it(`Check if triple stack push and pop correctly`, function() {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 3; j++) {
        const number = Math.floor(Math.random() * 1000);
        tripleStack.push(number, j);
        stacks[j].push(number);
      }
    }
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 3; j++) {
        expect(tripleStack.pop(2-j)).to.be(stacks[2-j].pop());
      }
    }
  });
  it (`Check if the queues are return correctly`, function() {
    for (let j = 0; j < 3; j++) {
      expect(tripleStack.getStack(j)).to.eql(stacks[j]);
    }
  })

});
