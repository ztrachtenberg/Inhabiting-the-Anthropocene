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
    //Approach nodes
        { data: { id: 'D', label: 'D', name: 'Descriptive', href: 'text/main/approaches/approaches-D.html', color: '#AF923C', weight:45, faveShape: 'roundrectangle' } },
		{ data: { id: 'I', label: 'I', name: 'Interpretive', href: 'text/main/approaches/approaches-I.html', color: '#9C3655', weight:45, faveShape: 'roundrectangle' } },
		{ data: { id: 'N', label: 'N', name: 'Normative', href: 'text/main/approaches/approaches-N.html', color: '#649C35', weight:45, faveShape: 'roundrectangle' } },
		{ data: { id: 'P', label: 'P', name: 'Practical', href: 'text/main/approaches/approaches-P.html', color: '#36367A', weight:45, faveShape: 'roundrectangle' } },
	]
}