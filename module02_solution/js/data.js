/**
 * service : for wich the only purpose is to itnialize data
 */
(function() {
	'use strict';
	angular.module('ShoppingListCheckOff')
		   .service('DataService',
				     DataService);

	function DataService() {
				
		var service = this;
		
		service.getData = function() {
			var items = [{
				name : 'cookies',
				quantite :' 10'
			}, 
			{
				name : 'pizza',
				quantite : '20'
			},
			{
				name : 'Icecream',
				quantite : '4'
			},
			{
				name : 'Popcorn',
				quantite : '19'
			},
			{
				name : 'donut',
				quantite : '4'
			}
			];
			
			return items;

		}//end service.getData
		
		
		
	};//end service
})();