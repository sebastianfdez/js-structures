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
