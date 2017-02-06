/**
 * service : that manipulates shopping data
 */
(function() {
	'use strict';
	angular.module('NarrowItDownApp')
		   .service('MenuSearchService',MenuSearchService);
	const STRING_NOT_FOUND=-1;
	MenuSearchService.$inject=['$http','MENU_ITEMS_URL'];
	function MenuSearchService($http,MENU_ITEMS_URL) {
		var service = this;
//************service methodes************************************************************************
		service.getMatchedMenuItems=function(searchTerm){
										return getAllMenuItems()
										.then(function(response){
											var allItems=response.data.menu_items;
											  var foundItems=getMatchedMenuItems(allItems,searchTerm);
											  return foundItems;
										});
														
									}// end getMatchedMenuItems
		
//************service methodes***************************************************************************
		function getAllMenuItems(){
			var response =$http({
				url:MENU_ITEMS_URL,
				method: "GET",
							
			});
			return response;
		}
		

		function getMatchedMenuItems(allItems, searchTerm) {
			var foundItems = [];
			for (var i = 0; i < allItems.length; i++) {
				var cat = allItems[i];
				if (cat.description.indexOf(searchTerm) != STRING_NOT_FOUND) {
					foundItems.push(cat);
				}// end if
			}// for
			
			return foundItems;

		}// end getMatchedMenuItems()
		
	};// end service
})();