var dfs = function(start) {
  var listToExplore = [ start ];
  nodes[ start ].visited = true;
  while ( listToExplore.length > 0 ) {
    var nodeIndex = listToExplore.pop();
    nodes[ nodeIndex ].links.forEach( function( childIndex ) {
      if ( !nodes[ childIndex ].visited ) {
        nodes[ childIndex ].visited = true;
        listToExplore.push( childIndex );
      }
    });
  }
};

// Same logic but with a recursive implementation
// Keep the reference to the last node visited
var dfsRecursive = function(node, last) {
  if (node === null) {
    return Infinity;
  }
  const leftResult = dfsRecursive(node.left, last);
  // Logic of the problem solution after left child
  last = node;
  const rightResult = dfsRecursive(node.right, last);
  // Logic of the problem after exploring right
  return;
}
