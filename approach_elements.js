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

//Approach nodes
        { data: { id: 'D', label: 'D', preview: 'text/comments/previews/D-bio.html', name: 'Descriptive', href: 'text/main/approaches/approaches-D.html', color: '#AF923C', weight:60, faveShape: 'roundrectangle' } },
		{ data: { id: 'I', label: 'I', preview: 'text/comments/previews/I-bio.html', name: 'Interpretive', href: 'text/main/approaches/approaches-I.html', color: '#9C3555', weight:60, faveShape: 'roundrectangle' } },
		{ data: { id: 'N', label: 'N', preview: 'text/comments/previews/N-bio.html', name: 'Normative', href: 'text/main/approaches/approaches-N.html', color: '#649C35', weight:60, faveShape: 'roundrectangle' } },
		{ data: { id: 'P', label: 'P', preview: 'text/comments/previews/P-bio.html', name: 'Practical', href: 'text/main/approaches/approaches-P.html', color: '#36367A', weight:60, faveShape: 'roundrectangle' } },

//Post nodes
        { data: { id: 'ZT1', label: 'ZT1', bio: 'text/legends/bios/ZT.html', preview:  'text/comments/previews/ZT1.html', name: 'Of Property', href: 'text/posts/ZT1.html', color: '#8DC162', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'KG1', label: 'KG1', bio: 'text/legends/bios/KG.html', preview:  'text/comments/previews/KG1.html', name: 'Organisms as Ecosystem Engineers', href: 'text/posts/KG1.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AR1', label: 'AR1', bio: 'text/legends/bios/AR.html', preview:  'text/comments/previews/AR1.html', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'text/posts/AR1.html', color: '#C2627F', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'MW1', label: 'MW1', bio: 'text/legends/bios/MW.html', preview:  'text/comments/previews/MW1.html', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'text/posts/MW1.html', color: '#585898', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'NT1', label: 'NT1', bio: 'text/legends/bios/NT.html', preview:  'text/comments/previews/NT1.html', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'text/posts/NT1.html', color: '#791634', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'LS1', label: 'LS1', bio: 'text/legends/bios/LS.html', preview:  'text/comments/previews/LS1.html', name: '"Loess: The Yellow Earth"', href: 'text/posts/LS1.html', color: '#5C4501', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'IS1', label: 'IS1', bio: 'text/legends/bios/IS.html', preview:  'text/comments/previews/IS1.html', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'text/posts/IS1.html', color: '#876B19', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AC1', label: 'AC1', bio: 'text/legends/bios/AC.html', preview:  'text/comments/previews/AC1.html', name: '"A Safe Operating Space for Humanity"', href: 'text/posts/AC1.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'ZT2', label: 'ZT2', bio: 'text/legends/bios/ZT.html', preview:  'text/comments/previews/ZT2.html', name: 'Toward an Ethics of Niche Construction', href: 'text/posts/ZT2.html', color: '#8DC162', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'KG2', label: 'KG2', bio: 'text/legends/bios/KG.html', preview:  'text/comments/previews/KG2.html', name: 'Implications of Manufacturing Habitability', href: 'text/posts/KG2.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'MW2', label: 'MW2', bio: 'text/legends/bios/MW.html', preview:  'text/comments/previews/MW2.html', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'text/posts/MW2.html', color: '#585898', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'IS2', label: 'IS2', bio: 'text/legends/bios/IS.html', preview:  'text/comments/previews/IS2.html', name: 'Memes as a Dimension of the Human Niche', href: 'text/posts/IS2.html', color: '#876B19', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AR2', label: 'AR2', bio: 'text/legends/bios/AR.html', preview:  'text/comments/previews/AR2.html', name: "Habitability's Non-Inevitability", href: 'text/posts/AR2.html', color: '#C2627F', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'AC2', label: 'AC2', bio: 'text/legends/bios/AC.html', preview:  'text/comments/previews/AC2.html', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'text/posts/AC2.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'NT2', label: 'NT2', bio: 'text/legends/bios/NT.html', preview:  'text/comments/previews/NT2.html', name: 'Toward a More Than Human Anthropocene', href: 'text/posts/NT2.html', color: '#791634', weight:55, faveShape: 'ellipse' } },
        { data: { id: 'LS2', label: 'LS2', bio: 'text/legends/bios/LS.html', preview:  'text/comments/previews/LS2.html', name: 'The Dust of Civilization', href: 'text/posts/LS2.html', color: '#5C4501', weight:55, faveShape: 'ellipse' } }
	],	
    edges: [
    //Primary approach edges
        { data: { source: 'ZT1', target: 'N', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'KG1', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'AR1', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'MW1', target: 'P', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'NT1', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'LS1', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'IS1', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'AC1', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'ZT2', target: 'N', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'KG2', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'MW2', target: 'P', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'IS2', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'AR2', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'AC2', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'NT2', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'LS2', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'solid', comment: 'From discipline' } },

    //author color edges
        { data: { source: 'AR1', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'MW1', target: 'N', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'NT1', target: 'N', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'LS1', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'IS1', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'AC1', target: 'N', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'ZT2', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'KG2', target: 'P', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'MW2', target: 'N', AuthColor: '#649C35', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'IS2', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'AR2', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'AC2', target: 'I', AuthColor: '#9C3555', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'NT2', target: 'D', AuthColor: '#AF923C', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } },
        { data: { source: 'LS2', target: 'P', AuthColor: '#36367A', width: 3, Arrow: 'none', style: 'dashed', comment: 'Found in post' } }
    ]
}