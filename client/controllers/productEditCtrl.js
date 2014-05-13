var controllers = angular.module('controllers');

controllers.controller('productEditCtrl',function($scope, productSrv, $routeParams, $location){

    if ($routeParams.id !== undefined){
        productSrv.getProduct($routeParams.id).then(function(result){
            $scope.product = result.data;
        });
    }

    $scope.save = function(){
        productSrv.update($scope.product).then(function(result){
            $location.path(routes.productsAll.route);
        });
    };
});
