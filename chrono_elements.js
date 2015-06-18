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
        { data: { id: 'ZT1', label: 'ZT1', bio: 'text/legends/bios/ZT.html', name: 'Of Property', href: 'text/posts/ZT1.html', color: '#8DC162', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'KG1', label: 'KG1', bio: 'text/legends/bios/KG.html', name: 'Organisms as Ecosystem Engineers', href: 'text/posts/KG1.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'AR1', label: 'AR1', bio: 'text/legends/bios/AR.html', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'text/posts/AR1.html', color: '#C2627F', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'MW1', label: 'MW1', bio: 'text/legends/bios/MW.html', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'text/posts/MW1.html', color: '#585898', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'NT1', label: 'NT1', bio: 'text/legends/bios/NT.html', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'text/posts/NT1.html', color: '#791634', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'LS1', label: 'LS1', bio: 'text/legends/bios/LS.html', name: '"Loess: The Yellow Earth"', href: 'text/posts/LS1.html', color: '#5C4501', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'IS1', label: 'IS1', bio: 'text/legends/bios/IS.html', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'text/posts/IS1.html', color: '#876B19', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'AC1', label: 'AC1', bio: 'text/legends/bios/AC.html', name: '"A Safe Operating Space for Humanity"', href: 'text/posts/AC1.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'ZT2', label: 'ZT2', bio: 'text/legends/bios/ZT.html', name: 'Toward an Ethics of Niche Construction', href: 'text/posts/ZT2.html', color: '#8DC162', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'KG2', label: 'KG2', bio: 'text/legends/bios/KG.html', name: 'Implications of Manufacturing Habitability', href: 'text/posts/KG2.html', color: '#FFEAAC', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'MW2', label: 'MW2', bio: 'text/legends/bios/MW.html', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'text/posts/MW2.html', color: '#585898', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'IS2', label: 'IS2', bio: 'text/legends/bios/IS.html', name: 'Memes as a Dimension of the Human Niche', href: 'text/posts/IS2.html', color: '#876B19', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'AR2', label: 'AR2', bio: 'text/legends/bios/AR.html', name: "Habitability's Non-Inevitability", href: 'text/posts/AR2.html', color: '#C2627F', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'AC2', label: 'AC2', bio: 'text/legends/bios/AC.html', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'text/posts/AC2.html', color: '#D9BE6E', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'NT2', label: 'NT2', bio: 'text/legends/bios/NT.html', name: 'Toward a More Than Human Anthropocene', href: 'text/posts/NT2.html', color: '#791634', weight:55, faveShape: 'ellipse', chrono: 'yes' } },
        { data: { id: 'LS2', label: 'LS2', bio: 'text/legends/bios/LS.html', name: 'The Dust of Civilization', href: 'text/posts/LS2.html', color: '#5C4501', weight:55, faveShape: 'ellipse', chrono: 'yes' } }
	],		
    edges: [
        { data: { source: 'ZT1', target: 'KG1', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'KG1', target: 'AR1', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'AR1', target: 'MW1', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'MW1', target: 'NT1', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'NT1', target: 'LS1', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'LS1', target: 'IS1', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'IS1', target: 'AC1', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'AC1', target: 'ZT2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'ZT2', target: 'KG2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'KG2', target: 'MW2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'MW2', target: 'IS2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'IS2', target: 'AR2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'AR2', target: 'AC2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'AC2', target: 'NT2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } },
        { data: { source: 'NT2', target: 'LS2', AuthColor: 'red', width: 5, Arrow: 'triangle', chrono: 'yes' } }
    ]
}