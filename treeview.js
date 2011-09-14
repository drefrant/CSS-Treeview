// Wrap all tree text nodes in <p> tags
// You can do this in markup or use this optional js

function wrapTreeNodes() {	

	var everyEl = document.body.getElementsByTagName('*'),
		listTag = ['dl','dd','dt','ol','ul','li'],
		flowEl = [], listEl, i, l, el, cn, p;

	for (i = 0; i < everyEl.length; i++) {
		if (everyEl[i].className === 'tree') {
			flowEl[flowEl.length] = everyEl[i];
		}
	}
	
	for (i = 0; i < flowEl.length; i++) {
		for (l = 0; l < listTag.length; l++) {	
			listEl = flowEl[i].getElementsByTagName(listTag[l]);
			for (el = 0; el < listEl.length; el++) {			
				if (listEl[el].childNodes) {
					cn = listEl[el].childNodes[0];
					if (cn.nodeType === 3) {
						if (!cn.nodeValue.match(/^\s+$/)) {
							p = listEl[el].insertBefore(document.createElement('p'),cn);
							p.appendChild(cn);
							console.log(cn.nodeValue);
						}
					}
				}				
			}
		}				
	}
}

window.onload = wrapTreeNodes;
