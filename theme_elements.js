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
//----Post nodes: color as per scheme in approach_elements
//----Theme nodes: 4 other basic colors, other than those used for approaches
//----View nodes: for each theme, two related but distinct colors (i.e. show that these views related to the theme, but they contrast with each other
//--Edges
//----Theme-view: same color as view node
//----View-post: same color as respective theme node
//----Theme-post: same color as respective view node (as per Post-view edge data)


var BlogEles = {
    nodes: [
    //Post nodes
        { data: { id: '1', name: 'Of Property', href: 'http://sma.ztclasses.com/post1.html', color: '#FF0000', weight:60 } },
        { data: { id: '4', name: 'Organisms as Ecosystem Engineers', href: 'http://sma.ztclasses.com/post4', color: '#FFFF00', weight:60 } },
        { data: { id: '13', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'http://sma.ztclasses.com/post13.html', color: '#0000FF', weight:60 } },
        { data: { id: '14', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'http://sma.ztclasses.com/post14.html', color: '#009933', weight:60 } },
        { data: { id: '17', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'http://sma.ztclasses.com/post17.html', color: '#0000FF', weight:60 } },
        { data: { id: '18', name: '"Loess: The Yellow Earth"', href: 'http://sma.ztclasses.com/post18.html', color: '#FFFF00', weight:60 } },
        { data: { id: '22', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'http://sma.ztclasses.com/post22.html', color: '#FFFF00', weight:60 } },
        { data: { id: '23', name: '"A Safe Operating Space for Humanity"', href: 'http://sma.ztclasses.com/post23.html', color: '#FFFF00', weight:60 } },
        { data: { id: '25', name: 'Toward an Ethics of Niche Construction', href: 'http://sma.ztclasses.com/post25.html', color: '#FF0000', weight:60 } },
        { data: { id: '26', name: 'Implications of Manufacturing Habitability', href: 'http://sma.ztclasses.com/post26.html', color: '#FFFF00', weight:60 } },
        { data: { id: '27', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'http://sma.ztclasses.com/post27.html', color: '#009933', weight:60 } },
        { data: { id: '28', name: 'Memes as a Dimension of the Human Niche', href: 'http://sma.ztclasses.com/post28.html', color: '#FFFF00', weight:60 } },
        { data: { id: '29', name: "Habitability's Non-Inevitability", href: 'http://sma.ztclasses.com/post29.html', color: '#0000FF', weight:60 } },
        { data: { id: '31', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'http://sma.ztclasses.com/post31.html', color: '#FFFF00', weight:60 } },
        { data: { id: '32', name: 'Toward a More Than Human Anthropocene', href: 'http://sma.ztclasses.com/post32.html', color: '#0000FF', weight:60 } },
        { data: { id: '36', name: 'The Dust of Civilization', href: 'http://sma.ztclasses.com/post36.html', color: '#FFFF00', weight:60 } },
	//Theme nodes
	    { data: { id: 'H', name: 'History', color: '#9900FF', weight:90 } },
		{ data: { id: 'F', name: 'Future', color: '#996633', weight:90 } },
		{ data: { id: 'A', name: 'Agency', color: '#009999', weight:90 } },
		{ data: { id: 'L', name: 'Limits', color: '#FF99CC', weight:90 } },
	],	
    edges: [
    //Theme 1 edges
        { data: { source: '1', target: 'A', AuthColor: '#006B6B', width: 5, Arrow: 'none' } },
        { data: { source: '4', target: 'A', AuthColor: '#006B6B', width: 5, Arrow: 'none' } },
        { data: { source: '13', target: 'H', AuthColor: '#7A00CC', width: 5, Arrow: 'none' } },
        { data: { source: '14', target: 'L', AuthColor: '#FFB8DB', width: 5, Arrow: 'none' } },
        { data: { source: '17', target: 'A', AuthColor: '#4DB8B8', width: 5, Arrow: 'none' } },
        { data: { source: '18', target: 'H', AuthColor: '#AD33FF', width: 5, Arrow: 'none' } },
        { data: { source: '22', target: 'A', AuthColor: '#006B6B', width: 5, Arrow: 'none' } },
        { data: { source: '23', target: 'L', AuthColor: '#B26B8F', width: 5, Arrow: 'none' } },
        { data: { source: '25', target: 'L', AuthColor: '#FFB8DB', width: 5, Arrow: 'none' } },
        { data: { source: '26', target: 'A', AuthColor: '#006B6B', width: 5, Arrow: 'none' } },
        { data: { source: '27', target: 'L', AuthColor: '#FFB8DB', width: 5, Arrow: 'none' } },
        { data: { source: '28', target: 'A', AuthColor: '#006B6B', width: 5, Arrow: 'none' } },
        { data: { source: '29', target: 'H', AuthColor: '#7A00CC', width: 5, Arrow: 'none' } },
        { data: { source: '31', target: 'F', AuthColor: '#7A5229', width: 5, Arrow: 'none' } },
        { data: { source: '32', target: 'A', AuthColor: '#4DB8B8', width: 5, Arrow: 'none' } },
        { data: { source: '36', target: 'F', AuthColor: '#AD855C', width: 5, Arrow: 'none' } },
    //Theme 2 edges
        { data: { source: '4', target: 'H', AuthColor: '#AD33FF', width: 5, Arrow: 'none' } },
        { data: { source: '14', target: 'H', AuthColor: '#AD33FF', width: 5, Arrow: 'none' } },
        { data: { source: '17', target: 'H', AuthColor: '#7A00CC', width: 5, Arrow: 'none' } },
        { data: { source: '22', target: 'H', AuthColor: '#AD33FF', width: 5, Arrow: 'none' } },
        { data: { source: '23', target: 'F', AuthColor: '#AD855C', width: 5, Arrow: 'none' } },
        { data: { source: '25', target: 'A', AuthColor: '#006B6B', width: 5, Arrow: 'none' } },
        { data: { source: '26', target: 'F', AuthColor: '#AD855C', width: 5, Arrow: 'none' } },
        { data: { source: '27', target: 'F', AuthColor: '#7A5229', width: 5, Arrow: 'none' } },
        { data: { source: '28', target: 'H', AuthColor: '#AD33FF', width: 5, Arrow: 'none' } },
        { data: { source: '29', target: 'F', AuthColor: '#7A5229', width: 5, Arrow: 'none' } },
        { data: { source: '31', target: 'L', AuthColor: '#B26B8F', width: 5, Arrow: 'none' } },
        { data: { source: '32', target: 'L', AuthColor: '#FFB8DB', width: 5, Arrow: 'none' } },
        { data: { source: '36', target: 'A', AuthColor: '#006B6B', width: 5, Arrow: 'none' } }
    ]
}