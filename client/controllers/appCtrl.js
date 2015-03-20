var controllers = controllers || angular.module('controllers');
controllers.controller('appCtrl',function($scope, appSrv, $location){
    $scope.appSrv = appSrv;

    $scope.getStatus = function(){
        return appSrv.user == null ? "ej inloggad" : "inloggad som " + appSrv.user.Name;
    };

    $scope.logout = function(){
        appSrv.user = null;
        $location.path(routes.login.route);
    };

    $scope.location = $location;

    $scope.$watch('location.path()',function(newValue, oldValue){
        if(!appSrv.isLoggedIn()){
            if(newValue !== routes.login.route){
                appSrv.returnUrl = newValue;
            }
            $location.path(routes.login.route);
        }
    })
})
