/**
 * service : that manipulates shopping data
 */
(function() {
	'use strict';
	angular.module('ShoppingListCheckOff')
		   .service('ShoppingListCheckOffService',
				     ShoppingListCheckOffService);
	ShoppingListCheckOffService.$inject=['DataService'];
	function ShoppingListCheckOffService(DataService) {
				
		var service = this;
		var dataSrvc=DataService;
		//********* data members*******************************

		var toBuyItems = dataSrvc.getData();
		var boughtItems = [];
		//********* data members*******************************
		
		//***********service methodes***************************
				
		// remove from toBuyItems array and add it to boughtItems array
		service.removeItem = function(item_indx) {
			var item= toBuyItems[item_indx];
			toBuyItems.splice(item_indx,1);
			
			boughtItems.push(item);
			
		}; // end remove items
		
		// expose data to controllers
		service.getShoppingItems=function(){
			return toBuyItems;
		};
		
		service.getBoughtItems=function(){
			return boughtItems;
		};
		
		
		
	};//end service
})();