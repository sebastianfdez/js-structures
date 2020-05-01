/**
 * Return how many possible way there are to run up a stair, doing 1, 2 or 3 
 * steps at the same time. O(N)
 * @param {number} steps 
 * @returns {number}
 */
export function possibleWaysToRunUp(steps) {
  if (steps < 1) {
    return 0;
  }
  const mem = [1,2,4];
  return possibleWaysRec(steps, mem);
}

function possibleWaysRec(n, mem) {
  if (n === 1 || n == 2) {
    // For 1 step, there is just one way: 1
    // For 2 steps, there is 2 ways: 1 and 1, or 2
    return mem[n-1];
  }
  if (n === 3) {
    // For 3 steps, possible ways are:
    // (3), (2,1), (1,2), (1,1,1)
    return mem[2];
  }
  if (mem[n-1] !== undefined) {
    // Check the memory
    return mem[n-1];
  }
  // Sum al the 3 possibilities
  const ways = possibleWaysRec(n-3, mem) + possibleWaysRec(n-2, mem) + possibleWaysRec(n-1, mem);
  mem[n-1] = ways;
  return mem[n-1];
}
