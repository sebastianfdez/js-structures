export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Converts array to Tree Node
 * 
 * @param {Array} list
 * @return {TreeNode}
*/
export var listToTree = function(list) {
  const root = new TreeNode(list[1]);
  appendChildsRec(root, list, 1);
  return root;
}

var appendChildsRec = function(node, list, pos) {
  if (2*pos < list.length) {
    node.left = new TreeNode(list[2*pos]);
    appendChildsRec(node.left, list, 2*pos);
  }
  if (2*pos + 1 < list.length) {
    node.right = new TreeNode(list[2*pos + 1]);
    appendChildsRec(node.right, list, 2*pos + 1);
  }
}