var controllers = controllers || angular.module('controllers');
controllers.controller('bookingCtrl',function($scope){
   $scope.bookings =
       [
           {BookingNr : "11212ABC" , From : '2010-01-01', To : new Date(),Overbooked : true, Supplier : { Name : 'Gothia' }},
           {BookingNr : "11212CCC" , From : '2011-01-01', To : new Date(),Overbooked : false, Supplier : { Name : 'Scandic' }},
           {BookingNr : "11212DDD" , From : '2012-01-01', To : new Date(),Overbooked : false, Supplier : { Name : 'Plaza' }},

       ];

    $scope.predicate = '-From';
    $scope.reverse = false;
});
