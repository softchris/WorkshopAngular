var services = angular.module('services');
services.factory('appSrv',function(){
    return {
        domain : 'http://localhost:53666/api/'
    };
});
