/**
 * Created by laiadi adlene on 08/02/2017.
 */
(function () {
    'use strict';
    angular.module('MenuApp')
        .component('categoriesList',{
            templateUrl: 'templates/categoriesTemplate.html',
            
            bindings: {
                categoryItems: '<'
            },
           // controller :'categoriesController',
            controllerAs :'catController'
        });
})();

