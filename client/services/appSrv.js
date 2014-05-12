var services = angular.module('services');
services.factory('appSrv',function(){
    return {
        domain : 'http://angularworkshop.azurewebsites.net/api/'
    };
});
