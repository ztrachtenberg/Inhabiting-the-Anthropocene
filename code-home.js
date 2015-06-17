$(function(){ // on dom ready

// Defines Nodes and Edges and Their Styles
var cy = cytoscape({
  container: $('#cy')[0],
  
  style: cytoscape.stylesheet()
    .selector('node')
        .css({
            'content': 'data(label)',
            'width': 'data(weight)',
            'height': 'data(weight)',
            'shape': 'data(faveShape)',
            'text-valign': 'center',
            'text-outline-width': 1,
            'background-color': 'data(color)',
            'color': 'white',
            'border-style': 'solid',
            'border-width': 1,
            'text-outcolor': '#888',
            'font-size': 15,
    })
    .selector(':selected')
        .css({
//            'content': 'data(name)', keep view cleaner
            'text-valign': 'center',
            'text-outline-width': 3,
            'font-size': 15,
            'background-color': 'data(color)',
            'color': 'white',
            'z-index': 10,
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'text-outcolor': 'black',
            'width': 'data(weight)',
            'height': 'data(weight)',
            'border-color': 'data(color)',
            'border-width': 0
    })
    .selector('node.hovered')
        .css({
            'content': 'data(name)',
            'text-valign': 'center',
            'text-outline-width': 3,
            'color': 'white',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'z-index': 20,
            'text-outcolor': 'black',
            'width': 'data(weight)',
            'height': 'data(weight)',
            'border-color': 'yellow',
            'border-width': 5
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
            'opacity': .3,
            'text-opacity': 0
    }),
    
  // Call the Nodes and Edges
  elements: BlogEles
    
});

// Layout Options


var arbor = {
    name: 'arbor',
    maxSimulationTime: 5000000,
    repulsion: 20000,
    padding: 10,
//    friction: 0,
    gravity: true,
//    boundingBox: {0, 0, 100, 200},
//    fit: false,
    stiffness: 10000,
    edgeLength: 2,
    infinite: true
}; 

// Calls Desired Layout  
cy.layout(arbor);

// Highlights nodes on hover
cy.on('mouseover', 'node', function(){
	this.addClass('hovered')
});
cy.on('mouseout', 'node', function(){
	this.removeClass('hovered')
 });

// Links Nodes to the "Content" Div
//cy.on('tap', 'node', function(){
//    try { // your browser may block popups
//        window.open( this.data('href'), 'content' );
//    } catch(e){ // fall back on url change
//        window.location.href = this.data('href');
//    }
//});

// Populate Comments Div on Hover Unless Faded
cy.on('mouseover', 'edge', function(){
	if(!this.hasClass('faded')){
		try {
	    	window.open( this.data('href'), 'comments');
		} catch(e){
	    	window.location.href = this.data('href');
		}
	}
});

cy.on('mouseout', 'edge', function(){
	if(!this.hasClass('faded')){
		try {
			window.open('text/legends/authors-by-approach.html', 'comments');
		} catch(e) {
			window.location.href = 'text/legends/authors-by-approach.html';
		}
	}
});

cy.on('mouseover', 'node', function(){
	if(!this.hasClass('faded')){
		try {
	    	window.open( this.data('bio'), 'comments');
		} catch(e){
	    	window.location.href = this.data('bio');
		}
	}
});

cy.on('mouseout', 'node', function(){
	if(!this.hasClass('faded')){
		try {
			window.open('text/legends/authors-by-approach.html', 'comments');
		} catch(e) {
			window.location.href = 'text/legends/authors-by-approach.html';
		}
	}
});

// Add Faded Class
/*
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
*/
// Sets zoom options
cy.on('layoutstop', function() {
    cy.maxZoom(2);
    cy.minZoom(.25);
    cy.fit(10);
});

// Resizes Graph to fit viewport
window.onresize = function() {
    cy.fit(10);
};

}); // on dom ready