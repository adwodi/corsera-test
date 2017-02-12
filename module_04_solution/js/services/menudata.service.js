/**
 * Created by laiadi adlene on 08/02/2017.
 * description : coursera assignement solution 04
 */
(function () {
    'use strict';
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('BASE_URL', ' https://davids-restaurant.herokuapp.com')
        .constant('CATEGORIES_URL', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('ITEMS_URL', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');
    MenuDataService.$inject = ['CATEGORIES_URL', 'ITEMS_URL', '$http'];
    function MenuDataService(CATEGORIES_URL, ITEMS_URL, $http) {
        var srvc = this;
        srvc.getAllCategories = function () {
            var response = $http({
                url: CATEGORIES_URL,
                method: "GET"

            });
            return response;
        };//end getAllCategories
        srvc.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                url: ITEMS_URL + categoryShortName,
                method: "GET"

            });
            return response;

        };//end getItemsForCategory

    }


})();
