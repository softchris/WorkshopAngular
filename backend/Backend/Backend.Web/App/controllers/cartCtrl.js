var controllers = angular.module('controllers');

controllers.controller('cartCtrl',function($scope){
   $scope.cart = [
       { Name: "Banana", Price: 10, Quantity: 1  },
       { Name: "Apple", Price: 20, Quantity: 2  },
       { Name: "Pear", Price: 15, Quantity: 10  }
   ];

   $scope.total = function(){
       var returnVal = 0;
       for(var i=0; i< $scope.cart.length; i++){
           returnVal += $scope.cart[i].Price * $scope.cart[i].Quantity;
       }
       return returnVal;
   };

   // watches cart, if cart changes then recalculate
   $scope.$watch('cart',function(oldValue,newValue){
       $scope.sum = $scope.total();
   },true); // looks deep, if something in cart changes

   // assigned once, if cart changes we need to know
   $scope.sum = $scope.total();
});
