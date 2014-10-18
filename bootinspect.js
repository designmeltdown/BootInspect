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
	biElement("col-xs-1","xs");
	biElement("col-xs-2","xs");
	biElement("col-xs-3","xs");
	biElement("col-xs-4","xs");
	biElement("col-xs-5","xs");
	biElement("col-xs-6","xs");
	biElement("col-xs-7","xs");
	biElement("col-xs-8","xs");
	biElement("col-xs-9","xs");
	biElement("col-xs-10","xs");
	biElement("col-xs-11","xs");
	biElement("col-xs-12","xs");
	
	biElement("col-sm-1","sm");
	biElement("col-sm-2","sm");
	biElement("col-sm-3","sm");
	biElement("col-sm-4","sm");
	biElement("col-sm-5","sm");
	biElement("col-sm-6","sm");
	biElement("col-sm-7","sm");
	biElement("col-sm-8","sm");
	biElement("col-sm-9","sm");
	biElement("col-sm-10","sm");
	biElement("col-sm-11","sm");
	biElement("col-sm-12","sm");
	
	biElement("col-md-1","md");
	biElement("col-md-2","md");
	biElement("col-md-3","md");
	biElement("col-md-4","md");
	biElement("col-md-5","md");
	biElement("col-md-6","md");
	biElement("col-md-7","md");
	biElement("col-md-8","md");
	biElement("col-md-9","md");
	biElement("col-md-10","md");
	biElement("col-md-11","md");
	biElement("col-md-12","md");
	
	biElement("col-lg-1","lg");
	biElement("col-lg-2","lg");
	biElement("col-lg-3","lg");
	biElement("col-lg-4","lg");
	biElement("col-lg-5","lg");
	biElement("col-lg-6","lg");
	biElement("col-lg-7","lg");
	biElement("col-lg-8","lg");
	biElement("col-lg-9","lg");
	biElement("col-lg-10","lg");
	biElement("col-lg-11","lg");
	biElement("col-lg-12","lg");
});


function biElement(target, showOn){
	$(".container .row ." + target).prepend("<div class='bi bi-" + showOn + " bi-" + target + "'>" + target + "</div>").addClass("bi-" + target + "-outline");
	$(".container-fluid .row ." + target).prepend("<div class='bi bi-" + showOn + " bi-" + target + "'>" + target + "</div>").addClass("bi-" + target + "-outline");
	
}

