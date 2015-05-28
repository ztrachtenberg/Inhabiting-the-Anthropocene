//design notes
//Node size: as now
//Mouse behavior
//--Nodes: onHover--show name; onClick--go to URL with post
//--Edges: none
//Color scheme
//--Nodes: should have color of primary approach (from approach_elements)
//--Edges: black


var BlogEles = {
    nodes: [
    //Post nodes
        { data: { id: '1', name: 'Of Property', href: 'http//sma.ztclasses.com/post1/', color: '#86B342', weight:60 } },
        { data: { id: '4', name: 'Organisms as Ecosystem Engineers', href: 'http//sma.ztclasses.com/post4/', color: '#86B342', weight:60 } },
        { data: { id: '13', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'http//sma.ztclasses.com/post13/', color: '#86B342', weight:60 } },
        { data: { id: '14', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'http//sma.ztclasses.com/post14/', color: '#86B342', weight:60 } },
        { data: { id: '17', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'http//sma.ztclasses.com/post17/', color: '#86B342', weight:60 } },
        { data: { id: '18', name: '"Loess: The Yellow Earth"', href: 'http//sma.ztclasses.com/post18/', color: '#86B342', weight:60 } },
        { data: { id: '22', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'http//sma.ztclasses.com/post22/', color: '#86B342', weight:60 } },
        { data: { id: '23', name: '"A Safe Operating Space for Humanity"', href: 'http//sma.ztclasses.com/post23/', color: '#86B342', weight:60 } },
        { data: { id: '25', name: 'Toward an Ethics of Niche Construction', href: 'http//sma.ztclasses.com/post25/', color: '#86B342', weight:60 } },
        { data: { id: '26', name: 'Implications of Manufacturing Habitability', href: 'http//sma.ztclasses.com/post26/', color: '#86B342', weight:60 } },
        { data: { id: '27', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'http//sma.ztclasses.com/post27/', color: '#86B342', weight:60 } },
        { data: { id: '28', name: 'Memes as a Dimension of the Human Niche', href: 'http//sma.ztclasses.com/post28/', color: '#86B342', weight:60 } },
        { data: { id: '29', name: "Habitability's Non-Inevitability", href: 'http//sma.ztclasses.com/post29/', color: '#86B342', weight:60 } },
        { data: { id: '31', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'http//sma.ztclasses.com/post31/', color: '#86B342', weight:60 } },
        { data: { id: '32', name: 'Toward a More Than Human Anthropocene', href: 'http//sma.ztclasses.com/post32/', color: '#86B342', weight:60 } },
        { data: { id: '36', name: 'The Dust of Civilization', href: 'http//sma.ztclasses.com/post36/', color: '#86B342', weight:60 } }
	]	
    edges: [
        { data: { source: '1', target: '4', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '4', target: '13', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '13', target: '14', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '14', target: '17', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '17', target: '18', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '18', target: '22', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '22', target: '23', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '23', target: '25', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '25', target: '26', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '26', target: '27', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '27', target: '28', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '28', target: '29', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '29', target: '31', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '31', target: '32', AuthColor: 'red', Arrow: 'triangle' } },
        { data: { source: '32', target: '36', AuthColor: 'red', Arrow: 'triangle' } }

    ]
}