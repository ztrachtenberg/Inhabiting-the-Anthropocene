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
        { data: { id: 'ZT1', label: 'ZT1', name: 'Of Property', href: 'text/posts/ZT1.html', color: '#8DC162', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'KG1', label: 'KG1', name: 'Organisms as Ecosystem Engineers', href: 'text/posts/KG1.html', color: '#FFEAAC', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AR1', label: 'AR1', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'text/posts/AR1.html', color: '#C2627F', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'MW1', label: 'MW1', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'text/posts/MW1.html', color: '#585898', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'NT1', label: 'NT1', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'text/posts/NT1.html', color: '#791634', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'LS1', label: 'LS1', name: '"Loess: The Yellow Earth"', href: 'text/posts/LS1.html', color: '#5C4501', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'IS1', label: 'IS1', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'text/posts/IS1.html', color: '#876B19', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AC1', label: 'AC1', name: '"A Safe Operating Space for Humanity"', href: 'text/posts/AC1.html', color: '#D9BE6E', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'ZT2', label: 'ZT2', name: 'Toward an Ethics of Niche Construction', href: 'text/posts/ZT2.html', color: '#8DC162', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'KG2', label: 'KG2', name: 'Implications of Manufacturing Habitability', href: 'text/posts/KG2.html', color: '#FFEAAC', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'MW2', label: 'MW2', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'text/posts/MW2.html', color: '#585898', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'IS2', label: 'IS2', name: 'Memes as a Dimension of the Human Niche', href: 'text/posts/IS2.html', color: '#876B19', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AR2', label: 'AR2', name: "Habitability's Non-Inevitability", href: 'text/posts/AR2.html', color: '#C2627F', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AC2', label: 'AC2', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'text/posts/AC2.html', color: '#D9BE6E', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'NT2', label: 'NT2', name: 'Toward a More Than Human Anthropocene', href: 'text/posts/NT2.html', color: '#791634', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'LS2', label: 'LS2', name: 'The Dust of Civilization', href: 'text/posts/LS2.html', color: '#5C4501', weight:65, faveShape: 'ellipse' } }
	//Theme nodes
	    { data: { id: 'H', label: 'H', name: 'History', href: 'text/main/themes/themes-H.html', color: '#737373', weight:45, faveShape: 'triangle'  } },
		{ data: { id: 'F', label: 'F', name: 'Future', href: 'text/main/themes/themes-F.html', color: '#737373', weight:45, faveShape: 'rectangle'  } },
		{ data: { id: 'A', label: 'A', name: 'Agency', href: 'text/main/themes/themes-A.html', color: '#737373', weight:45, faveShape: 'pentagon'  } },
		{ data: { id: 'L', label: 'L', name: 'Limits', href: 'text/main/themes/themes-L.html', color: '#737373', weight:45, faveShape: 'hexagon'  } }
	],	
    
    edges: [
    //Theme 1 edges
        { data: { source: 'ZT1', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } },
        { data: { source: 'KG1', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } },
        { data: { source: 'AR1', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Complex', href: 'text/edges/themes/Hc.html' } },
        { data: { source: 'MW1', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral', href: 'text/edges/themes/Lm.html' } },
        { data: { source: 'NT1', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Entangled', href: 'text/edges/themes/An.html' } },
        { data: { source: 'LS1', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction', href: 'text/edges/themes/Hr.html' } },
        { data: { source: 'IS1', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } },
        { data: { source: 'AC1', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Physical', href: 'text/edges/themes/Lp.html' } },
        { data: { source: 'ZT2', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral', href: 'text/edges/themes/Lm.html' } },
        { data: { source: 'KG2', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } },
        { data: { source: 'MW2', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral', href: 'text/edges/themes/Lm.html' } },
        { data: { source: 'IS2', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } },
        { data: { source: 'AR2', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Complex', href: 'text/edges/themes/Hc.html' } },
        { data: { source: 'AC2', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Hope', href: 'text/edges/themes/Fh.html' } },
        { data: { source: 'NT2', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Entangled', href: 'text/edges/themes/An.html' } },
        { data: { source: 'LS2', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Danger', href: 'text/edges/themes/Fd.html' } },
    //Theme 2 edges
        { data: { source: 'KG1', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction', href: 'text/edges/themes/Hr.html' } },
        { data: { source: 'MW1', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction', href: 'text/edges/themes/Hr.html' } },
        { data: { source: 'NT1', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Complex', href: 'text/edges/themes/Hc.html' } },
        { data: { source: 'LS1', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } },
        { data: { source: 'IS1', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction', href: 'text/edges/themes/Hr.html' } },
        { data: { source: 'AC1', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Danger', href: 'text/edges/themes/Fd.html' } },
        { data: { source: 'ZT2', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } },
        { data: { source: 'KG2', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Danger', href: 'text/edges/themes/Fd.html' } },
        { data: { source: 'MW2', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Hope', href: 'text/edges/themes/Fh.html' } },
        { data: { source: 'IS2', target: 'H', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Reduction', href: 'text/edges/themes/Hr.html' } },
        { data: { source: 'AR2', target: 'F', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Hope', href: 'text/edges/themes/Fh.html' } },
        { data: { source: 'AC2', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Physical', href: 'text/edges/themes/Lp.html' } },
        { data: { source: 'NT2', target: 'L', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dashed', comment: 'Moral', href: 'text/edges/themes/Lm.html' } },
        { data: { source: 'LS2', target: 'A', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'dotted', comment: 'Exceptional', href: 'text/edges/themes/Ax.html' } }
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