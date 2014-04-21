var controllers = angular.module('controllers');

controllers.controller('productEditCtrl',function($scope, productSrv, $routeParams, $location){

    if ($routeParams.id !== undefined){
        $scope.product = productSrv.getProduct($routeParams.id);
    }

    $scope.save = function(){
        productSrv.update($scope.product);
        $location.path(routes.productsAll.route);
    }
});
