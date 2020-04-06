/**
 * DoubleListNode with a reference to the previous and next animal of the same type
 */
export class AnimalNode {
  constructor(value, type) {
    /** @type {string} name of the animal */
    this.value = value;
    /** @type {'cat' | 'dog'} type of animal */
    this.type = type;
    /** @type {AnimalNode} nextAnimal Next node of the same type */
    this.nextAnimal = null;
    /** @type {AnimalNode} previousAnimal Previous node of the same type */
    this.previousAnimal = null;
    /** @type {AnimalNode} Next node */
    this.next = null;
    /** @type {AnimalNode} Previous node */
    this.previous = null;
  }
}

export class DogCatQueue {
  constructor() {
    /** @type {AnimalNode} firstDog first node of type dog */
    this._firstDog = null;
    /** @type {AnimalNode} firstCat first node of type cat */
    this._firstCat = null;
    /** @type {AnimalNode} lastDog last node of type dog */
    this._lastDog = null;
    /** @type {AnimalNode} lastCat last node of type cat */
    this._lastCat = null;
    /** @type {AnimalNode} first node */
    this._first = null;
    /** @type {AnimalNode} last node */
    this._last = null;
    this.dogs = 0;
    this.cats = 0;
  }

  /**
   * Add animal to the beginning of the Queue.
   * @param {string} animal name or id of the animal
   * @param {'cat' | 'dog'} type type of the animal 'cat' or 'dog'
   */
  enqueue(animal, type) {
    const newAnimal = new AnimalNode(animal, type);
    // Link with the first animal of its type
    switch(newAnimal.type) {
      case 'cat':
        if (this.cats === 0) {
          this._lastCat = newAnimal;
        } else if (this.cats === 1) {
          this._lastCat.previousAnimal = newAnimal;
          newAnimal.nextAnimal = this._lastCat;
        } else {
          this._firstCat.previousAnimal = newAnimal;
          newAnimal.nextAnimal = this._firstCat;
        }
        this._firstCat = newAnimal;
        this.cats++;
        break;
      case 'dog':
        if (this.dogs === 0) {
          this._lastDog = newAnimal;
        } else if (this.dogs === 1) {
          this._lastDog.previousAnimal = newAnimal;
          newAnimal.nextAnimal = this._lastDog;
        } else {
          this._firstDog.previousAnimal = newAnimal;
          newAnimal.nextAnimal = this._firstDog;
        }
        this._firstDog = newAnimal;
        this.dogs++;
        break;
    }
    // Link with the first node
    if (!this._first) {
      this._last = newAnimal;
    } else {
      newAnimal.next = this._first;
      this._first.previous = newAnimal;
    }
    this._first = newAnimal;
    return this;
  }
  /**
   * Return first animal of the queue.
   * @return { AnimalNode } Animal object
  */
  dequeueAny() {
    if (!this._last) {
      return null;
    }
    const animal = this._last;
    // Update last animal of its type
    switch(animal.type) {
      case 'cat':
        this._lastCat = animal.previousAnimal;
        if (!this._lastCat) {
          this._firstCat = null;
        } else {
          this._lastCat.nextAnimal = null;
        }
        this.cats--;
        break;
      case 'dog':
        this._lastDog = animal.previousAnimal;
        if (!this._lastDog) {
          this._firstDog = null;
        } else {
          this._lastDog.nextAnimal = null;
        }
        this.dogs--;
        break;
    }
    // Update last node
    this._last = this._last.previous;
    if (!this._last) {
      this._first = null;
    } else {
      this._last.next = null;
    }
    return animal;
  }
  /**
   * Return first dog of the queue.
   * @returns { AnimalNode } first dog of the queue
   */
  dequeueDog() {
    if (this.dogs === 0) {
      return null;
    }
    if (this._last.type === 'dog') {
      return this.dequeueAny();
    }
    const lastDog = this._lastDog;
    // Update last dog
    if (this.dogs === 1) {
      this._firstDog = null;
      this._lastDog = null;
    } else {
      this._lastDog = lastDog.previousAnimal;
      this._lastDog.nextAnimal = null;
    }
    // Update node
    if (lastDog.previous) {
      lastDog.previous.next = lastDog.next;
    } else {
      this._first = lastDog.next;
    }
    if (lastDog.next) {
      lastDog.next.previous = lastDog.previous;
    } else {
      this._last = lastDog.previous;
    }
    this.dogs--;
    return lastDog;
  }
  /**
   * Return first cat of the queue.
   * @returns { AnimalNode } first cat of the queue
   */
  dequeueCat() {
    if (this.cats === 0) {
      return null;
    }
    if (this._last.type === 'cat') {
      return this.dequeueAny();
    }
    const lastCat = this._lastCat;
    // Update last cat
    if (this.cats === 1) {
      this._firstCat = null;
      this._lastCat = null;
    } else {
      this._lastCat = lastCat.previousAnimal;
      this._lastCat.nextAnimal = null;
    }
    // Update node
    if (lastCat.previous) {
      lastCat.previous.next = lastCat.next;
    } else {
      this._first = lastCat.next;
    }
    if (lastCat.next) {
      lastCat.next.previous = lastCat.previous;
    } else {
      this._last = lastCat.previous;
    }
    this.cats--;
    return lastCat;
  }
}
