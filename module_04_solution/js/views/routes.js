/**
 * Created by laiadi adlene on 08/02/2017.
 */


(function () {
    'use strict';
    angular.module('MenuApp')
        .config(RoutesConfig);

    const homeUrl = '/';
    const homeTemplate = 'templates/menuApp.main.Template.html';
    const categoriesUrl = '/categories';
    const categoriesTemplate = 'templates/main.categoriesTemplate.html';

    const itemsUrl = "/items/{itemId}";
    //const itemsTemplate = "templates/itemsTemplate.html";
    const itemsTemplate = "templates/main.ItemsTemplate.html";
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise(homeUrl);

        $stateProvider.state('home', {
            url: homeUrl,
            templateUrl: homeTemplate
        })
            .state('categories', {
                url: categoriesUrl,
                templateUrl: categoriesTemplate,
                controller: 'categoriesController as catController',
                component :'categoriesList',
                resolve: {
                    categoryItems: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }

            })
            .state('items', {
                url: itemsUrl,
                templateUrl: itemsTemplate,
                controller: 'detailController as itemCtrl',
                component :'itemsList',
                resolve: {
                    categoryDetail: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.itemId);
                        }
                    ]
                }
            });

    }


})();