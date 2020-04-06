export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
  * Single linked List
*/
export class LinkedList {
  constructor() {
    /**
    * @type {ListNode} head Head of the linked list.
    * @type {number} size Head of the linked list.
    */
    this.head = null; // first/head/root element
    this.last = null; // first/head/root element
    this.size = 0; // total number of elements in the list
  }
  addLast(value) { // similar Array.push O(N)
    const node = new ListNode(value);
    if (this.head) {
      let currentNode = this.head;
      while(currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.head = node;
    }
    this.last = node;
    return this;
  }
  removeLast() { // Similar to Array.pop() O(N)
    let current = this.head;
    let target;
    if (current && current.next) {
      while(current && current.next && current.next.next) {
        current = current.next;
      }
      target = current.next;
      current.next = null;
      this.last = current;
    } else {
      this.head = null;
      target = current;
    }
    return this;
  }
  /**
  * Adds element to the begining of the list. Similar to Array.unshift
  * Runtime: O(1)
  * @param {any} value
  */
  addFirst(value) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  /**
  * Removes element from the start of the list (head/head). It's Similar `Array.shift`
  * Runtime: O(1)
  */
  removeFirst() {
    const head = this.head;
    if (head) {
      this.head = head.next;
      return this;
    }
  }

  /**
  * Removes element from the certain position.
  * Runtime: O(N)
  * @param {number} position  Position of the node to delete
  * @return {LinkedList}      ListNode that represent the head
  */
  remove(index = 0) {
    if(index === 0) {
      return this.removeFirst();
    }
  
    for (let current = this.head, i = 0; current;  i++, current = current.next) {
      if (i + 1 === index) {
        if (!current.next) { // if it doesn't have next it means that it is the last
          return this.removeLast();
        }
        current.next = current.next.next;
        this.size--;
        return this;
      }
    }
    return this;
  }

  /**
  * Get node in certain position.
  * Runtime: O(N)
  * @param {number} position  Position of the node to delete
  * @return {ListNode}        ListNode that represent the head
  */
  get(index = 0) {
    if (this.size === 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    for (let current = this.head, i = 0; current;  i++, current = current.next) {
      if (i === index) {
        return current;
      }
    }
  }
}

/**
 * Converts array to Linked List (only nodes)
 * 
 * @param {Array} list  List of numbers
 * @return {ListNode}   ListNode that represent the head
*/
export var listToLinkedListNode = function(list) {
  const head = new ListNode(list[0]);
  let node = head;
  for (let i = 1; i < list.length; i++) {
    node.next = new ListNode(list[i]);
    node = node.next;
  }
  return head;
}

/**
 * Converts array to Linked List
 * 
 * @param {number[]} list  List of numbers
 * @return {LinkedList}   ListNode that represent the head
*/
export var listToLinkedList = function(list) {
  const linkedList = new LinkedList();
  if (!list || list.length === 0) {
    return linkedList;
  }
  linkedList.head = new ListNode(list[0]);
  let node = linkedList.head;
  for (let i = 1; i < list.length; i++) {
    node.next = new ListNode(list[i]);
    linkedList.last = node.next;
    node = node.next;
  }
  linkedList.size = list.length;
  return linkedList;
}

/**
 * Converts Linked List to array
 * 
 * @param {LinkedList} linkedList  LinkedList that contains the head
 * @return {number[]}              List of numbers
*/
export var linkedListtoList = function(linkedList) {
  const list = [];
  let node = linkedList.head;
  while (node && node.val) {
    list.push(node.val);
    node = node.next;
  }
  return list.length ? list : null;
}

/**
 * Converts Linked List (node) to array
 * 
 * @param {ListNode} listNode  ListNode that represent the head
 * @return {number[]}            List of numbers
*/
export var nodeListtoList = function(listNode) {
  const list = [];
  let node = listNode;
  while (node && node.val) {
    list.push(node.val);
    node = node.next;
  }
  return list.length ? list : null;
}