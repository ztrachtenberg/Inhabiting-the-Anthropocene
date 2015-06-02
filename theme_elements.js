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
    //Post nodes
        { data: { id: '1', label: 'ZT1', name: 'Of Property', href: 'text/post1.html', color: '#8DC162', weight:65, faveShape: 'ellipse' } },
        { data: { id: '4', label: 'KG1', name: 'Organisms as Ecosystem Engineers', href: 'text/post4.html', color: '#FFEAAC', weight:65, faveShape: 'ellipse' } },
        { data: { id: '13', label: 'AR1', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'text/post13.html', color: '#C2627F', weight:65, faveShape: 'ellipse' } },
        { data: { id: '14', label: 'MW1', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'text/post14.html', color: '#585898', weight:65, faveShape: 'ellipse' } },
        { data: { id: '17', label: 'NT1', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'text/post17.html', color: '#791634', weight:65, faveShape: 'ellipse' } },
        { data: { id: '18', label: 'GS1', name: '"Loess: The Yellow Earth"', href: 'text/post18.html', color: '#5C4501', weight:65, faveShape: 'ellipse' } },
        { data: { id: '22', label: 'IS1', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'text/post22.html', color: '#876B19', weight:65, faveShape: 'ellipse' } },
        { data: { id: '23', label: 'AC1', name: '"A Safe Operating Space for Humanity"', href: 'text/post23.html', color: '#D9BE6E', weight:65, faveShape: 'ellipse' } },
        { data: { id: '25', label: 'ZT2', name: 'Toward an Ethics of Niche Construction', href: 'text/post25.html', color: '#8DC162', weight:65, faveShape: 'ellipse' } },
        { data: { id: '26', label: 'KG2', name: 'Implications of Manufacturing Habitability', href: 'text/post26.html', color: '#FFEAAC', weight:65, faveShape: 'ellipse' } },
        { data: { id: '27', label: 'MW2', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'text/post27.html', color: '#585898', weight:65, faveShape: 'ellipse' } },
        { data: { id: '28', label: 'IS2', name: 'Memes as a Dimension of the Human Niche', href: 'text/post28.html', color: '#876B19', weight:65, faveShape: 'ellipse' } },
        { data: { id: '29', label: 'AR2', name: "Habitability's Non-Inevitability", href: 'text/post29.html', color: '#C2627F', weight:65, faveShape: 'ellipse' } },
        { data: { id: '31', label: 'AC2', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'text/post31.html', color: '#D9BE6E', weight:65, faveShape: 'ellipse' } },
        { data: { id: '32', label: 'NT2', name: 'Toward a More Than Human Anthropocene', href: 'text/post32.html', color: '#791634', weight:65, faveShape: 'ellipse' } },
        { data: { id: '36', label: 'GS2', name: 'The Dust of Civilization', href: 'text/post36.html', color: '#5C4501', weight:65, faveShape: 'ellipse' } },
	//Theme nodes
	    { data: { id: 'H', label: 'H', name: 'History', href: 'text/themes.html#H', color: '#737373', weight:45, faveShape: 'triangle'  } },
		{ data: { id: 'F', label: 'F', name: 'Future', href: 'text/themes.html#F', color: '#737373', weight:45, faveShape: 'rectangle'  } },
		{ data: { id: 'A', label: 'A', name: 'Agency', href: 'text/themes.html#A', color: '#737373', weight:45, faveShape: 'pentagon'  } },
		{ data: { id: 'L', label: 'L', name: 'Limits', href: 'text/themes.html#L', color: '#737373', weight:45, faveShape: 'hexagon'  } }
	],	
    edges: [
    //Theme 1 edges
        { data: { source: '1', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } },
        { data: { source: '4', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } },
        { data: { source: '13', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Complex' } },
        { data: { source: '14', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral' } },
        { data: { source: '17', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Entangled' } },
        { data: { source: '18', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction' } },
        { data: { source: '22', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } },
        { data: { source: '23', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Physical' } },
        { data: { source: '25', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral' } },
        { data: { source: '26', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } },
        { data: { source: '27', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral' } },
        { data: { source: '28', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } },
        { data: { source: '29', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Complex' } },
        { data: { source: '31', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Hope' } },
        { data: { source: '32', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Entangled' } },
        { data: { source: '36', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Danger' } },
    //Theme 2 edges
        { data: { source: '4', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction' } },
        { data: { source: '14', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction' } },
        { data: { source: '17', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Complex' } },
        { data: { source: '18', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } },
        { data: { source: '22', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction' } },
        { data: { source: '23', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Danger' } },
        { data: { source: '25', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } },
        { data: { source: '26', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Danger' } },
        { data: { source: '27', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Hope' } },
        { data: { source: '28', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction' } },
        { data: { source: '29', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Hope' } },
        { data: { source: '31', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Physical' } },
        { data: { source: '32', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral' } },
        { data: { source: '36', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional' } }
    //Theme 1 edges COLOR
//        { data: { source: '1', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } },
//        { data: { source: '4', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } },
//        { data: { source: '13', target: 'H', AuthColor: '#FFD2AC', width: 5, Arrow: 'none' } },
//        { data: { source: '14', target: 'L', AuthColor: '#6B9E9E', width: 5, Arrow: 'none' } },
//        { data: { source: '17', target: 'A', AuthColor: '#9B79AF', width: 5, Arrow: 'none' } },
//        { data: { source: '18', target: 'H', AuthColor: '#874B19', width: 5, Arrow: 'none' } },
//        { data: { source: '22', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } },
//        { data: { source: '23', target: 'L', AuthColor: '#0F5151', width: 5, Arrow: 'none' } },
//        { data: { source: '25', target: 'L', AuthColor: '#6B9E9E', width: 5, Arrow: 'none' } },
//        { data: { source: '26', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } },
//        { data: { source: '27', target: 'L', AuthColor: '#6B9E9E', width: 5, Arrow: 'none' } },
//        { data: { source: '28', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } },
//        { data: { source: '29', target: 'H', AuthColor: '#FFD2AC', width: 5, Arrow: 'none' } },
//        { data: { source: '31', target: 'F', AuthColor: '#878719', width: 5, Arrow: 'none' } },
//        { data: { source: '32', target: 'A', AuthColor: '#9B79AF', width: 5, Arrow: 'none' } },
//        { data: { source: '36', target: 'F', AuthColor: '#D9D96E', width: 5, Arrow: 'none' } },
    //Theme 2 edges COLOR
//        { data: { source: '4', target: 'H', AuthColor: '#874B19', width: 5, Arrow: 'none' } },
//        { data: { source: '14', target: 'H', AuthColor: '#874B19', width: 5, Arrow: 'none' } },
//        { data: { source: '17', target: 'H', AuthColor: '#FFD2AC', width: 5, Arrow: 'none' } },
//        { data: { source: '18', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } },
//        { data: { source: '22', target: 'H', AuthColor: '#874B19', width: 5, Arrow: 'none' } },
//        { data: { source: '23', target: 'F', AuthColor: '#D9D96E', width: 5, Arrow: 'none' } },
//        { data: { source: '25', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } },
//        { data: { source: '26', target: 'F', AuthColor: '#D9D96E', width: 5, Arrow: 'none' } },
//        { data: { source: '27', target: 'F', AuthColor: '#878719', width: 5, Arrow: 'none' } },
//        { data: { source: '28', target: 'H', AuthColor: '#874B19', width: 5, Arrow: 'none' } },
//        { data: { source: '29', target: 'F', AuthColor: '#878719', width: 5, Arrow: 'none' } },
//        { data: { source: '31', target: 'L', AuthColor: '#0F5151', width: 5, Arrow: 'none' } },
//        { data: { source: '32', target: 'L', AuthColor: '#6B9E9E', width: 5, Arrow: 'none' } },
//        { data: { source: '36', target: 'A', AuthColor: '#42155A', width: 5, Arrow: 'none' } }
    ]
}