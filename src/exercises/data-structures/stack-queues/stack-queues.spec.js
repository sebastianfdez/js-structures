import expect from 'expect.js';
import { TripleStack } from './triple-stack';
import { StackWithMin } from './min-stack';
import { DogCatQueue } from './dog-cat-queue';

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

describe('Exercises (Stack & Queues): stack with min() function', function() {
  let teststack = []; // TODO: Improve this with a minTree
  let stackWithMin = new StackWithMin();
  it (`Check if pop, push and min functions work correctly`, function() {
    for (let j = 0; j < 100; j++) {
      const number = Math.floor(Math.random() * 1000);
      teststack.push(number);
      stackWithMin.push(number);
    }
    for (let j = 0; j < 100; j++) {
      expect(stackWithMin.getMin()).to.be(Math.min(...teststack));
      expect(stackWithMin.pop()).to.be(teststack.pop());
    }
  });
});

describe('Exercises (Stack & Queues): dog and cat queue', function() {
  let dogCatQueue = new DogCatQueue();
  it (`Check if enqueue and dequeueAny works correctly`, function() {
    dogCatQueue.enqueue('Fluffy', 'cat');
    dogCatQueue.enqueue('Puppy', 'dog');
    expect(dogCatQueue.dequeueAny().value).to.be('Fluffy');
    expect(dogCatQueue.dequeueAny().value).to.be('Puppy');
  });
  let dogCatQueue2 = new DogCatQueue();
  it (`Check if dequeueDog and dequeueCat works correctly`, function() {
    for (let i = 0; i < 5; i++) {
      dogCatQueue2.enqueue(`Fluffy${i}`, 'cat');
      dogCatQueue2.enqueue(`Puppy${i}`, 'dog');
    }
    for (let i = 0; i < 5; i++) {
      expect(dogCatQueue2.dequeueCat().value).to.be(`Fluffy${i}`);
    }
    for (let i = 0; i < 5; i++) {
      expect(dogCatQueue2.dequeueDog().value).to.be(`Puppy${i}`);
    }
    expect(dogCatQueue2.cats).to.be(0);
    expect(dogCatQueue2.dogs).to.be(0);
    expect(dogCatQueue2._last).to.be(null);
    expect(dogCatQueue2._first).to.be(null);
  });
  let dogCatQueue3 = new DogCatQueue();
  if (`Check if everything works together correctly`, function() {
    for (let i = 0; i < 6; i++) {
      dogCatQueue3.enqueue(`Fluffy${i}`, 'cat');
      dogCatQueue3.enqueue(`Puppy${i}`, 'dog');
    }
    for (let i = 0; i < 2; i++) {
      expect(dogCatQueue3.dequeueCat().value).to.be(`Fluffy${3*i}`);
      expect(dogCatQueue3.dequeueAny()).to.be(`Puppy${3*i}`);
      expect(dogCatQueue3.dequeueDog().value).to.be(`Puppy${3*i+1}`);
      expect(dogCatQueue3.dequeueCat().value).to.be(`Fluffy${3*i+1}`);
      expect(dogCatQueue3.dequeueAny()).to.be(`Fluffy${3*i+2}`);
      expect(dogCatQueue3.dequeueDog().value).to.be(`Puppy${3*i+2}`);
    }
  });
})
