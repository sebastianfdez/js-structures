![JavaScript structures](assets/logo.png)

Structures and solutions for JS algorithm problems

Using NPM and JS
Testing with mocha

```bash
npm install
```

To run tests
```bash
npm test
```

# JS data dtructures implementations
- `Single Linked List` - Single linked list implementation and most used functions [[linkedlist](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/single-linked-list.js)]
- `Double Linked List` - Double linked list implementation [[doublelinkedlist](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/double-linked-list.js)]
- `Queue` - Queue implementation using Double linked list [[queue](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/queue.js)]
- `Stack` - Custom JS Stack implementation [[stack](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/stack.js)]
- `Graph` - JS Graph implementation [[graph](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/graph.js)]
- `Binary Tree` - JS Binary tree implementation using tree nodes [[binarytree](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/binary-tree.js)]
- `Binary Search Tree` - JS Binary search tree (inheritance) [[binarytree](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/binary-search-tree.js)]
- `Min Heap` - JS min heap, using value array [[minheap](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/classes/min-heap.js)]

# JS helpers
- `Autogenerate a balanced binary search tree` - For a given initial value, autogenerate a balanced binary search tree. [[autogenerate](https://github.com/sebastianfdez/js-problems/blob/master/src/shared/functions/generate-auto-tree.js)]

# Algoritms
## BFS
JS implementation
2 Leetcode problems solved
### Problems
- **Flood fill problem** (solved): Paint problem. Given an image represented by a matrix, paint a pixel (src) and all the neightbours of the same color.
- **Shortes path maze** (solved): Find the shortest of all the paths from the origin (0, 0) position to the exit (n -1, n-1) in a squared matrix

## DFS
JS implementation.
4 Leetcode problems solved
### Problems
- **Min tree node difference** (solved): Find the minimum arithmetic difference between any two numbers in a seaerch tree
- **Recover binary tree** (solved): Recover search tree property using DFS
- **Redundant Connection** (solved): Find a cycle in a graph and the last edge that forms part of it 
- **Maximum path sum in binary tree** (solved): Find the path (going through parent-child edges) between 2 nodes that sum the highest.
- **Escape the maze**: In a infinity mae where are some blocked squares, try to connect the origin with the target.

# Data structures
## Linked lists
JS implementation
2 Leetcode problems solved
### Problems
- **Next greater node in linked list** (solved): For every node in a linked list, return the next node higher
- **Linked list inside binary tree** (solved): Given a binary tree (not necessary balanced nor sorted), find if there is a path from up to down that matches a given linked list.
- **Merge k linked list** (solved): Merge in one linked list k linked lists.

## Stacks and Queues
JS implementation
1 Leetcode problem solved
- **Valid Parentheses** (solved): Find if a string like "({[]})" has a valid open close list of parentheses.

# Concepts
## Dynamic Programming
2 Leetcode problem solved
### Problems
- **Cherry pickup** (solved): Take the higher quantity of cherys traveling go and back in a grid.
- **Longest valid Parentheses** (solved): Find the biggest consecutive set of valid parentheses.

## Bit manipulation
2 Leetcode problem solved
### Problems
- **Majority number** (solved): Get the number that is majority in a list.
- **Single number** (solved): Get the number that is unique in a list.
