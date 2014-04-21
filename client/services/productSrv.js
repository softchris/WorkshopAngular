var services = angular.module('services');
services.factory('productSrv',function($http, appSrv){
   return {
     products : [
         { Id : 1, Name: 'Book', Description: "A book" },
         { Id : 2, Name: 'PC',Description: "A computer" },
         { Id : 3, Name: 'Mac',Description: "A fruity computer" },
         { Id : 4, Name: 'Ipad',Description: "A tablet" }

     ],
     getProducts : function(){
         return this.products;
        //return $http.get('url',headers);
     },
     getProduct : function(id){
         return this.products[id-1];
     },
     addProduct : function(name){
         //return $http.post('url',name,headers);
        this.products.push({ Id : this.products.length +1, Name : name});
     },
     update : function(product){

     },
     delete : function(id){
         this.products.splice(id-1,1);
     }
   };
});