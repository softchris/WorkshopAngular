var services = angular.module('services');
services.factory('appSrv',function(){
    return {
        domain : '/api/'//'http://angularworkshop.azurewebsites.net/api/'
    };
});
