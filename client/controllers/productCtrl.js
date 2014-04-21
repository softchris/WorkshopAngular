var controllers = angular.module('controllers');

controllers.controller('productCtrl',function($scope, productSrv, $routeParams, $location){
    $scope.products = productSrv.getProducts();

    if ($routeParams.id !== undefined){
        $scope.product = productSrv.getProduct($routeParams.id);
    }

    $scope.create = function(){
        productSrv.addProduct($scope.name);
        $location.path(routes.productsAll.route);
    };

    $scope.delete = function(id){
        productSrv.delete(id);
    }
});
