/**
 * Created by cno on 2014-05-27.
 */
var services = angular.module('services');
services.factory('customerSrv',function($http, appSrv){
    return {
        getCustomers : function(){
            return $http.get(appSrv.domain+ 'Customers');
        }
    };
});
