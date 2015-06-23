//design notes
//Node size
//--Post nodes as now (55)
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
    //dotted = similar, dashed = different, solid = same author

		//Zev's links (#8DC162)
        { data: { source: 'ZT2', target: 'ZT1', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'ZT2', target: 'KG1', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'ZT2', target: 'IS1', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'ZT2', target: 'AC1', AuthColor: '#8DC162', width: 5, Arrow: 'triangle', style: 'solid'} },


        //Kiza's links (#FFEAAC)
        { data: { source: 'KG2', target: 'KG1', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'KG2', target: 'IS1', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'KG2', target: 'AC1', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'solid'} },
                { data: { source: 'KG2', target: 'LS1', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'KG2', target: 'MW1', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'KG2', target: 'NT1', AuthColor: '#FFEAAC', width: 5, Arrow: 'triangle', style: 'solid'} },


        //Meghan's links (#585898)
        { data: { source: 'MW2', target: 'MW1', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'MW2', target: 'IS1', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'MW2', target: 'ZT2', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'MW2', target: 'KG2', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'solid'} },
        { data: { source: 'MW2', target: 'NT1', AuthColor: '#585898', width: 5, Arrow: 'triangle', style: 'solid'} },


        //Asa's links (#C2627F)
        { data: { source: 'AR2', target: 'ZT1', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'AR2', target: 'KG1', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'AR2', target: 'IS1', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'AR2', target: 'NT1', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'AR2', target: 'LS1', AuthColor: '#C2627F', width: 5, Arrow: 'triangle', style: 'solid' } },


        //Noah's links (#791634)
        { data: { source: 'NT2', target: 'NT1', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'IS1', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'ZT1', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'NT1', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'ZT2', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'AR1', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'IS2', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'MW1', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'NT2', target: 'AC1', AuthColor: '#791634', width: 5, Arrow: 'triangle', style: 'solid' } },


      
        //Lynn's links (#5C4501)
        { data: { source: 'LS2', target: 'LS1', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'solid' } },
           { data: { source: 'LS2', target: 'IS1', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'LS2', target: 'KG1', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'LS2', target: 'AC1', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'LS2', target: 'AC2', AuthColor: '#5C4501', width: 5, Arrow: 'triangle', style: 'solid' } },

        
        //Ingo's links (#876B19)
        { data: { source: 'IS1', target: 'KG1', AuthColor: '#876B19', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'IS2', target: 'IS1', AuthColor: '#876B19', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'IS2', target: 'AR1', AuthColor: '#876B19', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'IS2', target: 'MW2', AuthColor: '#876B19', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'IS2', target: 'ZT2', AuthColor: '#876B19', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'IS2', target: 'KG1', AuthColor: '#876B19', width: 5, Arrow: 'triangle', style: 'solid' } },


                
        //Antonio's links (#D9BE6E)
        { data: { source: 'AC2', target: 'AC1', AuthColor: '#D9BE6E', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'AC2', target: 'KG2', AuthColor: '#D9BE6E', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'AC2', target: 'ZT2', AuthColor: '#D9BE6E', width: 5, Arrow: 'triangle', style: 'solid' } },
        { data: { source: 'AC2', target: 'IS2', AuthColor: '#D9BE6E', width: 5, Arrow: 'triangle', style: 'solid' } },

    ]
}