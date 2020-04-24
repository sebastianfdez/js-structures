/**
 * Return all the possible permutation of a string of unique characters
 * @param {string} s string to permute
 * @returns {string[]} all possible permutations
 * ```ts
 * allPermutation('abc'); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 * ```
 */
export function allPermutation(s) {
  const mem = {};
  const sorted = s.split('').sort((a, b) => a > b ? 1 : -1).join('');
  const permutations = allPermutationRec(sorted, mem);
  return permutations;
}

/**
 * 
 * @param {string} s  string to permute
 * @param {object} mem
 * @returns {string[]}
 */
function allPermutationRec(s, mem) {
  if (s.length === 1) {
    return [s];
  }
  if (s.length === 2) {
    return [s[0] + s[1], s[1] + s[0]];
  }
  if (mem[s] !== undefined) {
    return mem[s];
  }
  const permutations = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const others = s.substring(0, i) + s.substring(i+1, s.length);
    allPermutationRec(others, mem).map((val) => permutations.push(char + val));
  }
  mem[s] = permutations;
  return mem[s];
}
