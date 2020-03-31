/**
* Leetcode problem: https://leetcode.com/problems/cherry-pickup/
*/
/**
 * @param {number[][]} grid Array number that represent the grid
 * @return {number}         Number of cherries thay can be picked up
 */
export var cherryPickup = function(grid) {
  // Memory : O(N^2) 
  // Efficiency: O(N^2)
  // Base cases
  if (grid.length === 1 && (grid[0][0] === -1 || grid[0][0] === 0)) {
    return 0;
  }
  if (grid[grid.length - 1][grid.length - 1] === -1) {
    return 0;
  }
  let mem = {};
  const firstPath = cherryPickupRec(grid, mem, 0, 0, 0, 0);
  if (firstPath < 0) {
    // No possible path
    return 0;
  }
  return firstPath;
};

/**
 * Get the best path between going down or right
 * Using dynamic programming O(N^2) instead of (2^N)
*/
var cherryPickupRec = function(grid, mem, x1, y1, x2, y2) {
  if (x1 >= grid.length || y1 >= grid.length || x2 >= grid.length || y2 >= grid.length) {
    return -1;
  }
  if (grid[y1][x1] === -1 || grid[y2][x2] === -1) {
    return -1;
  }
  if (x1 === grid.length - 1 && x2 === grid.length - 1 && y1 === grid.length - 1 && y2 === grid.length - 1) {
    return grid[y1][x1];
  }
  const hash = Math.pow(grid.length, 3)*y1 +
              Math.pow(grid.length, 2)*x1 +
              Math.pow(grid.length, 1)*y2 +
              x2;
  // Similar case
  const hash2 = Math.pow(grid.length, 3)*y2 +
              Math.pow(grid.length, 2)*x2 +
              Math.pow(grid.length, 1)*y1 +
              x1;
  if (mem[hash] !== undefined) {
    return mem[hash];
  }
  if (mem[hash2] !== undefined) {
    return mem[hash2];
  }
  const picked = Math.max(
      cherryPickupRec(grid, mem, x1 + 1, y1, x2 + 1, y2),
      cherryPickupRec(grid, mem, x1 + 1, y1, x2, y2 + 1),
      cherryPickupRec(grid, mem, x1, y1 + 1, x2 + 1, y2),
      cherryPickupRec(grid, mem, x1, y1 + 1, x2, y2 + 1));
  if (picked < 0) {
    mem[hash] = -1;
    mem[hash2] = -1;
    return -1;
  }
  mem[hash] = picked + ((x1 !== x2 || y1 !== y2) ? grid[y1][x1] + grid[y2][x2] : grid[y1][x1]);
  mem[hash2] = mem[hash2];
  return mem[hash];
}