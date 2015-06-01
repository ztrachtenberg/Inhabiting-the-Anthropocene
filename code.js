$(function(){ // on dom ready

// Defines Nodes and Edges and Their Styles
var cy = cytoscape({
  container: $('#cy')[0],
  
  style: cytoscape.stylesheet()
    .selector('node')
        .css({
            'width': 'data(weight)',
            'height': 'data(weight)',
//            'shape': 'data(faveShape)',
            'text-valign': 'center',
            'border-style': 'solid',
            'border-width': 1,
            'color': 'black',
            'text-outcolor': '#888',
            'font-size': 30,
            'background-color': 'data(color)'
    })
    .selector(':selected')
        .css({
            'content': 'data(name)',
            'text-valign': 'center',
            'text-outline-width': 1,
            'background-color': 'purple',
            'color': 'white',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'text-outcolor': 'black',
            'width': 'data(weight)',
            'height': 'data(weight)'
    })
    .selector('node.hovered')
        .css({
            'content': 'data(name)',
            'text-valign': 'center',
            'text-outline-width': 1,
            'background-color': 'purple',
            'color': 'white',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'z-index': 20,
            'text-outcolor': 'black',
            'width': 'data(weight)',
            'height': 'data(weight)'
    })        
    .selector('edge')
        .css({
            'width': 'data(width)',
            'line-color': 'data(AuthColor)',
            'target-arrow-shape': 'data(Arrow)',
            'target-arrow-color': 'data(AuthColor)'
    })
    
    .selector('.faded')
        .css({
            'opacity': 0.50,
            'text-opacity': 0
    }),
    
  // Call the Nodes and Edges
  elements: BlogEles
    
});

// Layout Options
var circle = {
  name: 'circle',
  fit: true, // whether to fit the viewport to the graph
  padding: 30, // the padding on fit
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
  radius: undefined, // the radius of the circle
  startAngle: 3/2 * Math.PI, // the position of the first node
  counterclockwise: false, // whether the layout should go counterclockwise (true) or clockwise (false)
  sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

var concentric = {
    name: 'concentric',
    concentric: function(){ return this.data('weight'); },
    levelWidth: function( nodes ){ return 5; },
    minNodeSpacing: 30,
    fit: true,
    padding: 10,
    animate: true
  };
var cose = {
    name: 'cose',
    padding: 5,
    nodeRepulsion: 4000000,
    idealEdgeLength: 5,
    nodeOverlap: 100,
    edgeElasticity: 20,
    fit: true,
    animate: true
  };

// Calls Desired Layout  
cy.layout(cose);

// Highlights nodes on hover
cy.on('mouseover', 'node', function(){
	this.addClass('hovered')
});
 cy.on('mouseout', 'node', function(){
	this.removeClass('hovered')
 });

// Links Nodes to the "Content" Div
cy.on('tap', 'node', function(){
    try { // your browser may block popups
        window.open( this.data('href'), 'content' );
    } catch(e){ // fall back on url change
        window.location.href = this.data('href');
    }
});

// Add Faded Class
cy.on('tap', 'node', function (e) {
    var node = e.cyTarget;
    var neighborhood = node.neighborhood().add(node);
    cy.elements().addClass('faded');
    neighborhood.removeClass('faded');
});

// Remove Faded Class
cy.on('tap', function (e) {
    if (e.cyTarget === cy) {
        cy.elements().removeClass('faded');
    }
});

// Sets zoom options
cy.on('layoutstop', function() {
    cy.maxZoom(.5);
    cy.minZoom(.25);
    cy.fit();
});

}); // on dom ready