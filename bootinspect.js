//--------------------------------------------------------------------------//
//
//o.oOOOo.                   ooOoOOo                                      
// o     o                      O                                         
// O     O               O      o                                  O   
// oOooOO.              oOo     O                                 oOo  
// o     `O .oOo. .oOo.  o      o   'OoOo. .oOo  .oOo. .oOo. .oOo  o   
// O      o O   o O   o  O      O    o   O `Ooo. O   o OooO' O     O   
// o     .O o   O o   O  o      O    O   o     O o   O O     o     o   
// `OooOO'  `OoO' `OoO'  `oO ooOOoOo o   O `OoO' oOoO' `OoO' `OoO' `oO 
//                                               O                       
//                                               o'                      
//--------------------------------------------------------------------------//
//
// A very hacky utility for visually debugging Bootstrap layouts
// it is particularly suited for demonstrating how to code with Bootstrap
// 
// Created by Patrick McNeil of designmeltdown.com
// Find more about BootInspect at: 
//   https://github.com/designmeltdown/BootInspect/
//
//--------------------------------------------------------------------------//



$( document ).ready(function() {
	$(".container, .container-fluid").addClass("bi-container-outline");
	$(".container .row, .container-fluid .row").addClass("bi-row-outline");
	
	idBootstrapElement(12, "col")
	idBootstrapElement(13, "push")
	idBootstrapElement(13, "pull")
	idBootstrapElement(13, "offset")
	
});


function biElement(target, showOn, type){
	$(".container .row ." + target).prepend("<div class='bi bi-" + type + " bi-" + showOn + " bi-" + target + "'>" + target.substring(4,target.length) + "</div>").addClass("bi-" + target + "-outline");
	$(".container-fluid .row ." + target).prepend("<div class='bi bi-" + showOn + " bi-" + target + "'>" + target.substring(4,target.length) + "</div>").addClass("bi-" + target + "-outline");	
}

function idBootstrapElement(count, type){
	var sizes = ["xs","sm","md","lg"]
	for(x=0; x<4 ; x++){
		i = 1;
		if(count==13){i=0};
		for(; i<13; i++){
			if(type=="col"){
				biElement("col-"+sizes[x]+"-"+i,sizes[x],type);
			}else{
				biElement("col-"+sizes[x]+"-"+type+"-"+i,sizes[x],type);
			}
		}
	}
}	
