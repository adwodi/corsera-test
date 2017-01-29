/**
 * ToBuyController controller implementation 
 */
(function () {
    'use strict';
 
     angular.module('ShoppingListCheckOff')    
				    .controller('ToBuyController', ToBuyController);
				   

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService){
		var ctl=this;
		var shopingSrvc=ShoppingListCheckOffService;
		
		
		ctl.itemsToBuy=shopingSrvc.getShoppingItems();// init data from data.js
		
		// buy item : remove it from toBuyItems array and put it into boughtItems throught service call
		 ctl.buyItem=function(itemIndx) {
			shopingSrvc.removeItem(itemIndx);
		}
		
	}// end ToBuyController
	
 
})();


 
	

