var controllers = angular.module('controllers');

controllers.controller('productCtrl',function($scope, productSrv, $routeParams, $location){
    $scope.init = function(){
        productSrv.getProducts().then(function(result){
            $scope.products = result.data;
        });
    };

    $scope.init();

    if ($routeParams.id !== undefined){
        $scope.product = productSrv.getProduct($routeParams.id);
    }

    $scope.create = function(){
        productSrv.addProduct($scope.name);
        $location.path(routes.productsAll.route);
    };

    $scope.delete = function(id){
        productSrv.delete(id).then(function(result){
            productSrv.getProducts().then(function(result){
                $scope.products = result.data;
            });
        });
    };
});
