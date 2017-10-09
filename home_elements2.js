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
    // Select Random
    //    { data: { id: 'Rand', label: 'Select Random', name: 'Select Random', href: 'www.google.com', color: '#808080', weight: 45, faveShape: 'roundrectangle', filter: 'yes' }, position: { x: 50, y: 500}, locked: true },

    //Approach nodes
        { data: { id: 'D', label: 'D', bio: 'text/legends/bios/D-bio.html', name: 'Descriptive', href: 'text/main/approaches/approaches-D.html', color: '#AF923C', weight:60, faveShape: 'roundrectangle', home: 'yes' } },
		{ data: { id: 'I', label: 'I', bio: 'text/legends/bios/I-bio.html', name: 'Interpretive', href: 'text/main/approaches/approaches-I.html', color: '#9C3555', weight:60, faveShape: 'roundrectangle', home: 'yes' } },
		{ data: { id: 'N', label: 'N', bio: 'text/legends/bios/N-bio.html', name: 'Normative', href: 'text/main/approaches/approaches-N.html', color: '#649C35', weight:60, faveShape: 'roundrectangle', home: 'yes' } },
		{ data: { id: 'P', label: 'P', bio: 'text/legends/bios/P-bio.html', name: 'Practical', href: 'text/main/approaches/approaches-P.html', color: '#36367A', weight:60, faveShape: 'roundrectangle', home: 'yes' } },

//Theme nodes
	    { data: { id: 'H', label: 'H', bio: 'text/legends/bios/H-bio.html', name: 'History', href: 'text/main/themes/themes-H.html', color: '#737373', weight:60, faveShape: 'triangle', home: 'yes'  } },
		{ data: { id: 'F', label: 'F', bio: 'text/legends/bios/F-bio.html', name: 'Future', href: 'text/main/themes/themes-F.html', color: '#737373', weight:60, faveShape: 'rectangle', home: 'yes'  } },
		{ data: { id: 'A', label: 'A', bio: 'text/legends/bios/A-bio.html', name: 'Agency', href: 'text/main/themes/themes-A.html', color: '#737373', weight:60, faveShape: 'pentagon', home: 'yes'  } },
		{ data: { id: 'L', label: 'L', bio: 'text/legends/bios/L-bio.html', name: 'Limits', href: 'text/main/themes/themes-L.html', color: '#737373', weight:60, faveShape: 'hexagon', home: 'yes'  } },
		
    //Post nodes
        { data: { id: 'ZT1', label: 'ZT1', bio: 'text/legends/bios/ZT.html', name: 'Of Property', href: 'text/posts/ZT1.html', color: '#8DC162', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'KG1', label: 'KG1', bio: 'text/legends/bios/KG.html', name: 'Organisms as Ecosystem Engineers', href: 'text/posts/KG1.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'AR1', label: 'AR1', bio: 'text/legends/bios/AR.html', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'text/posts/AR1.html', color: '#C2627F', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'MW1', label: 'MW1', bio: 'text/legends/bios/MW.html', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'text/posts/MW1.html', color: '#585898', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'NT1', label: 'NT1', bio: 'text/legends/bios/NT.html', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'text/posts/NT1.html', color: '#791634', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'LS1', label: 'LS1', bio: 'text/legends/bios/LS.html', name: '"Loess: The Yellow Earth"', href: 'text/posts/LS1.html', color: '#5C4501', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'IS1', label: 'IS1', bio: 'text/legends/bios/IS.html', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'text/posts/IS1.html', color: '#876B19', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'AC1', label: 'AC1', bio: 'text/legends/bios/AC.html', name: '"A Safe Operating Space for Humanity"', href: 'text/posts/AC1.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'ZT2', label: 'ZT2', bio: 'text/legends/bios/ZT.html', name: 'Toward an Ethics of Niche Construction', href: 'text/posts/ZT2.html', color: '#8DC162', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'KG2', label: 'KG2', bio: 'text/legends/bios/KG.html', name: 'Implications of Manufacturing Habitability', href: 'text/posts/KG2.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'MW2', label: 'MW2', bio: 'text/legends/bios/MW.html', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'text/posts/MW2.html', color: '#585898', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'IS2', label: 'IS2', bio: 'text/legends/bios/IS.html', name: 'Memes as a Dimension of the Human Niche', href: 'text/posts/IS2.html', color: '#876B19', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'AR2', label: 'AR2', bio: 'text/legends/bios/AR.html', name: "Habitability's Non-Inevitability", href: 'text/posts/AR2.html', color: '#C2627F', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'AC2', label: 'AC2', bio: 'text/legends/bios/AC.html', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'text/posts/AC2.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'NT2', label: 'NT2', bio: 'text/legends/bios/NT.html', name: 'Toward a More Than Human Anthropocene', href: 'text/posts/NT2.html', color: '#791634', weight:55, faveShape: 'ellipse', home: 'yes' } },
        { data: { id: 'LS2', label: 'LS2', bio: 'text/legends/bios/LS.html', name: 'The Dust of Civilization', href: 'text/posts/LS2.html', color: '#5C4501', weight:55, faveShape: 'ellipse', home: 'yes' } }
    ]
}