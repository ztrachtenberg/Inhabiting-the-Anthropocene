//design notes
//Node size: as now
//--Author nodes largest, like Approach nodes in approach_elements; have name visible
//--Post nodes same as in approach elements
//Mouse behavior
//--Post nodes: onHover--show title; onClick--go to URL with post
//--Author nodes: onClick--go to URL with bio
//--Edges: none
//Color scheme
//--Nodes
//----Author nodes: should have color of primary approach (from approach_elements)
//----Post nodes: reading posts another basic color; reflection posts a second other basic color
//--Edges: 
//----Author-author edges: black
//----Author-post edges: same color as type of post (i.e. reading or reflection)


var BlogEles = {
    nodes: [
    //Post nodes
    //--Reading posts (all have same color)
        { data: { id: '1', name: 'Of Property', href: 'http//sma.ztclasses.com/post1/', color: '#86B342', weight:60 } },
        { data: { id: '4', name: 'Organisms as Ecosystem Engineers', href: 'http//sma.ztclasses.com/post4/', color: '#86B342', weight:60 } },
        { data: { id: '13', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'http//sma.ztclasses.com/post13/', color: '#86B342', weight:60 } },
        { data: { id: '14', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'http//sma.ztclasses.com/post14/', color: '#86B342', weight:60 } },
        { data: { id: '17', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'http//sma.ztclasses.com/post17/', color: '#86B342', weight:60 } },
        { data: { id: '18', name: '"Loess: The Yellow Earth"', href: 'http//sma.ztclasses.com/post18/', color: '#86B342', weight:60 } },
        { data: { id: '22', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'http//sma.ztclasses.com/post22/', color: '#86B342', weight:60 } },
        { data: { id: '23', name: '"A Safe Operating Space for Humanity"', href: 'http//sma.ztclasses.com/post23/', color: '#86B342', weight:60 } },
    //--Reflection posts (all have smae color--different from Reading posts)
        { data: { id: '25', name: 'Toward an Ethics of Niche Construction', href: 'http//sma.ztclasses.com/post25/', color: '#86B342', weight:60 } },
        { data: { id: '26', name: 'Implications of Manufacturing Habitability', href: 'http//sma.ztclasses.com/post26/', color: '#86B342', weight:60 } },
        { data: { id: '27', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'http//sma.ztclasses.com/post27/', color: '#86B342', weight:60 } },
        { data: { id: '28', name: 'Memes as a Dimension of the Human Niche', href: 'http//sma.ztclasses.com/post28/', color: '#86B342', weight:60 } },
        { data: { id: '29', name: "Habitability's Non-Inevitability", href: 'http//sma.ztclasses.com/post29/', color: '#86B342', weight:60 } },
        { data: { id: '31', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'http//sma.ztclasses.com/post31/', color: '#86B342', weight:60 } },
        { data: { id: '32', name: 'Toward a More Than Human Anthropocene', href: 'http//sma.ztclasses.com/post32/', color: '#86B342', weight:60 } },
        { data: { id: '36', name: 'The Dust of Civilization', href: 'http//sma.ztclasses.com/post36/', color: '#86B342', weight:60 } }
    //--Author nodes (color by primary approach)
        { data: { id: 'ZT', name: 'Zev Trachtenberg', href: 'http//sma.ztclasses.com/#zt/', color: '#86B342', weight:60 } },
        { data: { id: 'KG', name: 'Organisms as Ecosystem Engineers', href: 'http//sma.ztclasses.com/bio#kg/', color: '#86B342', weight:60 } },
        { data: { id: 'AR', name: 'Asa Randall', href: 'http//sma.ztclasses.com/bio#ar/', color: '#86B342', weight:60 } },
        { data: { id: 'MW', name: 'K. Meghan Wieters', href: 'http//sma.ztclasses.com/bio#mw/', color: '#86B342', weight:60 } },
        { data: { id: 'NT', name: 'Noah Theriault', href: 'http//sma.ztclasses.com/bio#nt/', color: '#86B342', weight:60 } },
        { data: { id: 'LS', name: 'Gerilyn Soreghan', href: 'http//sma.ztclasses.com/bio#ls/', color: '#86B342', weight:60 } },
        { data: { id: 'IS', name: 'Ingo Schlupp', href: 'http//sma.ztclasses.com/post22/', color: '#86B342', weight:60 } },
        { data: { id: 'AC', name: 'Antonio Martinez Castro', href: 'http//sma.ztclasses.com/bio#ac/', color: '#86B342', weight:60 } },
  
	]	
    edges: [
		//Author-author edges
        { data: { source: 'AC', target: 'KG', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'KG', target: 'AR', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'AR', target: 'IS', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'IS', target: 'LS', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'LS', target: 'NT', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'NT', target: 'ZT', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'ZT', target: 'MW', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'MW', target: 'AC', AuthColor: 'red', Arrow: 'none' } },
		//Author-post edges
		//--Reading posts
        { data: { source: 'AC', target: '23', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'KG', target: '4', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'AR', target: '13', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'IS', target: '22', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'LS', target: '18', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'NT', target: '17', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'ZT', target: '1', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'MW', target: '14', AuthColor: 'red', Arrow: 'none' } },
		//--Reflection posts
        { data: { source: 'AC', target: '31', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'KG', target: '26', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'AR', target: '29', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'IS', target: '28', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'LS', target: '36', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'NT', target: '32', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'ZT', target: '25', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'MW', target: '27', AuthColor: 'red', Arrow: 'none' } },


    ]
}