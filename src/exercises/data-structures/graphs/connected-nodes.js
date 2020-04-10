import { GraphNode, Graph } from "../../../shared/classes/graph";
import { Queue } from "../../../shared/classes/queue";

/**
 * Return true if node a and b are connected in a provided graph. BFS
 * @param {Graph} graph
 * @param {string} init first node value
 * @param {string} final second node value
 * @return {boolean}
 */
export function connectedNodes(graph, init, final) {
  const nodei = graph.nodes.find((n) => n.value === init);
  if (!nodei) {
    return false;
  }
  const queue = new Queue();
  const visited = {};
  queue.add(nodei);
  let temp = new GraphNode();
  while (queue.size) {
    temp = queue.remove();
    for (let i = 0; i < temp.neighbours.length; i++) {
      if (temp.neighbours[i].value === final) {
        return true;
      }
      if (visited[temp.neighbours[i].value] !== true) {
        visited[temp.value] = true;
        queue.add(temp.neighbours[i]);
      }
    };
  }
  return false;
}
