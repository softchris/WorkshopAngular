var services = angular.module('services');
services.factory('appSrv',function(){
    return {
        domain : 'http://angularworkshop.azurewebsites.net/api/',
        user: null,
        isLoggedIn : function(){
            return this.user != null;
        },
        returnUrl : ''
    };
});
