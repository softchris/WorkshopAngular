/**
 * Created by cno on 2014-05-27.
 */
var controllers = controllers || angular.module('controllers');

controllers.controller('customerCtrl',function($scope, customerSrv, $routeParams, $location){
    $scope.init = function(){
        customerSrv.getCustomers().then(function(result){
            $scope.customers = result.data;
        });
    };

    $scope.init();
});

