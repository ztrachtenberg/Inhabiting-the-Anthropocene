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
//Color scheme
//--Nodes
//----Approach nodes should have 4 different primary colors
//----Post nodes--should have color for author--see list below
//--Edges
//----"primary approach edges" should be same color as approach nodes
//----"secondary approach edges" should be same color as post node
//Color palette
//--Approach colors
//----D: #AF923C (brownish)
//----I: #9C3655 (reddish)
//----N: #649C35 (greenish)
//----P: #36367A (bluish)
//--Author colors
//---D color family
//----Kiza: #FFEAAC
//----Antonio: #D9BE6E
//----Ingo: #876B19
//----Lynn: #5C4501
//---I color family
//----Asa: #C2627F
//----Noah: #791634
//---N color family
//----Zev: #8DC162
//---P color family
//----Meghan: #585898


var BlogEles = {
    nodes: [
    //Approach nodes
        { data: { id: 'D', name: 'Descriptive', href: './approaches.html#D', color: '#AF923C', weight:120 } },
		{ data: { id: 'I', name: 'Interpretive', href: './approaches.html#I', color: '#9C3655', weight:120 } },
		{ data: { id: 'N', name: 'Normative', href: './approaches.html#N', color: '#649C35', weight:120 } },
		{ data: { id: 'P', name: 'Practical', href: './approaches.html#P', color: '#36367A', weight:120 } },
    //Post nodes
        { data: { id: '1', name: 'Of Property', href: 'http://sma.ztclasses.com/post1.html', color: '#8DC162', weight:60 } },
        { data: { id: '4', name: 'Organisms as Ecosystem Engineers', href: 'http://sma.ztclasses.com/post4.html', color: '#FFEAAC', weight:60 } },
        { data: { id: '13', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'http://sma.ztclasses.com/post13.html', color: '#C2627F', weight:60 } },
        { data: { id: '14', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'http://sma.ztclasses.com/post14.html', color: '#585898', weight:60 } },
        { data: { id: '17', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'http://sma.ztclasses.com/post17.html', color: '#791634', weight:60 } },
        { data: { id: '18', name: '"Loess: The Yellow Earth"', href: 'http://sma.ztclasses.com/post18.html', color: '#5C4501', weight:60 } },
        { data: { id: '22', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'http://sma.ztclasses.com/post22.html', color: '#876B19', weight:60 } },
        { data: { id: '23', name: '"A Safe Operating Space for Humanity"', href: 'http://sma.ztclasses.com/post23.html', color: '#D9BE6E', weight:60 } },
        { data: { id: '25', name: 'Toward an Ethics of Niche Construction', href: 'http://sma.ztclasses.com/post25.html', color: '#8DC162', weight:60 } },
        { data: { id: '26', name: 'Implications of Manufacturing Habitability', href: 'http://sma.ztclasses.com/post26.html', color: '#FFEAAC', weight:60 } },
        { data: { id: '27', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'http://sma.ztclasses.com/post27.html', color: '#585898', weight:60 } },
        { data: { id: '28', name: 'Memes as a Dimension of the Human Niche', href: 'http://sma.ztclasses.com/post28.html', color: '#876B19', weight:60 } },
        { data: { id: '29', name: "Habitability's Non-Inevitability", href: 'http://sma.ztclasses.com/post29.html', color: '#C2627F', weight:60 } },
        { data: { id: '31', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'http://sma.ztclasses.com/post31.html', color: '#D9BE6E', weight:60 } },
        { data: { id: '32', name: 'Toward a More Than Human Anthropocene', href: 'http://sma.ztclasses.com/post32.html', color: '#791634', weight:60 } },
        { data: { id: '36', name: 'The Dust of Civilization', href: 'http://sma.ztclasses.com/post36.html', color: '#5C4501', weight:60 } }
	],	
    edges: [
    //Primary approach edges
        { data: { source: '1', target: 'N', AuthColor: '#649C35', width: 5, Arrow: 'none' } },
        { data: { source: '4', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
        { data: { source: '13', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none' } },
        { data: { source: '14', target: 'P', AuthColor: '#36367A', width: 5, Arrow: 'none' } },
        { data: { source: '17', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none' } },
        { data: { source: '18', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
        { data: { source: '22', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
        { data: { source: '23', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
        { data: { source: '25', target: 'N', AuthColor: '#649C35', width: 5, Arrow: 'none' } },
        { data: { source: '26', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
        { data: { source: '27', target: 'P', AuthColor: '#36367A', width: 5, Arrow: 'none' } },
        { data: { source: '28', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
        { data: { source: '29', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none' } },
        { data: { source: '31', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
        { data: { source: '32', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none' } },
        { data: { source: '36', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none' } },
    //Secondary approach edges
    //black edges
//        { data: { source: '13', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '14', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '17', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '18', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '22', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '23', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '25', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '26', target: 'P', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '27', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '28', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '29', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '31', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '32', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none' } },
//        { data: { source: '36', target: 'P', AuthColor: 'black', width: 5, Arrow: 'none' } }
    //author color edges
        { data: { source: '13', target: 'D', AuthColor: '#C2627F', width: 5, Arrow: 'none' } },
        { data: { source: '14', target: 'N', AuthColor: '#585898', width: 5, Arrow: 'none' } },
        { data: { source: '17', target: 'N', AuthColor: '#791634', width: 5, Arrow: 'none' } },
        { data: { source: '18', target: 'I', AuthColor: '#5C4501', width: 5, Arrow: 'none' } },
        { data: { source: '22', target: 'I', AuthColor: '#876B19', width: 5, Arrow: 'none' } },
        { data: { source: '23', target: 'N', AuthColor: '#D9BE6E', width: 5, Arrow: 'none' } },
        { data: { source: '25', target: 'D', AuthColor: '#8DC162', width: 5, Arrow: 'none' } },
        { data: { source: '26', target: 'P', AuthColor: '#FFEAAC', width: 5, Arrow: 'none' } },
        { data: { source: '27', target: 'N', AuthColor: '#585898', width: 5, Arrow: 'none' } },
        { data: { source: '28', target: 'I', AuthColor: '#876B19', width: 5, Arrow: 'none' } },
        { data: { source: '29', target: 'D', AuthColor: '#C2627F', width: 5, Arrow: 'none' } },
        { data: { source: '31', target: 'I', AuthColor: '#D9BE6E', width: 5, Arrow: 'none' } },
        { data: { source: '32', target: 'D', AuthColor: '#791634', width: 5, Arrow: 'none' } },
        { data: { source: '36', target: 'P', AuthColor: '#5C4501', width: 5, Arrow: 'none' } }


    ]
}