var controllers = controllers || angular.module('controllers');

controllers.controller('loginCtrl',function($scope, appSrv, $location){
    $scope.login = function(){
        appSrv.user = { Name : $scope.user};

        if(appSrv.returnUrl !== ''){
            $location.path(appSrv.returnUrl);
            appSrv.returnUrl = '';
        }else{
            $location.path(routes.start.route);
        }

    }
});
