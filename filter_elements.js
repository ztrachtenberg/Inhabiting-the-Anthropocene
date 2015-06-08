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
    //Filter Nodes
        { data: { id: 'B', label: 'Filter By', name: 'Filter By', href: 'text/approaches.html#D', color: '#808080', weight: 300, faveShape: 'roundrectangle', filter: 'yes' }, position: { x: 0, y: 50}, locked: true, selectable: false },
        { data: { id: 'Foo', label: 'Foo', name: 'Foo', href: 'www.google.com', color: '#AF923C', weight: 45, faveShape: 'roundrectangle', parent: 'B', filter: 'yes' }, position: { x: 0, y: 25 }, locked: true },
        { data: { id: 'Bar', label: 'Bar', name: 'Bar', href: 'www.google.com', color: '#AF923C', weight: 45, faveShape: 'roundrectangle', parent: 'B', filter: 'yes' }, position: { x: 0, y: 75 }, locked: true },

    //Approach nodes
        { data: { id: 'D', label: 'D', name: 'Descriptive', href: 'text/approaches.html#D', color: '#AF923C', weight:45, faveShape: 'roundrectangle' } },
		{ data: { id: 'I', label: 'I', name: 'Interpretive', href: 'text/approaches.html#I', color: '#9C3655', weight:45, faveShape: 'roundrectangle' } },
		{ data: { id: 'N', label: 'N', name: 'Normative', href: 'text/approaches.html#N', color: '#649C35', weight:45, faveShape: 'roundrectangle' } },
		{ data: { id: 'P', label: 'P', name: 'Practical', href: 'text/approaches.html#P', color: '#36367A', weight:45, faveShape: 'roundrectangle' } },
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
        { data: { id: '36', label: 'GS2', name: 'The Dust of Civilization', href: 'text/post36.html', color: '#5C4501', weight:65, faveShape: 'ellipse' } }
	],	
    edges: [
    //Primary approach edges
        { data: { source: '1', target: 'N', AuthColor: '#649C35', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '4', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '13', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '14', target: 'P', AuthColor: '#36367A', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '17', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '18', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '22', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '23', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '25', target: 'N', AuthColor: '#649C35', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '26', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '27', target: 'P', AuthColor: '#36367A', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '28', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '29', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '31', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '32', target: 'I', AuthColor: '#9C3655', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
        { data: { source: '36', target: 'D', AuthColor: '#AF923C', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'From discipline' } },
    //Secondary approach edges
    //black edges
//        { data: { source: '13', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '14', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '17', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '18', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '22', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '23', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '25', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '26', target: 'P', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '27', target: 'N', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '28', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '29', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '31', target: 'I', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '32', target: 'D', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } },
//        { data: { source: '36', target: 'P', AuthColor: 'black', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: ' ' } }
    //author color edges
        { data: { source: '13', target: 'D', AuthColor: '#C2627F', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '14', target: 'N', AuthColor: '#585898', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '17', target: 'N', AuthColor: '#791634', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '18', target: 'I', AuthColor: '#5C4501', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '22', target: 'I', AuthColor: '#876B19', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '23', target: 'N', AuthColor: '#D9BE6E', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '25', target: 'D', AuthColor: '#8DC162', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '26', target: 'P', AuthColor: '#FFEAAC', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '27', target: 'N', AuthColor: '#585898', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '28', target: 'I', AuthColor: '#876B19', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '29', target: 'D', AuthColor: '#C2627F', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '31', target: 'I', AuthColor: '#D9BE6E', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '32', target: 'D', AuthColor: '#791634', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } },
        { data: { source: '36', target: 'P', AuthColor: '#5C4501', width: 5, Arrow: 'none', style: 'dotted', href: 'text/post1.html', comment: 'Found in post' } }


    ]
}