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
//----"primary approach edges" should be same color as approach nodes--SOLID LINE
//----"secondary approach edges" CHANGED TO COLOR OF APPROACH--DASHED LINE
//Color palette
//--Approach colors
//----D: #AF923C (brownish)
//----I: #9C3555 (reddish)
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

 // Filter Nodes
       //{ data: { id: 'L', label: 'Links for posts that are:', name: 'Filter By:', href: '', color: '#FFFFFF', weight: 0, faveShape: 'roundrectangle', filter: 'yes'  }, position: { x: 1000, y: 500}, locked: true, selectable: false },
        { data: { id: 'D', label: 'Descriptive', name: 'Descriptive', href: '', color: '#AF923C', weight: 45, faveShape: 'roundrectangle', parent: 'L', filter: 'yes' }, position: { x: 1000, y: 450 }, locked: true },
        { data: { id: 'I', label: 'Interpretive', name: 'Interpretive', href: '', color: '#9C3555', weight: 45, faveShape: 'roundrectangle', parent: 'L', filter: 'yes' }, position: { x: 1000, y: 500 }, locked: true },
        { data: { id: 'N', label: 'Normative', name: 'Normative', href: '', color: '#649C35', weight: 45, faveShape: 'roundrectangle', parent: 'L', filter: 'yes' }, position: { x: 1000, y: 550 }, locked: true },
		{ data: { id: 'P', label: 'Practical', name: 'Practical', href: '', color: '#36367A', weight: 45, faveShape: 'roundrectangle', parent: 'L', filter: 'yes' }, position: { x: 1000, y: 600 }, locked: true },

//Post nodes
        { data: { id: 'ZT1', label: 'ZT1', bio: 'text/legends/bios/ZT.html', name: 'Of Property', href: 'text/posts/ZT1.html', color: '#8DC162', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'KG1', label: 'KG1', bio: 'text/legends/bios/KG.html', name: 'Organisms as Ecosystem Engineers', href: 'text/posts/KG1.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AR1', label: 'AR1', bio: 'text/legends/bios/AR.html', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'text/posts/AR1.html', color: '#C2627F', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'MW1', label: 'MW1', bio: 'text/legends/bios/MW.html', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'text/posts/MW1.html', color: '#585898', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'NT1', label: 'NT1', bio: 'text/legends/bios/NT.html', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'text/posts/NT1.html', color: '#791634', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'LS1', label: 'LS1', bio: 'text/legends/bios/LS.html', name: '"Loess: The Yellow Earth"', href: 'text/posts/LS1.html', color: '#5C4501', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'IS1', label: 'IS1', bio: 'text/legends/bios/IS.html', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'text/posts/IS1.html', color: '#876B19', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AC1', label: 'AC1', bio: 'text/legends/bios/AC.html', name: '"A Safe Operating Space for Humanity"', href: 'text/posts/AC1.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'ZT2', label: 'ZT2', bio: 'text/legends/bios/ZT.html', name: 'Toward an Ethics of Niche Construction', href: 'text/posts/ZT2.html', color: '#8DC162', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'KG2', label: 'KG2', bio: 'text/legends/bios/KG.html', name: 'Implications of Manufacturing Habitability', href: 'text/posts/KG2.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'MW2', label: 'MW2', bio: 'text/legends/bios/MW.html', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'text/posts/MW2.html', color: '#585898', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'IS2', label: 'IS2', bio: 'text/legends/bios/IS.html', name: 'Memes as a Dimension of the Human Niche', href: 'text/posts/IS2.html', color: '#876B19', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AR2', label: 'AR2', bio: 'text/legends/bios/AR.html', name: "Habitability's Non-Inevitability", href: 'text/posts/AR2.html', color: '#C2627F', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AC2', label: 'AC2', bio: 'text/legends/bios/AC.html', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'text/posts/AC2.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'NT2', label: 'NT2', bio: 'text/legends/bios/NT.html', name: 'Toward a More Than Human Anthropocene', href: 'text/posts/NT2.html', color: '#791634', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'LS2', label: 'LS2', bio: 'text/legends/bios/LS.html', name: 'The Dust of Civilization', href: 'text/posts/LS2.html', color: '#5C4501', weight:55, faveShape: 'ellipse' } }
	],	
    edges: [
    //D edges
	//FROM AC1
        { data: { source: 'AC1', target: 'AC2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'AR1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'AR2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'IS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'IS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'KG1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'KG2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC1', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM AC2
        { data: { source: 'AC2', target: 'AR1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'AR2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'IS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'KG1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'KG2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        { data: { source: 'AC2', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
        //FROM AR1
		{ data: { source: 'AR1', target: 'AR2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'IS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'IS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'KG1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'KG2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR1', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM AR2
		{ data: { source: 'AR2', target: 'IS', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR2', target: 'IS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR2', target: 'KG1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR2', target: 'KG2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR2', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR2', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR2', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'AR2', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM IS1
		{ data: { source: 'IS1', target: 'IS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS1', target: 'KG1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS1', target: 'KG2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS1', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS1', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS1', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS1', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM IS2
		{ data: { source: 'IS2', target: 'KG1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS2', target: 'KG2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS2', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS2', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS2', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'IS2', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM KG1
		{ data: { source: 'KG1', target: 'KG2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'KG1', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'KG1', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'KG1', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'KG1', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM KG2
		{ data: { source: 'KG2', target: 'LS1', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'KG2', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'KG2', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'KG2', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM LS1
		{ data: { source: 'LS1', target: 'LS2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'LS1', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'LS1', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM LS2
		{ data: { source: 'LS2', target: 'NT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		{ data: { source: 'LS2', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
		//FROM NT2
		{ data: { source: 'NT2', target: 'ZT2', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'Descriptive', href: 'text/legends/bios/D-bio.html' } },
//N EDGES
	//FROM AC1
		{ data: { source: 'AC1', target: 'MW1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'AC1', target: 'MW2', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'AC1', target: 'NT1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'AC1', target: 'ZT1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'AC1', target: 'ZT2', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		//FROM MW1
		{ data: { source: 'MW1', target: 'MW2', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'MW1', target: 'NT1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'MW1', target: 'ZT1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'MW1', target: 'ZT2', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		//FROM MW2
		{ data: { source: 'MW2', target: 'NT1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'MW2', target: 'ZT1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'MW2', target: 'ZT2', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		//FROM NT1
		{ data: { source: 'NT2', target: 'ZT1', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		{ data: { source: 'NT2', target: 'ZT2', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
		//FROM ZT1
		{ data: { source: 'ZT1', target: 'ZT2', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'Normative', href: 'text/legends/bios/N-bio.html' } },
//P EDGES
		//FROM KG2
		{ data: { source: 'KG2', target: 'MW1', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'Practical', href: 'text/legends/bios/P-bio.html' } },
		{ data: { source: 'KG2', target: 'MW2', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'Practical', href: 'text/legends/bios/P-bio.html' } },
		{ data: { source: 'KG2', target: 'LS2', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'Practical', href: 'text/legends/bios/P-bio.html' } },
		//FROM MW1
		{ data: { source: 'MW1', target: 'MW2', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'Practical', href: 'text/legends/bios/P-bio.html' } },
		{ data: { source: 'MW1', target: 'LS2', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'Practical', href: 'text/legends/bios/P-bio.html' } },
		//FROM MW2
		{ data: { source: 'MWW', target: 'LS2', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'Practical', href: 'text/legends/bios/P-bio.html' } },
//I EDGES
		//FROM AC2
        { data: { source: 'AC2', target: 'AR1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AC2', target: 'AR2', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AC2', target: 'IS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AC2', target: 'IS2', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AC2', target: 'LS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AC2', target: 'NT1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AC2', target: 'NTS', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
		//FROM AR1
        { data: { source: 'AR1', target: 'AR2', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR1', target: 'IS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR1', target: 'IS2', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR1', target: 'LS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR1', target: 'NT1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR1', target: 'NTS', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
		//FROM AR2
        { data: { source: 'AR2', target: 'IS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR2', target: 'IS2', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR2', target: 'LS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR2', target: 'NT1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'AR2', target: 'NTS', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
		//FROM IS1
        { data: { source: 'IS1', target: 'IS2', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'IS1', target: 'LS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'IS1', target: 'NT1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'IS1', target: 'NTS', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
		//FROM IS2
        { data: { source: 'IS2', target: 'LS1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'IS2', target: 'NT1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'IS2', target: 'NTS', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
		//FROM LS1
        { data: { source: 'LS1', target: 'NT1', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
        { data: { source: 'LS1', target: 'NTS', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },
		//FROM NT1
        { data: { source: 'NT2', target: 'NTS', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'Interpretive', href: 'text/legends/bios/I-bio.html' } },

    ]
}