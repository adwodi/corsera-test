/**
 * 
 */
(function() {
	'use strict';
	angular.module('NarrowItDownApp')
		   .directive('foundItems',foundItems);
	function foundItems(){
		var ddo={
				templateUrl:'itemsTemplate.html',
				restrict: 'A',
				transclude: true,
				
				scope : {
				foundItems : '<',
				onRemove :'&',
				},
				controller : directiveController ,
				controllerAs : 'dirCtl', 
				bindToController:true	
		}
	 return ddo;
		
	}
	
	function directiveController(){
		var dirCtl=this;
	}
	
})();