var controllers = controllers || angular.module('controllers');

controllers.controller('productCreateCtrl',function($scope, productSrv, $routeParams, $location){
    $scope.create = function(){
        productSrv.addProduct($scope.name).then(function(result){
            $location.path(routes.productsAll.route);

        });
        $scope.test = "test";

    };
});

