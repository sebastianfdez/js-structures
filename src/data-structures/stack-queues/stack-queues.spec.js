import { assert } from 'chai';
import { isValid } from "./valid-parentheses";

describe("Data Structures: Stack and Queues", function() {
  describe("1) Problem: Valid parentheses", function() {
    var tests = [
      { args: "(()", expected: false },
      { args: "{[]}()", expected: true },
      { args: "([)]", expected: false },
      { args: "", expected: true },
      { args: "()", expected: true },
      { args: "((", expected: false },
      { args: "))", expected: false },
    ];
  
    it(`Verify if string is a valid parentheses sucesion. ${tests.length} tests`, function() {
      tests.forEach((test) => {
        var res = isValid(test.args);
        assert.equal(res, test.expected);
      });
    });
  })
});
