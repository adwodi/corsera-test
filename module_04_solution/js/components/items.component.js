/**
 * Created by laiadi adlene on 08/02/2017.
 */


(function () {
    'use strict';
    const itemsTemplate = "templates/itemsTemplate.html";
    angular.module('MenuApp')
        .component('itemsList',{
            templateUrl :itemsTemplate,
            controllerAs :'itemCtrl',
            bindings : {
                categoryDetail :'<'
            }

        });

})();