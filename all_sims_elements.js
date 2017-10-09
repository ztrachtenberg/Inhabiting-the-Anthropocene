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
//----Hc: #FFD2AC solid
//----Hr: #874B19 DASHED
//----F: #AFAF3C
//----Fh: #878719 solid
//----Fd: #D9D96E DASHED
//----A: #5B2C75
//----Ax: #42155A solid
//----An: #9B79AF DASHED
//----L: #246969
//----Lp: #0F5151 solid
//----Lm: #6B9E9E DASHED


var BlogEles = {
    nodes: [

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
        { data: { id: 'LS2', label: 'LS2', bio: 'text/legends/bios/LS.html', name: 'The Dust of Civilization', href: 'text/posts/LS2.html', color: '#5C4501', weight:55, faveShape: 'ellipse' } },

	],	
    
   edges: [
	//From Ac1
     { data: { source: 'AC1', target: 'AC2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'AR1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'AR2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'IS1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'IS2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'KG1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'KG2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'MW1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'MW2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'LS1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'LS2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'NT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC1', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM AC2
     { data: { source: 'AC2', target: 'AR1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'AR2', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'IS1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'IS2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'KG1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'KG2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'MW1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'MW2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'LS1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'LS2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'NT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'ZT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AC2', target: 'ZT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
	 //FROM AR1
     { data: { source: 'AR1', target: 'AR2', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'IS1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'IS2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'KG1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'KG2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'MW1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'MW2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'LS1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'LS2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'NT2', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'ZT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR1', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM AR2
     { data: { source: 'AR2', target: 'IS1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'IS2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'KG1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'KG2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'MW1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'MW2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'LS1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'LS2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'NT2', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'ZT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'AR2', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM IS1
     { data: { source: 'IS1', target: 'IS2', AuthColor: '#737373', width: 7, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'KG1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'KG2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'MW1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'MW2', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'LS1', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'LS2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'NT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS1', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM IS2
     { data: { source: 'IS2', target: 'KG1', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'KG2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'MW1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'MW2', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'LS1', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'LS2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'NT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'IS2', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM KG1
     { data: { source: 'KG1', target: 'KG2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'MW1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'MW2', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'LS1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'LS2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'NT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'NT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG1', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM KG2
     { data: { source: 'KG2', target: 'MW1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG2', target: 'MW2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG2', target: 'LS1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG2', target: 'LS2', AuthColor: '#737373', width: 7, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG2', target: 'NT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG2', target: 'NT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG2', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'KG2', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM MW1
     { data: { source: 'MW1', target: 'MW2', AuthColor: '#737373', width: 5, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW1', target: 'LS1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW1', target: 'LS2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW1', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW1', target: 'NT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW1', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW1', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM MW2
     { data: { source: 'MW2', target: 'LS1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW2', target: 'LS2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW2', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW2', target: 'NT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW2', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'MW2', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM LS1
     { data: { source: 'LS1', target: 'LS2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'LS1', target: 'NT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'LS1', target: 'NT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'LS1', target: 'ZT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'LS1', target: 'ZT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
	 //FROM LS2
     { data: { source: 'LS2', target: 'NT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'LS2', target: 'NT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'LS2', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'LS2', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM NT1
     { data: { source: 'NT1', target: 'NT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
     { data: { source: 'NT1', target: 'ZT1', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
     { data: { source: 'NT1', target: 'ZT2', AuthColor: '#737373', width: 1, Arrow: 'none', style: 'solid'} },
	 //FROM NT2
     { data: { source: 'NT2', target: 'ZT1', AuthColor: '#737373', width: 0, Arrow: 'none', style: 'solid'} },
     { data: { source: 'NT2', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} },
	 //FROM ZT1
     { data: { source: 'ZT1', target: 'ZT2', AuthColor: '#737373', width: 3, Arrow: 'none', style: 'solid'} }
	 
    ]
}