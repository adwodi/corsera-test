/**
 * AlreadyBoughtController controller implementation 
 */
(function () {
    'use strict';
 
     angular.module('ShoppingListCheckOff')    
		    .controller('AlreadyBoughtController',
		    		    AlreadyBoughtController);

	
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService){
		var ctl=this;
		var shopingSrvc=ShoppingListCheckOffService;
		
		ctl.alreadyBought=shopingSrvc.getBoughtItems();
		
	}// end ToBuyController
 
})();