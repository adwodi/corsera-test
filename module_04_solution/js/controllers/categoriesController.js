/**
 * Created by laiadi adlene on 08/02/2017.
 */
(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('categoriesController', categoriesController);
    categoriesController.$inject = ['categoryItems'];
    function categoriesController(categoryItems) {
        var catController = this;
        catController.ad = "adlene";
        catController.categoryItems = categoryItems;
        

    }
})();
