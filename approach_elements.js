var BlogEles = {
    nodes: [
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

    // Approach nodes
        { data: { id: '40', name: 'Descriptive', color: 'white', href: 'http://google.com', weight:100 } },
		{ data: { id: '41', name: 'Interpretive', color: 'white', href: 'http://google.com', weight:100 } },
		{ data: { id: '42', name: 'Normative', color: 'white', href: 'http://google.com', weight:100 } },
		{ data: { id: '43', name: 'Practical', color: 'white', href: 'http://google.com', weight:100 } }

    ],
    edges: [

    //Primary approach edges
        { data: { source: '1', target: '42', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '4', target: '40', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '13', target: '41', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '14', target: '43', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '17', target: '41', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '18', target: '40', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '22', target: '40', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '23', target: '40', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '25', target: '42', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '26', target: '40', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '27', target: '43', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '28', target: '40', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '29', target: '41', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '31', target: '40', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '32', target: '41', AuthColor: 'red', Arrow: 'none' } },
        { data: { source: '36', target: '40', AuthColor: 'red', Arrow: 'none' } },

    //Secondary approach edges
        { data: { source: '13', target: '40', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '14', target: '42', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '17', target: '42', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '18', target: '41', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '22', target: '41', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '23', target: '42', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '25', target: '40', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '26', target: '43', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '27', target: '42', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '28', target: '41', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '29', target: '40', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '31', target: '41', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '32', target: '40', AuthColor: 'black', Arrow: 'none' } },
        { data: { source: '36', target: '43', AuthColor: 'black', Arrow: 'none' } }
    ]
}