import { BinaryTree, BinaryTreeNode } from "../../../shared/classes/binary-tree";

/**
 * Find all the paths in the tree that sums the given number
 * @param {BinaryTree} tree 
 * @param {number} target 
 * @return {number}
 */
export function findSumPaths(tree, target) {
  /** @type {Map<number, number[]} */
  let mem = new Map();
  return getAllPossibleSumsWithNode(tree.root, mem, target);
}

/**
 * Get all possible sums between given node and all possible lines going down
 * @param {BinaryTreeNode} node actual node
 * @param {Map<number, number[]>} mem map between node and all possible sums
 * @param {number} numb target number
 * @returns {number}
 */
function getAllPossibleSumsWithNode(node, mem, numb) {
  if (!node) {
    return 0;
  }
  let allSumWithNode = 0
  if (node.value === numb) {
    allSumWithNode++;
  }
  const oneLinePathsLeft = findAllPossibleSumsOneLineDown(node.left, mem, 0).sort((a, b) => a - b);
  const oneLinePathsRight = findAllPossibleSumsOneLineDown(node.right, mem, 0).sort((a, b) => a - b);
  allSumWithNode += findAllCombination(oneLinePathsLeft, oneLinePathsRight, numb - node.value);
  allSumWithNode += getAllPossibleSumsWithNode(node.left, mem, numb);
  allSumWithNode += getAllPossibleSumsWithNode(node.right, mem, numb);
  // Find all combination between somesumleft + actual + somesumright
  return allSumWithNode;
}

/**
 * Get all possible sum considering one line going down
 * @param {BinaryTreeNode} node actual node
 * @param {Map<number, number[]>} mem map between node and all possible sums
 * @param {number} acum actual acumulated value
 * @returns {number[]}
 */
function findAllPossibleSumsOneLineDown(node, mem, acum) {
  if (!node) {
    return [];
  }
  if (mem[node.value]) {
    return mem[node.value];
  }
  /** @type {number[]} */
  let allSums = [];
  allSums = allSums.concat(findAllPossibleSumsOneLineDown(node.left, mem, node.value));
  allSums = allSums.concat(findAllPossibleSumsOneLineDown(node.right, mem, node.value));
  allSums = allSums.map(n => n + node.value);
  allSums.push(node.value);
  mem[node.value] = allSums;
  return mem[node.value];
}

/**
 * Return how many combination of number from two sorted arrays sums the target
 * O()
 * @param {number[]} list1 
 * @param {number[]} list2 
 * @param {number} target 
 */
function findAllCombination(list1, list2, target) {
  let count = 0;
  let temp1 = 0;
  let temp2 = list2.length - 1;
  if (list1.includes(target)) {
    count++;
  }
  if (list2.includes(target)) {
    count++;
  }
  while (temp1 < list1.length && temp2 >= 0) {
    const sum = list1[temp1] + list2[temp2];
    if (sum === target) {
      count++;
      temp1++;
      temp2--;
    } else if (sum < target) {
      temp1++;
    } else {
      temp2--;
    }
  }
  return count;
}
