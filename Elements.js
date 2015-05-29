var BlogEles = {
    nodes: [
//testing
        { data: { id: '1', name: 'Of Property', href: 'http://inhabitingtheanthropocene.com/2015/02/16/of-property/', color: '#86B342', weight:60 } },
        { data: { id: '4', name: 'Organisms as Ecosystem Engineers', href: 'http://inhabitingtheanthropocene.com/2015/02/19/organisms-as-ecosystem-engineers/', color: '#86B342', weight:60 } },
        { data: { id: '13', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'http://inhabitingtheanthropocene.com/2015/02/23/diachronous-beginnings-of-the-anthropocene-the-lower-bounding-surface-of-anthropogenic-deposits/', color: '#86B342', weight:60 } },
        { data: { id: '14', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'http://inhabitingtheanthropocene.com/category/social-media-in-the-anthropocene/page/3/', color: '#86B342', weight:60 } },
        { data: { id: '17', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'http://inhabitingtheanthropocene.com/2015/03/02/principles-of-tsawalk-an-indigenous-approach-to-global-crisis/', color: '#86B342', weight:60 } },
        { data: { id: '18', name: '"Loess: The Yellow Earth"', href: 'http://inhabitingtheanthropocene.com/2015/03/05/loess-the-yellow-earth/', color: '#86B342', weight:60 } },
        { data: { id: '22', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'http://inhabitingtheanthropocene.com/2015/03/09/hutchinson-concluding-remarks/', color: '#86B342', weight:60 } },
        { data: { id: '23', name: '"A Safe Operating Space for Humanity"', href: 'http://inhabitingtheanthropocene.com/2015/03/14/a-safe-operating-space-for-humanity/', color: '#86B342', weight:60 } },
        { data: { id: '25', name: 'Toward an Ethics of Niche Construction', href: 'http://inhabitingtheanthropocene.com/2015/03/17/toward-an-ethics-of-niche-construction/', color: '#86B342', weight:60 } },
        { data: { id: '26', name: 'Implications of Manufacturing Habitability', href: 'http://inhabitingtheanthropocene.com/2015/03/20/implications-of-manufacturing-habitability/', color: '#86B342', weight:60 } },
        { data: { id: '27', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'http://inhabitingtheanthropocene.com/2015/03/23/advancing-equity-and-going-beyond-basic-survival/', color: '#86B342', weight:60 } },
        { data: { id: '28', name: 'Memes as a Dimension of the Human Niche', href: 'http://inhabitingtheanthropocene.com/2015/03/27/memes-as-a-dimension-of-the-human-niche/', color: '#86B342', weight:60 } },
        { data: { id: '29', name: "Habitability's Non-Inevitability", href: 'http://inhabitingtheanthropocene.com/2015/03/31/habitabilitys-non-inevitability/', color: '#86B342', weight:60 } },
        { data: { id: '31', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'http://inhabitingtheanthropocene.com/2015/04/04/habitability-as-commons/', color: '#86B342', weight:60 } },
        { data: { id: '32', name: 'Toward a More Than Human Anthropocene', href: 'http://inhabitingtheanthropocene.com/2015/04/08/toward-a-more-than-human-anthropocene/', color: '#86B342', weight:60 } },
        { data: { id: '36', name: 'The Dust of Civilization', href: 'http://inhabitingtheanthropocene.com/2015/04/11/the-dust-of-civilization/', color: '#86B342', weight:60 } },
        { data: { id: 'ZT', name: 'Zev Trachtenberg', href: 'http//sma.ztclasses.com/#zt/', color: '#86B342', weight:60 } },
        { data: { id: 'KG', name: 'Organisms as Ecosystem Engineers', href: 'http//sma.ztclasses.com/bio#kg/', color: '#86B342', weight:60 } },
        { data: { id: 'AR', name: 'Asa Randall', href: 'http//sma.ztclasses.com/bio#ar/', color: '#86B342', weight:60 } },
        { data: { id: 'MW', name: 'K. Meghan Wieters', href: 'http//sma.ztclasses.com/bio#mw/', color: '#86B342', weight:60 } },
        { data: { id: 'NT', name: 'Noah Theriault', href: 'http//sma.ztclasses.com/bio#nt/', color: '#86B342', weight:60 } },
        { data: { id: 'LS', name: 'Gerilyn Soreghan', href: 'http//sma.ztclasses.com/bio#ls/', color: '#86B342', weight:60 } },
        { data: { id: 'IS', name: 'Ingo Schlupp', href: 'http//sma.ztclasses.com/post22/', color: '#86B342', weight:60 } },
        { data: { id: 'AC', name: 'Antonio Martinez Castro', href: 'http//sma.ztclasses.com/bio#ac/', color: '#86B342', weight:60 } }

    ],
    edges: [
		//Author-author edges
        { data: { source: 'AC', target: 'KG', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'KG', target: 'AR', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'AR', target: 'IS', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'IS', target: 'LS', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'LS', target: 'NT', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'NT', target: 'ZT', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'ZT', target: 'MW', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'MW', target: 'AC', AuthColor: 'red', Arrow: 'none' } },
		//Author-post edges
		//--Reading posts
        { data: { source: 'AC', target: '23', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'KG', target: '4', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'AR', target: '13', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'IS', target: '22', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'LS', target: '18', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'NT', target: '17', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'ZT', target: '1', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'MW', target: '14', AuthColor: 'red', Arrow: 'none' } },
		//--Reflection posts
        { data: { source: 'AC', target: '31', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'KG', target: '26', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'AR', target: '29', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'IS', target: '28', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'LS', target: '36', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'NT', target: '32', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'ZT', target: '25', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: 'MW', target: '27', AuthColor: 'red', Arrow: 'none' } }
    ]
}
