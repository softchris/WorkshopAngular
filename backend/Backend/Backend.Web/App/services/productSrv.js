var services = angular.module('services');
services.factory('productSrv',function($http, appSrv){
   return {
     getFullText : function(product){
        return product.Name + " " + product.Description;
     },
     getProducts : function(){
         return $http.get(appSrv.domain+ 'Products');
     },
     getProduct : function(id){
         return $http.get(appSrv.domain+ 'Products/'+id);
     },
     addProduct : function(name){
         return $http.post(appSrv.domain+ 'Products/',{ Name:name});
     },
     update : function(product){
         return $http.put(appSrv.domain+ 'Products/',product);
     },
     delete : function(id){
         return $http.delete(appSrv.domain+ 'Products/'+ id);
     }
   };
});