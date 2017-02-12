/**
 * Created by laiadi adlene on 12/02/2017.
 */
(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('detailController', detailController);
    detailController.$inject = ['categoryDetail'];
    function detailController(categoryDetail) {
        var itemCtrl = this;
        itemCtrl.category = "adlene cat";
        itemCtrl.categoryDetail =categoryDetail;

    }
})();
