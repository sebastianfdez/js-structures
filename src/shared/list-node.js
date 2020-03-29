export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Converts array to Linked List
 * 
 * @param {Array} list
 * @return {ListNode}
*/
export var listToLinkedList = function(list) {
  const root = new ListNode(list[0]);
  let node = root;
  for (let i = 1; i < list.length; i++) {
    node.next = new ListNode(list[i]);
    node = node.next;
  }
  return root;
}