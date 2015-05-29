//design notes
//Node size
//--Approach nodes larger
//--Post nodes as now
//Mouse behavior
//--Nodes
//----Approach node: onHover--show name; onClick--go to URL with description
//----Post node: onHover--show name; onClick--go to URL with post
//--Edges: none
//Color scheme
//--Nodes
//----Approach nodes should have 4 different primary colors
//----Post nodes--should have color of primary approach (see edges data below)
//--Edges
//----"primary approach edges" should be same color as respective nodes (linked nodes will be same color as per above
//----"secondary approach edges" should be black


var BlogEles = {
    nodes: [
    //Approach nodes
        { data: { id: 'D', name: 'Descriptive', href: 'http://sma.ztclasses.com/map.html#D', color: '#FFFF00', weight:120 } },
		{ data: { id: 'I', name: 'Interpretive', href: 'http://sma.ztclasses.com/map.html#I', color: '#0000FF', weight:120 } },
		{ data: { id: 'N', name: 'Normative', href: 'http://sma.ztclasses.com/map.html#N', color: '#FF0000', weight:120 } },
		{ data: { id: 'P', name: 'Practical', href: 'http://sma.ztclasses.com/map.html#P', color: '#009933', weight:120 } },
    //Post nodes
        { data: { id: '1', name: 'Of Property', href: 'http://sma.ztclasses.com/post1.html', color: '#FF0000', weight:60 } },
        { data: { id: '4', name: 'Organisms as Ecosystem Engineers', href: 'http://sma.ztclasses.com/post4.html', color: '#FFFF00', weight:60 } },
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
        { data: { id: '36', name: 'The Dust of Civilization', href: 'http://sma.ztclasses.com/post36.html', color: '#FFFF00', weight:60 } }
	],	
    edges: [
    //Primary approach edges
        { data: { source: '1', target: 'N', AuthColor: 'red', width: 5, Arrow: 'none' } },
        { data: { source: '4', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
        { data: { source: '13', target: 'I', AuthColor: 'blue', width: 5, Arrow: 'none' } },
        { data: { source: '14', target: 'P', AuthColor: 'green', width: 5, Arrow: 'none' } },
        { data: { source: '17', target: 'I', AuthColor: 'blue', width: 5, Arrow: 'none' } },
        { data: { source: '18', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
        { data: { source: '22', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
        { data: { source: '23', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
        { data: { source: '25', target: 'N', AuthColor: 'red', width: 5, Arrow: 'none' } },
        { data: { source: '26', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
        { data: { source: '27', target: 'P', AuthColor: 'green', width: 5, Arrow: 'none' } },
        { data: { source: '28', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
        { data: { source: '29', target: 'I', AuthColor: 'blue', width: 5, Arrow: 'none' } },
        { data: { source: '31', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
        { data: { source: '32', target: 'I', AuthColor: 'blue', width: 5, Arrow: 'none' } },
        { data: { source: '36', target: 'D', AuthColor: 'yellow', width: 5, Arrow: 'none' } },
    //Secondary approach edges
        { data: { source: '13', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '14', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '17', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '18', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '22', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '23', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '25', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '26', target: 'P', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '27', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '28', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '29', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '31', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '32', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
        { data: { source: '36', target: 'P', AuthColor: 'black', width: 5, Arrow: 'none' } }

    ]
}