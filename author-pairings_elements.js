//design notes
//Node size
//--Post nodes as now (65)
//Mouse behavior
//--Nodes
//----Post node: onHover--show name; onClick--go to URL with post
//----Edges: show author comment onlink
//Style
//--Nodes
//----Post nodes--should have color for author--see list below
//--Edges
//----link has color of author who gave it
//----similar links dotted, different links dashed
//----link to other post by same author--different color? or see about dash not working
//Color palette
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
        { data: { id: 'B', label: 'Filter Edges By', name: 'Filter Edges By', href: '', color: '#808080', weight: 300, faveShape: 'roundrectangle', filter: 'yes' }, position: { x: 750, y: 250}, locked: true, selectable: false },
        { data: { id: 'Similar', label: 'Similar', name: 'Similar', href: '', color: 'green', weight: 45, faveShape: 'roundrectangle', parent: 'B', filter: 'yes' }, position: { x: 750, y: 200 }, locked: true },
        { data: { id: 'Different', label: 'Different', name: 'Different', href: '', color: 'green', weight: 45, faveShape: 'roundrectangle', parent: 'B', filter: 'yes' }, position: { x: 750, y: 250 }, locked: true },

    //Post nodes
        { data: { id: 'ZT1', label: 'ZT1', name: 'Of Property', href: 'text/posts/ZT1.html', color: '#8DC162', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'KG1', label: 'KG1', name: 'Organisms as Ecosystem Engineers', href: 'text/posts/KG1.html', color: '#FFEAAC', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AR1', label: 'AR1', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'text/posts/AR1.html', color: '#C2627F', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'MW1', label: 'MW1', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'text/posts/MW1.html', color: '#585898', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'NT1', label: 'NT1', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'text/posts/NT1.html', color: '#791634', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'LS1', label: 'LS1', name: '"Loess: The Yellow Earth"', href: 'text/posts/LS1.html', color: '#5C4501', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'IS1', label: 'IS1', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'text/posts/IS1.html', color: '#876B19', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AC1', label: 'AC1', name: '"A Safe Operating Space for Humanity"', href: 'text/posts/AC1.html', color: '#D9BE6E', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'ZT2', label: 'ZT2', name: 'Toward an Ethics of Niche Construction', href: 'text/posts/ZT2.html', color: '#8DC162', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'KG2', label: 'KG2', name: 'Implications of Manufacturing Habitability', href: 'text/posts/KG2.html', color: '#FFEAAC', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'MW2', label: 'MW2', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'text/posts/MW2.html', color: '#585898', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'IS2', label: 'IS2', name: 'Memes as a Dimension of the Human Niche', href: 'text/posts/IS2.html', color: '#876B19', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AR2', label: 'AR2', name: "Habitability's Non-Inevitability", href: 'text/posts/AR2.html', color: '#C2627F', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'AC2', label: 'AC2', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'text/posts/AC2.html', color: '#D9BE6E', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'NT2', label: 'NT2', name: 'Toward a More Than Human Anthropocene', href: 'text/posts/NT2.html', color: '#791634', weight:65, faveShape: 'ellipse' } },
        { data: { id: 'LS2', label: 'LS2', name: 'The Dust of Civilization', href: 'text/posts/LS2.html', color: '#5C4501', weight:65, faveShape: 'ellipse' } }
	],	
    edges: [
    //dotted = similar, dashed = different, solid = same author

		//Zev's links (#8DC162)
        { data: { source: 'ZT1', target: 'ZT2', href: 'text/edges/pairs/authors/ZT1-ZT2.html', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        { data: { source: 'LS1', target: 'ZT1', href: 'text/edges/pairs/authors/LS1-ZT1-s.html', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar ' } },
        { data: { source: 'ZT1', target: 'NT2', href: 'text/edges/pairs/authors/ZT1-NT2-d.html', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different ' } },
        { data: { source: 'KG1', target: 'ZT2', href: 'text/edges/pairs/authors/KG1-ZT2-s.html', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar ' } },
        { data: { source: 'ZT2', target: 'AR2', href: 'text/edges/pairs/authors/ZT2-AR2-d.html', AuthColor: '#8DC162', width: 5, Arrow: 'none', style: 'dotted', comment: 'Different ' } },

        //Kiza's links (#FFEAAC)
        { data: { source: 'KG1', target: 'KG2', href: 'text/edges/pairs/authors/KG1-KG2.html', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        { data: { source: 'KG1', target: 'IS1', href: 'text/edges/pairs/authors/KG1-IS1-s.html', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar ' } },
        { data: { source: 'KG1', target: 'ZT2', href: 'text/edges/pairs/authors/KG1-ZT2-d.html', AuthColor: '#FFEAAC', width: 5, Arrow: 'none', style: 'dashed', comment: 'Different ' } },
        { data: { source: 'KG2', target: 'AC2', href: 'text/edges/pairs/authors/KG2-AC2-s.html', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar ' } },
        { data: { source: 'KG2', target: 'MW1', href: 'text/edges/pairs/authors/KG2-MW1-d.html', AuthColor: '#FFEAAC', width: 5, Arrow: 'none', style: 'dotted', comment: 'Different ' } },

        //Meghan's links (#585898)
        { data: { source: 'MW1', target: 'MW2', href: 'text/edges/pairs/authors/MW1-MW2.html', AuthColor: '#585898', width: 5, Arrow: 'none', style: 'solid', comment: 'From discipline' } },
        { data: { source: 'NT1', target: 'MW1', href: 'text/edges/pairs/authors/NT1-MW1-s.html', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar ' } },
        { data: { source: 'MW1', target: 'KG1', href: 'text/edges/pairs/authors/MW1-KG1-d.html', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different ' } },
        { data: { source: 'MW2', target: 'IS1', href: 'text/edges/pairs/authors/MW2-IS1-s.html', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar' } },
        { data: { source: 'AC1', target: 'MW2', href: 'text/edges/pairs/authors/AC1-MW2-d.html', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different' } },

        //Asa's links (#C2627F)
        { data: { source: 'AR1', target: 'AR2', href: 'text/edges/pairs/authors/AR1-AR2.html', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        { data: { source: 'NT1', target: 'AR1', href: 'text/edges/pairs/authors/NT1-AR1-s.html', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar' } },
        { data: { source: 'AR1', target: 'LS1', href: 'text/edges/pairs/authors/AR1-LS1-d.html', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different' } },
        { data: { source: 'AR2', target: 'MW1', href: 'text/edges/pairs/authors/AR2-MW1-s.html', AuthColor: '#C2627F', width: 5, Arrow: 'none', style: 'dotted', comment: 'Similar' } },
        { data: { source: 'AR2', target: 'IS1', href: 'text/edges/pairs/authors/AR2-IS1-d.html', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different' } },
        
        //Noah's links (#791634)
        { data: { source: 'NT1', target: 'NT2', href: 'text/edges/pairs/authors/NT1-NT2.html', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        { data: { source: 'NT1', target: 'MW2', href: 'text/edges/pairs/authors/NT1-MW2-s.html', AuthColor: '#791634', width: 5, Arrow: 'none', style: 'dotted', comment: 'Similar' } },
        { data: { source: 'AC1', target: 'NT1', href: 'text/edges/pairs/authors/AC1-NT1-d.html', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different' } },
        { data: { source: 'NT2', target: 'AR2', href: 'text/edges/pairs/authors/NT2-AR2-s.html', AuthColor: '#791634', width: 5, Arrow: 'none', style: 'dotted', comment: 'Similar' } },
        { data: { source: 'ZT2', target: 'NT2', href: 'text/edges/pairs/authors/ZT2-NT2-d.html', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different' } },
      
        //Lynn's links (#5C4501)
        { data: { source: 'LS1', target: 'LS2', href: 'text/edges/pairs/authors/LS1-LS2.html', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        { data: { source: 'LS1', target: 'AC1', href: 'text/edges/pairs/authors/LS1-AC1-s.html', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar' } },
        { data: { source: 'LS2', target: 'AR1', href: 'text/edges/pairs/authors/LS2-AR1-d.html', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'dashed', comment: 'Different' } },
        { data: { source: 'KG1', target: 'LS1', href: 'text/edges/pairs/authors/KG1-LS1-s.html', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'dotted', comment: 'Similar' } },
           
        //Ingo's links (#876B19)
        { data: { source: 'IS1', target: 'IS2', href: 'text/edges/pairs/authors/IS1-IS2.html', AuthColor: '#876B19', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
                
        //Antonio's links (#D9BE6E)
        { data: { source: 'AC1', target: 'AC2', href: 'text/edges/pairs/authors/AC1-AC2.html', AuthColor: '#D9BE6E', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        { data: { source: 'AC1', target: 'ZT2', href: 'text/edges/pairs/authors/AC1-ZT2.html', AuthColor: '#D9BE6E', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        { data: { source: 'AC2', target: 'MW1', href: 'text/edges/pairs/authors/AC2-MW1.html', AuthColor: '#D9BE6E', width: 5, Arrow: 'triangle', style: 'solid', comment: ' ' } },
        
    ]
}