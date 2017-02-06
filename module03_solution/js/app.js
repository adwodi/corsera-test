/**
 * main modulle : coursera test 3 solution
 * depends on :
 * 			- services.js : data service from remote server
 */

(function() {
	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController',NarrowItDownController)
	.constant('MENU_ITEMS_URL',"https://davids-restaurant.herokuapp.com/menu_items.json");
	
	NarrowItDownController.$inject=['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var ctrl=this;
		ctrl.searchTerm="chicken";
		ctrl.found=[];
		ctrl.findMenuItems=function(){
						if(ctrl.searchTerm.trim()===""){//save bandwidth
							ctrl.found=[];
							return;
						} 
						
						   MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
						   .then(function(foundItems) {
							   	 ctrl.found= foundItems;
							   	 
			                   })
			                  .catch(function(error){
			                	  handelError(error);
			                  });
							}
		//********************
		ctrl.removeItems=function(index){
			ctrl.found.splice(index,1);
			
		}
			
				
	}//end NarrowItDownController
	
	var  handelError=function(error){
		console.log("app error", error)
	}
	

})();

