export class GraphNode {
  /**
   * @param {string} value Value of the node
   * @param {GraphNode[]} neighbours List of neighbours references
   */
  constructor(value, neighbours) {
    this.value = value;
    this.neighbours = neighbours;
  }
}

export class Graph {
  /**
   * Object containing a reference to all of the nodes
   * @param {GraphNode[]} nodes List of all nodes in the graph 
   */
  constructor(nodes) {
    this.nodes = nodes;
  }
}

/**
 * Create a Graph from a provided map:
 * {
 *    a: [b,c,d],
 *    b: [a,d],
 *    c: [a],
 *    d: [c],
 * }
 * @param { Object.<string, string[]> } graphMap Map of the nodes and neighbours
 */
export function makeGraph(graphMap) {
  // Create empty graph
  const graph = new Graph([]);
  Object.keys(graphMap).forEach((key) => {
    // For every key, create a new node if it's doesn't exists
    let node = graph.nodes.find(n => n.value === key);
    if (!node) {
      node = new GraphNode(key, []);
      graph.nodes.push(node);
    }
    // Add every neighbour to the list
    graphMap[key].forEach((neighbour) => {
      let neighbour_ = graph.nodes.find(n => n.value === neighbour);
      if (!neighbour_) {
        neighbour_ = new GraphNode(neighbour, []);
        graph.nodes.push(neighbour_);
      }
      node.neighbours.push(neighbour_);
    })
  });
  return graph;
}
