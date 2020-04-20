import { numOf1 } from "../bm-utils";

/**
 * Return number of bits that is need to flip to convert A in B.
 * @param {number} numa 
 * @param {number} numb 
 * @returns {number}
 */
export function convertAtoB(numa, numb) {
    const xor = numa ^ numb;
    return numOf1(xor);
}