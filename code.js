// Cytoscape
$(function(){ // on dom ready

// Defines Nodes and Edges and Their Styles
var cy = cytoscape({
  container: $('#cy')[0],
  userPanningEnabled: false,
  userZoomingEnabled: false,
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
            'border-color': 'black',
            'text-outcolor': '#888',
            'font-size': 25,
    })
    .selector(':selected')
        .css({
//            'content': 'data(name)', keep view cleaner
            'text-valign': 'center',
            'text-outline-width': 3,
            'font-size': 20,
            'background-color': 'data(color)',
            'color': 'white',
            'z-index': 10,
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'text-outcolor': 'black',
            'width': 'data(weight)',
            'height': 'data(weight)',
            'border-color': 'yellow',
            'border-width': 5
    })
    .selector('node.clicked')
        .css({
            'text-valign': 'center',
            'text-outline-width': 3,
            'font-size': 20,
            'background-color': 'data(color)',
            'color': 'white',
            'z-index': 10,
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'text-outcolor': 'black',
            'width': 'data(weight)',
            'height': 'data(weight)',
            'border-color': 'yellow',
            'border-width': 4
    })
    .selector('$node > node')
        .css({
            'color': 'black',
            'font-size': 20,
            'padding-top': '10px',
            'padding-left': '10px',
            'padding-bottom': '10px',
            'padding-right': '10px',
            'text-valign': 'top',
            'text-halign': 'center',
            'z-index': 1000,
            'height': 175,
            'width': 100
    })            
    .selector('node.hovered')
        .css({
            'content': 'data(name)',
            'text-valign': 'center',
            'text-outline-width': 3,
            'font-size': 20,
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
            'line-style': 'data(style)',
            'target-arrow-shape': 'data(Arrow)',
            'target-arrow-color': 'data(AuthColor)'
    })
    .selector('edge.hovered')
        .css({
            'content': 'data(comment)',
            'text-valign': 'center',
            'text-outline-width': 3,
            'color': 'white',
            'font-size': 25,
            'text-outcolor': 'black',
			'width': 'data(width)',
            'line-color': 'data(AuthColor)',
            'line-style': 'data(style)',
            'target-arrow-shape': 'data(Arrow)'    
    })      
    .selector('.faded')
        .css({
            'opacity': .3,
            'text-opacity': 0
    })
    .selector('.invisible')
        .css({
            'opacity': 0,
            'text-opacity': 0
    })    
    .selector('node.triggered')
        .css({
            'background-color': 'red',
            'font-size': 25,
            'border-color': 'black',
            'border-width': 1
    })
    .selector('node.untriggered')
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
            'border-color': 'black',
            'border-width': 1,
            'text-outcolor': '#888',
            'font-size': 25,
    }),
    
// Call the Nodes and Edges
    elements: BlogEles    
});

// Layout Options

var chrono = {
  name: 'grid',
  fit: true, // whether to fit the viewport to the graph
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  rows: 4, // force num of rows in the grid
  columns: 4, // force num of cols in the grid
  animate: true, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
};

	var home = {
		name: 'springy',
		random: true,
		animate: false,
		fit: true,
		maxSimulationTime: 10000,
		infinite: false,
		stiffness: 200,
  		repulsion: 200,
  		damping: .1
	};
    
    var springy = {
    	name: 'springy',
    	fit: true,
    	animate: true,
    	random: true,
    	maxSimulationTime: 10000,
    	stiffness: 400,
  		repulsion: 800,
  		damping: .1
    	};

var home1 = {
    name: 'arbor',
//    maxSimulationTime: 5000000,
    repulsion: 200,
    padding: 10,
//    friction: 0,
    gravity: true,
//    boundingBox: {0, 0, 100, 200},
    fit: false,
    stiffness: 10000,
    edgeLength: 2,
//	nodeMass: function(n){ return n.data('weight') },
//    infinite: true
};
var cose = {
    name: 'cose',
    padding: 5,
    nodeRepulsion: 8000000,
    idealEdgeLength: 10,
    nodeOverlap: 100,
    edgeElasticity: 50,
    fit: true,
//    numIter: 10000,
    animate: true
  };
var arbor = {
    name: 'arbor',
    maxSimulationTime: 10000,
    gravity: true,
    repulsion: 200,
    padding: 10,
    stiffness: 80,
    fit: true,
    edgeLength: .5,
//	nodeMass: function(n){ return n.data('weight') },
    infinite: false
};  

// Calls Desired Layout for all but filter elements
function CallLayouts(){
    cy.elements("[filter!='yes']").layout(springy);
    cy.elements("[home='yes']").layout(home);
    cy.elements("[chrono='yes']").layout(chrono);
};

CallLayouts();

// Highlights Nodes and Shows Bio in "Comments" Div on hover
cy.on('mouseover', 'node', function(){
    if (this.data('filter')!='yes' && !this.hasClass('faded')){
	    this.addClass('hovered')
	    try {
	    	window.open( this.data('bio'), 'comments');
		} catch(e){
	    	window.location.href = this.data('bio');
		}
	}
});
// Removes Highlight and Return to default content of "Comments" Div on mouseout unless Node is Selected
/* cy.on('mouseout', 'node', function(){
	if(!this.hasClass(':selected')){
		this.removeClass('hovered')
	}; */

cy.on('mouseout', 'node', function(){
	
		this.removeClass('hovered')
	;
	if(this.data('filter')!='yes' && !this.hasClass('faded') && !this.hasClass(':selected')){
        document.getElementById('comments').src = document.getElementById('comments').src
	}
 });

// Show edge comment on hover
cy.on('mouseover', 'edge', function(){
	if(!this.hasClass('faded')){
		this.addClass('hovered')
	}
});
// Removes comment on mouseout
cy.on('mouseout', 'edge', function(){
	this.removeClass('hovered')
 });

// Links Nodes to the "Content" and "Comments" Divs, adds highlight (useful for the random node selector)
cy.on('tap select', 'node', function(){
	if (this.data('filter')!='yes' && this.data('home')!='yes') {
	    cy.elements().removeClass('clicked');
		if (this.data('home')!='yes'){
    		try { // your browser may block popups
        		window.open( this.data('href'), 'content' );
				window.open( this.data('bio'), 'comments' ); // trying to show bio in comment box
    		} catch(e){ // fall back on url change
        		window.location.href = this.data('href');
				window.location.href = this.data('bio'); //trying to show bio in comment box
    		}
    	}
    }
});

// Add Faded Class to Unselected Elements
cy.on('tap select', 'node', function (e) {
    // Only adds faded class if this isn't a filter node
    if (this.data('filter') != 'yes' && this.data('home')!='yes' && this.data('chrono') != 'yes'){
        var node = e.cyTarget;
        var neighborhood = node.neighborhood().add(node);
        cy.elements("[filter!='yes']").addClass('faded');
        neighborhood.removeClass('faded');
        node.addClass('clicked');
    }
});

// Fit view to selection
 cy.on('tap select', 'node', function (e) {
    // Only adds faded class if this isn't a filter node
    if (this.data('filter') != 'yes' && this.data('home')!='yes' && this.data('chrono') != 'yes'){
        this.addClass('clicked');
        var node = e.cyTarget;
        var neighborhood = node.neighborhood().add(node);
        cy.fit(neighborhood, 10);
    }
});

// Removes Faded and Hovered/Selected Classes and Resets Content and Comments iframes when you click on background
cy.on('tap', function (e) {
    if (e.cyTarget === cy) {
        cy.elements().removeClass('faded');
//        cy.elements().removeClass('hovered');
//        document.getElementById('comments').src = document.getElementById('comments').src
//        document.getElementById('content').src = document.getElementById('content').src
        cy.fit(10);
    }
});

// Populate Comments Div on Edge Hover Unless Faded
cy.on('mouseover', 'edge', function(){
	if(!this.hasClass('faded')){
		try {
	    	window.open( this.data('href'), 'comments');
		} catch(e){
	    	window.location.href = this.data('href');
		}
	}
});
// Add 'selected' class to edges on tap
cy.on('tap', 'edge', function() {
    this.addClass(':selected')
});
// Return to default content of "Comments" Div on mouseout unless Edge is Selected
cy.on('mouseout', 'edge', function(){
	if(!this.hasClass('faded') && !this.hasClass(':selected')){
		try {
			window.open('text/legends/authors-by-approach.html', 'comments');
		} catch(e) {
			window.location.href = 'text/legends/authors-by-approach.html';
		}
	}
});

// Filter and Random Node Selector Functions
cy.on('tap', 'node', function () {
    if (!this.hasClass('triggered') && this.data('name') == 'Similar'){
        this.removeClass('untriggered');
        this.addClass('triggered');
        cy.filter(function(i, element){
            if (element.isEdge() && (element.data("comment") == 'Similar')){
                element.addClass('invisible');
            }
        })
    } else if (this.hasClass('triggered') && this.data('name') == 'Similar'){   
        this.removeClass('triggered');
        this.addClass('untriggered'); 
        cy.filter(function(i, element){
            if (element.isEdge() && (element.data("comment") == 'Similar')){
                element.removeClass('invisible');
            }
        })
    } else if (!this.hasClass('triggered') && this.data('name') == 'Different'){
        this.removeClass('untriggered');
        this.addClass('triggered');
        cy.filter(function(i, element){
            if (element.isEdge() && (element.data("comment") == 'Different')){
                element.addClass('invisible');
            }
        })
    } else if (this.hasClass('triggered') && this.data('name') == 'Different'){   
        this.removeClass('triggered');
        this.addClass('untriggered');  
        cy.filter(function(i, element){
            if (element.isEdge() && (element.data("comment") == 'Different')){
                element.removeClass('invisible');
            }
        })
    } else if (!this.hasClass('triggered') && this.data('name') == 'Same author'){
        this.removeClass('untriggered');
        this.addClass('triggered');
        cy.filter(function(i, element){
            if (element.isEdge() && (element.data("comment") == 'Same author')){
                element.addClass('invisible');
            }
        })
    } else if (this.hasClass('triggered') && this.data('name') == 'Same author'){   
        this.removeClass('triggered'); 
         this.addClass('untriggered'); 
        cy.filter(function(i, element){
            if (element.isEdge() && (element.data("comment") == 'Same author')){
                element.removeClass('invisible');
            }
        })
    } 
});

// Sets zoom and fit options
cy.on('layoutstop', function() {
//    cy.maxZoom(1.5);
//    cy.minZoom(.5);
//    cy.fit(10);
});

// Resizes graph to viewport on window resize
window.onresize = function() {
    cy.fit(10);
};

}); // on dom ready

function RedrawGraph() {
    var cy = $('#cy').cytoscape('get');
    var chrono = {
    name: 'grid',
    fit: true, // whether to fit the viewport to the graph
    avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    rows: 4, // force num of rows in the grid
    columns: 4, // force num of cols in the grid
    animate: true, // whether to transition the node positions
    animationDuration: 1000, // duration of animation in ms if enabled
    };
    var home1 = {
        name: 'arbor',
//        maxSimulationTime: 5000000,
        repulsion: 200,
        padding: 10,
//      friction: 0,
        gravity: true,
//      boundingBox: {0, 0, 100, 200},
        fit: false,
        stiffness: 10000,
        edgeLength: 2,
//	    nodeMass: function(n){ return n.data('weight') },
//        infinite: true
    };

	var home = {
		name: 'springy',
		random: true,
		animate: false,
		fit: true,
		maxSimulationTime: 10000,
		infinite: false,
		stiffness: 400,
  		repulsion: 800,
  		damping: .1
	};
    
    var springy = {
    	name: 'springy',
    	fit: true,
    	animate: true,
    	random: true,
    	maxSimulationTime: 1000,
    	stiffness: 400,
  		repulsion: 800,
  		damping: .1
    	};
    
    var cose = {
        name: 'cose',
        padding: 5,
        nodeRepulsion: 8000000,
        idealEdgeLength: 10,
        nodeOverlap: 100,
        edgeElasticity: 50,
        fit: true,
//      numIter: 10000,
        animate: true
    };
    var arbor = {
        name: 'arbor',
        maxSimulationTime: 10000,
        gravity: true,
        repulsion: 200,
        padding: 10,
        stiffness: 800,
        fit: true,
        edgeLength: .5,
//	    nodeMass: function(n){ return n.data('weight') },
        infinite: false
    };
    cy.nodes().unselect();
    cy.elements().removeClass('faded');
    cy.elements().removeClass('clicked');
    cy.elements("[filter!='yes']").layout(springy);
    cy.elements("[home='yes']").layout(home);
    cy.elements("[chrono='yes']").layout(chrono);
    document.getElementById('comments').src = document.getElementById('comments').src
  	document.getElementById('content').src = document.getElementById('content').src
};

function SelectRandom() {
    var cy = $('#cy').cytoscape('get');
    var random = cy.nodes("[filter!='yes'][weight=55]")[ Math.floor(Math.random() * cy.nodes().length) ];
    cy.nodes().unselect();
    random.select();
};