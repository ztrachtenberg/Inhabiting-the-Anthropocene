// MOVE AWAY FROM COLOR IN THIS VIEW--WANT TO ASSOCIATE POST NODE COLOR TO THEME COLOR--BUT THAT'S WRONG
// MOVE TO SHAPE, WITH SHADES OF GRAY--OR, FOUR DIFFERENT SHAPES
// FOR EDGES--IDEAL TO HAVE 8 STYLES TO PICK OUT 8 VIEWS--MAYBE 4 SHADES OF GRAY X DOTS AND DASHES?
//GRAY = #bdbdbd


//Design notes
//Node size
//--Theme nodes largest, like Approach nodes in approach_elements
//--Post nodes same as in approach elements
//--View nodes smallest
//Mouse behavior
//--Nodes
//----Theme node: onHover--show name; onClick--go to URL with description
//----View node: onHover--show name; onClick--go to URL with description
//----Post node: onHover--show name; onClick--go to URL with post
//--Edges
//----Theme-view: nothing
//----View-post: nothing
//----Theme-post: onHover--show sentence about respective view (as per Post-view edge data)
//Color scheme
//--Nodes
//----Post nodes: color as per scheme in approach_elements (by author, related to approach)
//----Theme nodes: 4 other  colors, other than those used for approaches
//----View nodes: for each theme, two related but distinct colors (i.e. show that these views related to the theme, but they contrast with each other
//--Edges
//----Theme-post: same color as respective view 
//Color palette
//--Theme colors
//----H: #AF703C
//----Hc: #FFD2AC DOTTED
//----Hr: #874B19 DASHED
//----F: #AFAF3C
//----Fh: #878719 DOTTED
//----Fd: #D9D96E DASHED
//----A: #5B2C75
//----Ax: #42155A DOTTED
//----An: #9B79AF DASHED
//----L: #246969
//----Lp: #0F5151 DOTTED
//----Lm: #6B9E9E DASHED


var BlogEles = {
    nodes: [
	//Theme nodes
	    { data: { id: 'H', label: 'H', name: 'History', href: 'text/main/themes/themes-H.html', color: '#737373', weight:55, faveShape: 'triangle'  } },
		{ data: { id: 'F', label: 'F', name: 'Future', href: 'text/main/themes/themes-F.html', color: '#737373', weight:80, faveShape: 'rectangle'  } },
		{ data: { id: 'A', label: 'A', name: 'Agency', href: 'text/main/themes/themes-A.html', color: '#737373', weight:80, faveShape: 'pentagon'  } },
		{ data: { id: 'L', label: 'L', name: 'Limits', href: 'text/main/themes/themes-L.html', color: '#737373', weight:80, faveShape: 'hexagon'  } }
	]
}