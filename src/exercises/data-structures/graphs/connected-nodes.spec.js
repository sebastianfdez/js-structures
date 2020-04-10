import { assert } from 'chai';
import { makeGraph } from '../../../shared/graph';
import { connectedNodes } from './connected-nodes';

describe("Exercises: (Graphs) connected nodes", function() {
  const graphData = {
    'a': ['b', 'c', 'd'],
    'b': ['e'],
    'c': ['a', 'c', 'd', 'f'],
    'd': ['f', 'd'],
    'e': ['b', 'g'],
    'f': ['e'],
    'g': ['a', 'i'],
    'h': ['b', 'c'],
    'i': ['i', 'e']
  };
  const graph = makeGraph(graphData);
  const testCases = [
    { init: 'a', finish: 'b', expected: true },
    { init: 'a', finish: 'f', expected: true },
    { init: 'f', finish: 'd', expected: true },
    { init: 'h', finish: 'a', expected: true },
    { init: 'a', finish: 'a', expected: true },
    { init: 'h', finish: 'i', expected: true },
    { init: 'i', finish: 'i', expected: true },
  ];
  it(`Return true if nodes are connected: (${testCases.length} tests)`, function() {
    testCases.forEach((test) => {
      const res = connectedNodes(graph, test.init, test.finish);
      assert.equal(res, test.expected);
    });
  });
  const graphData2 = {
    'a': ['b', 'f'],
    'b': ['c'],
    'c': ['d'],
    'd': ['e'],
    'e': ['f'],
    'f': ['e'],
  }
  const graph2 = makeGraph(graphData2);
  const testCases2 = [
    { init: 'a', finish: 'a', expected: false },
    { init: 'b', finish: 'a', expected: false },
    { init: 'b', finish: 'b', expected: false },
    { init: 'f', finish: 'a', expected: false },
    { init: 'd', finish: 'd', expected: false },
  ];
  it(`Return false if nodes are connected: (${testCases2.length} tests)`, function() {
    testCases2.forEach((test) => {
      const res = connectedNodes(graph2, test.init, test.finish);
      assert.equal(res, test.expected);
    });
  });
});
